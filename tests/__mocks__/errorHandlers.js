export const errorHandler = (errors, warnings, successes) => {
  return {
    error: error => {
      errors.push(error)
    },
    success: success => {
      successes.push(success)
    },
    warning: warning => {
      warnings.push(warning)
    },
  }
}