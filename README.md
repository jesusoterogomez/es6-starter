# Web ES6 Template

This template is aimed towards people in need of a solid development environment to create single page websites. It has a useful set of gulp tasks that will make developing a website a much frictionless process, such as auto reloading on source code changes, and generation of a deployment version with several optimizations to keep your website lightweight and compatible.

You can also use ES6 - ES2015 Javascript and have it automatically transpiled to ES5 Javascript automatically. Write the scripts for your website using the modern language features.

## Table of contents
1. [Features](#features)
2. [Installation](#installation)
3. [Running Development Server](#server)
4. [Building Deployable](#build)
5. [Usage Guide](#usage)

### Features <a name="features"></a>

This template contains several build improvements and development features that will make kickstarting your website a breeze.

- BrowserSync (Reload your application in multiple devices while developing)
- SASS (.scss) support
- Babel (Use ES6 - ES2015, the result will be transpiled for compatibility with current browsers)
- Bower (Manages Front End Dependencies... JQuery and Fontawesome are included as an example)
- Rev (Busts cache by hashing files after building)
- Cssnano (Minifies CSS and adds cross-browser compatibility)
- Uglify (Javascript Compressor)

## Installation <a name="installation"></a>

### Installing dependencies

This templates's dependencies are managed by [npm](https://www.npmjs.org/) and [bower](https://www.bower.io), before proceding with the cli commands below, make sure you have [node.js](http://nodejs.org/), [npm](https://www.npmjs.org/) and [bower](https://www.bower.io) installed.

####Install project dependencies
npm handles the installation of the dependencies within the project. Install the dependencies with the following command.

```sh
$ npm install
```

### Install additional dependencies

Client side dependencies are managed by bower, to add or remove bower components, use the following command. prepending the bower command with
`npm run bower --` ensures you are using the local bower installation, avoiding installing bower as a global dependency.

If you do have bower installed globally, you don't need to use this command. Instead refer to the default bower usage guide.

```sh
# to install
$ npm run bower -- [bower-command]
```

## Running Development Server <a name="server"></a>

BrowserSync is used to create a static server with live reloading feature when there's any file change.
The local server is running by default on port `8080`, with the BrowserSync management UI on port `8888`.

These settings can be easily changed in `gulp/config.js`

```sh
$ npm start
```

Note: When running the server, your default browser will automatically open the website, and the terminal output will provide the local and external URLs for easy testing on other devices.

## Building Deployable <a name="build"></a>

### Building the distributable assets

When you're all set, you can create the distributable version that you can upload to your hosting platform.

```sh
$ npm run build
```

### The built version contains:

#### Scripts
- Your scripts merged into index.js
- Your bower dependency scripts merged into vendor.js

#### Styles
- Your styles merged into main.css
- Your bower dependency styles merged into vendor.css

#### Optimizations
- Your scripts and styles will be minified and compressed.
- Your files will be automatically appended with a build hash to bust cache, and the hashed filenames will be updated on index.html

## Usage Guide <a name="usage"></a>

Run the development server and start editing.
All the modifications should be performed in the `/src` directory, unless you change the build tasks found in the `gulp` directory.

### Editing HTML
This template, in its current state, it's meant to be used to develop one page websites. The editing of the content should be done in `index.html`. It will be automatically reflected on all your connected browsers.

### Editing Styles

SCSS is used for styles.
By default, the project includes a set of partials, such as `_variables.scss`, `_mixins.scss` and `_fonts.scss`, which are imported from the `main.scss` file.
These are for example purposes only, so make sure to give the website your own touch. 

To keep consistency, follow these general rules: 
- make sure to add all possibly repeated values in `_variables.scss`.
- Add any CSS fonts (like Google Fonts) in `_fonts.scss`.
- Add mixins to `_mixins.scss`.

Note that this is only a minimal organization guide, and you can tailor this to your specific purposes.
To read more on how to create an organized structured for your SASS styles, [Click Here](http://thesassway.com/beginner/how-to-structure-a-sass-project)

The entry point for the SASS compiler is `main.scss`, so make sure to `@import` all the partial files you create on `main.scss`. You can change the this setting in `gulp/config.js`

Important: You don't need to update the references to the css files in the `index.html` file. The build tasks will handle this for you seamlessly.

### Editing Scripts

Write your scripts in ES6 - [Read more on ES6 Features](https://github.com/lukehoban/es6features)

And add the `.js` files to the `src/js` directory. You don't need to add the script tags to the `index.html` file, All your `.js` files will be transpiled to currently supported javascript and concatenated into `index.js`

If you need to include external javascript libraries such as jquery, underscore, timezone, etc. refer to the [installation of dependencies guide](#installation) to install them using bower.

Again, you don't need to include the script tags into the `index.html` file. All bower scripts are combined into `vendor.js` and added automatically to the html file during the build process.
