const compose = (...fns) => value => fns.reduce((acc, currFn) => currFn(acc), value)

module.exports = compose
