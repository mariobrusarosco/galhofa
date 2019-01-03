console.log('Galhofa JS')

const { expect, test } = require(`./Lab`)

const DrugLord = "Walter White"

test("Drug Lord test One", () => {
	expect(DrugLord).asPureAs('Walter !!hite')
})

test("Drug Lord test Two", () => {
	expect(DrugLord).asPureAs('Walter White')
})

