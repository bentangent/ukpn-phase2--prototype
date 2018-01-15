# UKPN Phase 2 - __*Prototype*__

### Stack
* Express
* JS (ES6)
* SCSS
* Vash - https://github.com/kirbysayshi/vash


### Installation
1. Install dependencies - `yarn`
2. Start Express server - `yarn start`

### Structure

* `bin` - express server
* `public` - build folder
* `routes` - local development only. Build a route when you need to create a new page. 
  * TODO: Pass backend OR mock data through to routes
* `src`
  * `global` - All components used throughout the site and in multiple tempaltes.
    * JS
    * Partials (vash)
    * Styles (SCSS)
  * `t1`, `t2`, `...` - Specific template
    * Only pulled into page where necessary
    * Separate `tX.bundle.js` for each template
    * Separate `tX.css` for each template