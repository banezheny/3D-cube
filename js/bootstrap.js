require.config({
    baseURI: 'js/',

    paths: {
        three: 'lib/three.min',
        underscore: 'lib/underscore.min'
    },

    shim: {
        three: {
            exports: 'THREE'
        }
    }
});

define([

    'application'

], function (app) {

    app.init();
    app.animate();

});
