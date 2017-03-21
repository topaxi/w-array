const w = (strings, ...values) =>
  strings
    .reduce((string, s, i) => string + values[i - 1] + s)
    .trim()
    .split(/\s+/)

module.exports = w
