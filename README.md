# Web ES6 Template

## Features

This template contains several build improvements and development features that will make kickstarting your website a breeze.

- BrowserSync (Reload your application in multiple devices while developing)
- SASS (.scss) support
- Babel (Use ES6 and ES2015, the result will be transpiled for compatibility with current browsers)
- Bower (Manages Front End Dependencies... JQuery and Fontawesome are included as an example)
- Rev (Busts cache by hashing files after building)
- Cssnano (Minifies CSS and adds cross-browser compatibility)
- Uglify (Javascript Compressor)

## Installing dependencies

This templates's dependencies are managed by [npm](https://www.npmjs.org/) and [bower](https://www.bower.io), before proceding with the cli commands below, make sure you have [node.js](http://nodejs.org/), and [npm](https://www.npmjs.org/) installed.

####Install project dependencies
npm handles the installation of the dependencies within the project. Check the list of dependencies in `package.json` in the project root, Install the dependencies with the following command.

```sh
$ npm install
```

## Running the local development server

```sh
$ npm start
```

## Building the distributable assets

```sh
$ npm run build
```
