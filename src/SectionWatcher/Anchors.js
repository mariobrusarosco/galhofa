function Anchors(config) {
  this.selector = config.selector
}

Anchor.prototype.debug = function() {
  console.log(`Anchors name: ${this.selector}')
}