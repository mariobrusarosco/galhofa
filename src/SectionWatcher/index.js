function SectionWatcher(config) {
  this.selector = config.selector
  this.sections = (() => [...document.querySelectorAll('.sections')])
  this.console = function() { console.log(this) }
} 
 
module.exports = {
  SectionWatcher
}