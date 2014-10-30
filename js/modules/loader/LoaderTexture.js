define([

    'module',
    'three',
    'underscore'

], function (module, THREE, _) {
    'user strict';

    var LoaderTexture = function () {

        this.textures = [];

    };

    LoaderTexture.prototype.load = function (nameTexture) {
        var texture = THREE.ImageUtils.loadTexture(module.config().planeTextureUrl + nameTexture), textureObj = {};
        textureObj[nameTexture] = texture;
        this.textures.push(textureObj);

        return texture;

    };


    return LoaderTexture;
});