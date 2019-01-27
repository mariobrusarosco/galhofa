const _ = require('lodash')

console.log("Just testing lodash as a perDependency", _.join(['Walter',' ', 'White']))

module.exports = {
  Lab: require(`./Lab`),
  SectionWatcher: require('./SectionWatcher')
}

// module.exports = {
// 	test: "ae",
// 	test2: "se2"
// }

// module.exports = Test
// console.log(test)
// export default {
// 	...test
// }

// const DrugLord = "Walter White"

// test("Drug Lord test One", () => {
// 	expect(DrugLord).asPureAs('Walter !!hite')
// })

// test("Drug Lord test Two", () => {
// 	expect(DrugLord).asPureAs('Walter White')
// })

