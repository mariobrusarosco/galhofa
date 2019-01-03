const test = (testName, givenTest) => {
	try{
		givenTest()
		console.log(`\n \u{2714}  : ${testName} has passed.\n `)
	}
	catch(error) {
		console.error(`\n \u{274C}  : ${testName} has failed. \n\n  ${error}\n`)
	}
}

module.exports = test
