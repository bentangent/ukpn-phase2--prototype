# UKPN Phase 2 - __*Prototype*__

### Stack
* Express
* JS (ES6)
* SCSS
* Vash - https://github.com/kirbysayshi/vash


### Installation
1. Install dependencies - `yarn`

2. Run dev server - `yarn start`

### Build
* `yarn build` (will build everything into `/dist/`)



### Structure

* `bin` - express server
* `api` - currently just mock `.json` data, hopefully to be replaced with an api from 3Chillies
* `config` - Webpack config files (common, dev and prod)
* `dist` - build folder
* `routes` - local development only. Build a route when you need to create a new page. 
  * TODO: Pass backend OR mock data through to routes
* `src`
  * `global` - All components used throughout the site and in multiple tempaltes.
    * JS
    * Partials (vash)
    * Styles (SCSS)
  * `application-start-overview`, `contact-us`, `...` - Specific template
    * Only pulled into page where necessary
    * Separate `X.bundle.js` for each template
    * Separate `X.css` for each template