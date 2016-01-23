var dest = './dist';
var src = './src';

module.exports = {
    vars: {
        dest: dest,
        src: src
    },
    clean: {
        target: dest
    },
    rev: {
        src: dest,
        base: dest,
        index: dest + '/index.html',
        dist: dest,
        js: {
            app: dest + '/js/index.js',
            vendor: dest + '/js/vendor.js',
            dest: dest + '/js'
        },
        styles: {
            src: dest + '/styles/main.css',
            dest: dest + '/styles'
        }
    },
    // @see : https://www.browsersync.io/docs/options/
    sync: {
        port: 8080,
        // Open the localhost URL
        open: "local",
        // management UI for connected devices.
        ui: {
            port: 8888,
            weinre: {
                port: 9090
            }
        },
        server: {
            baseDir: dest
        },
        // mirrored features on connected devices.
        ghostMode: {
            clicks: true,
            forms: true,
            scroll: true
        },
        // Log connections
        logConnections: true,
        // Log information about changed files
        logFileChanges: true,
        // Don't show any notifications in the browser.
        notify: false
    },
    scripts: {
        src: src + '/js/**/*.*',
        dest: dest + '/js',
        output: 'index.js'
    },
    styles: {
        src: src + '/styles/**/*.{sass,scss,css}',
        dest: dest + '/styles',
        settings: {
            errLogToConsole: true,
            indentedSyntax: false, // Enable .sass syntax?
            imagePath: '/images' // Used by the image-url helper
        }
    },
    html: {
        src: 'src/**/**.html',
        dest: dest
    },
    images: {
        src: 'src/images/**/**.*',
        dest: dest + '/images'
    },
    watch: {
        styles: {
            src: src + '/styles/**/*.{sass,scss,css}',
            tasks: ['reload:styles']
        },
        html: {
            src: 'src/**/**.html',
            tasks: ['reload:html']
        },
        all: {
            src: 'src/**/*.*',
            tasks: ['reload:all']    
        }
    },
    wiredep: {
        src: 'src/index.html',
        dest: dest
    },
    build: {
        css: dest + '/styles',
        js: dest + '/js'
    }
};
