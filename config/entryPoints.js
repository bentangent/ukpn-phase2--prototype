const templates = [
  'global',
  'home',
  'landing-pages',
  'contact-us',
  'psr-landing',
  'installers-landing',
  'ss-content-overview',
  'projects-content-overview',
  'ss-calculators',
  'application-start-overview',
  'forms'
]

/**
 * Get Entry Points
 * Generates an entry object for webpack
 * 
 * Takes args and appends to entry file array i.e. webpack hot module
 */
module.exports = {
  getEntryPoints: function(args) {
    let entryPoints = {}
    templates.forEach((template) => {
      if (args) {
        entryPoints[template] = [`./src/${template}/js/entry.js`, ...args];  
      } else {
        entryPoints[template] = `./src/${template}/js/entry.js`;
      }
    });
    return entryPoints;
  }
}
  