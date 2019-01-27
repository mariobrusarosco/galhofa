console.log("Its a bar...positioned at the top of a page...to indicate how much a user has scrolled")

// IMPORTANT //
// This feature is gonna be made with JS Class approach

class ScrollIndicator {
  constructor(name) {
    this.name = name;
  }

  debug() {
    console.log(`Component: ${this.name} is on Debug Mode`)
  }
}


const scrollIndicator = new ScrollIndicator("test")
scrollIndicator.debug()