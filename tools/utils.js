import fs from 'fs'
import { execSync } from 'child_process'
import semver from 'semver'
import open from 'opener'
import 'colors'
import replace from 'replace-in-file'
import pkg from '../package.json'

/* eslint-disable no-console */

export const spinner = ['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷']
export const releasePlural = releaseType => (releaseType === 'release' ? `${releaseType}s` : `${releaseType}es`)

export const txts = {
  error: '\n----- Error -----\n'.red,
  status: {
    current: '',
    gathering: 'Gathering information...',
  },
  unStagedChanges: 'Unstaged changes found. Please stash or commit your work before continuing.',
  questions: { releaseType: verb => `What type of release are you ${verb}?` },
  fetchingLogs: branch => `Fetching git logs from origin/${branch}`,
  releaseCreated: releaseTitle =>
    [
      `${releaseTitle.green} was successfully generated.\n`,
      'Next steps:',
      ' - Merge the request in Gitlab',
      ` - ${'npm run release finish'.bgWhite.green} to complete the release`,
    ].join('\n'),
  uCanceled: 'User Canceled',
  whatVersionRelease: 'What version will you be releasing?',
  whichUnfinishedRelease: releaseType =>
    `Multiple unfinished ${releasePlural(releaseType)} found. Which one would you like to finish?`,
  invalidVersion: version =>
    `${version.red} is not a valid version number. Please enter a valid Semantic Version number`,
}

/**
 * Synchronously exec shell command
 * @param  {String} command
 * @return {String} trimmed stdout
 */
export const execTrim = command =>
  execSync(command)
    .toString()
    .trim()

/**
 * Check if there are unstaged changes
 * @return {String} git diff
 */
export const checkUnstagedChanges = () => {
  return execTrim('git diff --color')
}

/**
 * Find existing, unfinished release branches
 * @param  {String} releaseType hotfix or release
 * @return {Array} Array of potential unfinished branches
 */
export const findUnfinishedReleases = releaseType => {
  const unfinishedReleases = execTrim('git branch -l')
    .split('\n')
    .filter(branchName => new RegExp(`${releaseType}/.+`).test(branchName))

  if (!unfinishedReleases.length) {
    console.log(`There are no unfinished ${releasePlural(releaseType)}`)
    process.exit(0)
  }

  return unfinishedReleases.map(String.trim)
}

/**
 * Read a package.json from master branch
 * extract version
 * @return {String} version
 */
export const getCurrentVersion = () => {
  const pkgJSON = execTrim('git show master:package.json')
  return JSON.parse(pkgJSON).version
}

/**
 * Check next version based on semver
 * @param  {String|Number} version
 * @return {Number} newVersion
 */
export const getNewVersion = version => {
  const currentVersion = getCurrentVersion()
  const semverTypes = ['major', 'minor', 'patch']
  let newVersion
  if (semverTypes.includes(version)) {
    newVersion = semver.inc(currentVersion, version)
  } else {
    newVersion = version
  }
  return newVersion
}

/**
 * Capitalizes a string
 * @param  {String} str uncapitalized string
 * @return {String} str capitalized string
 */
export const capitalize = str => str.replace(/\b\w/g, match => match.toUpperCase())

/**
 * Update the projects version number
 * @param  {Object} version
 * @return {Buffer} updated file
 */
export function updatePackageJSON(props) {
  const packageJSON = JSON.parse(fs.readFileSync('./package.json'))
  const updatedPackageJSON = JSON.stringify(deepMerge(packageJSON, props), null, '  ')
  return fs.writeFileSync('./package.json', `${updatedPackageJSON}\n`)
}

export const releaseVersionDate = version => {
  const today = new Date()
  const releaseDate = `${today.getDate()}/${today.getUTCMonth() + 1}/${today.getFullYear()}`
  return `## ${version} - ${releaseDate}`
}

/**
 * Updates README AND CHANGELOG
 * @param  {Object} version current and new version
 * @param  {String} releaseLog tickets in this release
 * @return {void}
 */
export function updateChangelog(version, releaseLog) {
  const changelog = fs.readFileSync('./CHANGELOG.md', 'utf8').split('\n')
  const fromLine = changelog.find(line => line.match(/##(\s|)\[unreleased\]?.+/i)) || changelog[0]

  return replace({
    files: 'CHANGELOG.md',
    from: fromLine,
    to: `${fromLine}\n\n${releaseVersionDate(version)}\n\n${releaseLog}`,
  })
    .then(changedFiles => {
      console.log('Modified files:', changedFiles.join(', '))
    })
    .catch(error => {
      console.error('Error occurred:', error)
    })
}

/**
 * Fetch and compare the difference in
 * git logs between 2 branches
 * @param  {String} source branch
 * @param  {String} target branch
 * @return {Array} of commits
 */
export function getLogDiff(source, target) {
  const sourceHEAD = execTrim(`git rev-parse ${source}`)
  const targetHEAD = execTrim(`git rev-parse ${target}`)
  return execTrim(`git log --pretty=format:%n%b%n----- ${sourceHEAD}...${targetHEAD}`)
    .split('-----')
    .filter(String)
}

export const git = {
  parseLogs,
  getLogDiff,
  get currentBranch() {
    return execTrim('git symbolic-ref --short -q HEAD')
  },
  get releaseLog() {
    return parseLogs(getLogDiff('develop', 'master'))
  },
  get tempBranchName() {
    return Math.random()
      .toString(36)
      .slice(2)
  },
  openMR: (source, target = 'develop') => {
    const { gitlab } = pkg.config
    const mrUrl = `${gitlab.url}/${gitlab.project}/merge_requests/new`
    if (!source) {
      source = git.currentBranch
    }
    execSync(`git push origin ${source}`)
    open(`${mrUrl}?merge_request[source_branch]=${source}&merge_request[target_branch]=${target}`)
  },
  /**
   * Fetch updates from repo for provided branches
   * @param  {Array} branches
   */
  fetchLatest: branches => {
    const fetchingLatest = 'Fetching latest from'
    const currentBranch = git.currentBranch
    const tempBranch = git.tempBranchName
    execSync(`git checkout -b ${tempBranch}`)
    branches.forEach(branch => {
      console.log(`${fetchingLatest} origin/${branch}`.dim)
      execSync(`git fetch origin ${branch}:${branch}`)
    })
    console.log('Cleaning up'.dim)
    execSync(`git checkout ${currentBranch} && git branch -D ${tempBranch}`)
  },
}

/**
 * Format an array of parsed git logs
 * @param  {Array} parsedGitLog
 * @return {String} formattedGitLogs
 */
export const formatGitLog = parsedGitLog => {
  return Object.entries(parsedGitLog)
    .reduce((filtered, [type, log]) => {
      if (log.length) {
        filtered.push(`### ${capitalize(type)}\n\n${log.join('\n')}`)
      }
      return filtered
    }, [])
    .join('\n\n')
}

/**
 * Remove duplicates from an array of elements
 * @param  {Array} array  array with possible duplicates
 * @return {Array}        array with only unique values
 */
export const uniqueArray = array => array.filter((elem, pos, arr) => arr.indexOf(elem) === pos)

/**
 * Takes an array of commits and sorts them
 * by the type of changes eg. 'Changed', 'Added', 'Fixed'
 * @param  {Array} gitlogs
 * @return {Array} parsed commits
 */
export function parseLogs(gitlogs) {
  // case insensitive matcher for past, present and future ie. "fixed, fix, fixes"
  const typeMap = {
    added: /add(ed\b|es\b|\b):/gi,
    changed: /(change|update)+(d\b|s\b|\b):/gi,
    improved: /improve(d\b|s\b|ment):/gi,
    fixed: /fix(ed\b|es\b|\b):/gi,
  }
  const { jira } = pkg.config
  const inlineAttributionRegExp = /(\((@.+) in ([A-Z]+-\d+)\))/gim
  const defaultAttributionRegExp = /^\(@.+ in [A-Z]+-\d+\)/gi

  const parsedLog = Object.keys(typeMap).reduce((acc, curr) => {
    acc[curr] = []
    return acc
  }, {})

  gitlogs.reverse().forEach(commitLog => {
    if (commitLog) {
      const msg = commitLog.split('\n').filter(String)
      const defaultAttribution = msg.find(log => log.match(defaultAttributionRegExp))
      if (msg.length) {
        msg.forEach(log => {
          const replacer = (match, developer, taskId) => {
            const task = taskId.toUpperCase() // ensure correct case or link won't work
            return ` (${developer} in [${task}](${jira}/browse/${task}))`
          }
          let attribution = `${log.split(inlineAttributionRegExp)[1] || defaultAttribution || ''}`
          attribution = attribution.replace(/\((@.+) in ([A-Z]+-\d+)\)/gim, replacer)
          const types = Object.entries(typeMap)

          if (types.length) {
            types.forEach(([type, typeRegExp]) => {
              if (log.match(typeRegExp)) {
                log = log
                  .replace(typeRegExp, '')
                  .replace(inlineAttributionRegExp, '')
                  .trim()
                const typeLog = `${log}${attribution}\n`
                parsedLog[type].push(typeLog)
              }
            })
          }
        })
      }
    }
  })

  // Ensure all entries are unique
  Reflect.ownKeys(parsedLog).forEach(type => {
    parsedLog[type] = uniqueArray(parsedLog[type])
  })

  return formatGitLog(parsedLog)
}

export const defaultNewVersion = ({ releaseType }) => {
  let version
  if (releaseType === 'hotfix') {
    version = getNewVersion('patch')
  }
  return version
}

export const validateVersion = version => {
  let response
  if (semver.valid(version)) {
    response = true
  } else {
    response = 'Invalid version number'
  }
  return response
}

export const deepMerge = (obj1, obj2) => {
  const mergedObj = Object.assign({}, obj1, obj2)
  Reflect.ownKeys(obj2).forEach(prop => {
    if (Array.isArray(obj2[prop])) {
      mergedObj[prop] = Array.isArray(obj1[prop]) ? uniqueArray(obj1[prop].concat(obj2[prop])) : obj2[prop]
    } else if (typeof obj2[prop] === 'object') {
      mergedObj[prop] = deepMerge(obj1[prop], obj2[prop])
    } else {
      mergedObj[prop] = obj2[prop]
    }
  })

  return mergedObj
}

/**
 * Save a changelog
 * @param  {Float} version
 */
export const saveLog = (version, log) => {
  const wstream = fs.createWriteStream(`.git/${version}`)
  wstream.write(log)
  wstream.end()
}

/**
 * Load the saved changelog
 * @param  {Float} version
 * @return {String} Changelog for the requested version
 */
export const loadLog = version => fs.readFileSync(`.git/${version}`).toString()

/**
 * Remove the saved changelog
 * @param  {Float} version
 * @return {String} removedFile
 */
export const removeLog = version => fs.unlinkSync(`.git/${version}`)

/**
 * Returns the values of an object in a specific order
 * @param  {Object} obj
 * @param  {Array} order
 * @return {Array} orderedValues
 */
export const orderedValues = (obj, order) => {
  const newOrder = order.map(key => obj[key] || null).filter(Boolean)
  return uniqueArray(newOrder.concat(Object.values(obj)))
}
