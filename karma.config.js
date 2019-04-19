module.exports = function (config) {

    config.set({
        singleRun: true,

        browsers: ['ChromeNoSandbox'],
        customLaunchers: {
            ChromeNoSandbox: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox']
            }
        },

        frameworks: [
            'jasmine'
        ],

        files: [
            './src/index.spec.js'
        ],

        reporters: ['verbose', 'mocha', 'coverage', 'remap-coverage'],

        preprocessors: {
            './src/index.spec.js': ['coverage', 'webpack', 'sourcemap'],
        },

        webpack: require('./webpack-test.config'),

        webpackMiddleware: {
            stats: 'errors-only'
        },

        coverageReporter: {
            type: 'json',
            subdir: '.',
            dir: 'build/coverage/',
            file: 'coverage.json'
        },

        plugins: [
            require('karma-jasmine'),
            require('karma-mocha-reporter'),
            require('karma-remap-coverage'),
            require('karma-coverage'),
            require('karma-chrome-launcher'),
            require('karma-verbose-reporter'),
            require('karma-webpack'),
            require('karma-sourcemap-loader')
        ]
    });
};
