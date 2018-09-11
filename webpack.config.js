
const path = require('path');
const fs = require('fs');
const Encore = require('@symfony/webpack-encore');
const HtmlWebpackPlugin = require('html-webpack-plugin');

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.scss) if you JavaScript imports CSS.
     */
    .addEntry('app', './assets/index.js')
    //.addEntry('page1', './assets/js/page1.js')
    //.addEntry('page2', './assets/js/page2.js')

    .createSharedEntry('vendor', [
        'vue',
        'vue-router',
        'vuex',
    ])

    .addStyleEntry('css/app', './assets/css/app.scss')

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())

    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // enables Sass/SCSS support
    .enableSassLoader()

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()

    // allow vue files to be processed
    .enableVueLoader()

    .configureBabel((babelConfig) => {
        babelConfig.presets.push('es2017', 'stage-1');
    })

    .addPlugin(new HtmlWebpackPlugin({
        template: 'assets/index.html',
    }));
;

const webpackConfig = Encore.getWebpackConfig();

if (webpackConfig.devServer) {
    Object.assign(webpackConfig.devServer, {
        open: true,
    });
}

webpackConfig.resolve.alias['@'] = path.join(__dirname, 'assets');

if (!Encore.isProduction()) {
    fs.writeFile('fakewebpack.config.js', '/* eslint-disable */ module.exports = ' + JSON.stringify(webpackConfig, null, 4), (err) => {
        console.log(err || 'fakewebpack.config.js written');
    });
}

module.exports = webpackConfig;
