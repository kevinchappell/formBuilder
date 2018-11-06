'use strict';

((window.gitter = {}).chat = {}).options = {
  room: 'kevinchappell/formBuilder'
};

const toast = opts => {
  opts = Object.assign({ type: 'success', msg: '' }, opts)
  const toast = document.createElement('div')
  const text = document.createTextNode(opts.msg)
  toast.classList.add('toast')
  toast.classList.add(opts.type)
  toast.appendChild(text)
  document.body.appendChild(toast)
  setTimeout(() => {
    document.body.removeChild(toast)
  }, 2500)
}

const copyBtnImg = () => {
  const img = document.createElement('img')
  img.src = 'https://formbuilder.online/docs/img/clipboard.svg'
  img.className = 'clippy'
  img.width = 13
  img.alt = 'Copy to clipboard'
  return img
}

const copyBtn = msg => {
  const btn = document.createElement('button')
  btn.className = 'btn'
  btn.appendChild(copyBtnImg())
  const clipboard = new window.ClipboardJS(btn, {
    text: () => msg,
  })
  clipboard.on('success', e => {
    toast({ msg: 'Copied to clipboard.' })
    e.clearSelection()
  })
  return btn
}

setTimeout(() => {
  const codeBlocks = document.querySelectorAll('code.hljs')
  if (codeBlocks && codeBlocks.length) {
    for (let i = 0; i < codeBlocks.length; i++) {
      codeBlocks[i].appendChild(copyBtn(codeBlocks[i].innerText))
    }
  }
}, 2000)
