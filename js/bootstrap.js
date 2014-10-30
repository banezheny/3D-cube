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
    },

    config: {
        'modules/loader/LoaderTexture': {
//            planeTextureUrl: 'http://www.olegvolk.net/newsite/texturelibrary/greenbark.jpg'
            planeTextureUrl: 'js/images/plane/'
        }
    }
});

define([

    'application'

], function (app) {

    app.init();
    app.animate();

});
