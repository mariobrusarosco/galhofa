function SectionWatcher ({
	querySelector,
	wait
}) {
	const self = this
	// TODO: force the use of the new keyword
	self.AnchorsList = require('../AnchorsList')
	self.selector = querySelector
	self.wait = wait

	setTimeout(function() {
		self.queryAllSections(wait)
	}, self.wait)
}

SectionWatcher.prototype.queryAllSections = function(timeToWait) {
	try {
		this.foundSections = [...document.querySelectorAll(`${this.selector}`)]
		console.log('Sections queried after', timeToWait)
	}catch (e) {
		console.error(`Error: You've passed an invalid 'query selector'`)
	}
	return this
}


module.exports = SectionWatcher
