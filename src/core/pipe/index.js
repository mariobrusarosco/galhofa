const pipe = (...fns) => value => fns.reduceRight((previousFn, currFn) => currFn(previousFn), value)

module.exports = pipe
