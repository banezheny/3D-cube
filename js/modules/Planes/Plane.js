define([
    'three',
    'underscore',
    'modules/loader/LoaderTexture'

], function (THREE, _, LoaderTexture) {
    'user strict';

    var Plane = function (options) {
        var geometry = options.geometry, texture;

        this.geometry = new THREE.PlaneGeometry(geometry.width, geometry.height, geometry.widthSegments, geometry.heightSegments);

        if (options.material.map) {
            texture = (new LoaderTexture()).load(options.material.map);
            this.material = new THREE.MeshBasicMaterial(_.extend(options.material, {map: texture}));
        } else {
            this.material = new THREE.MeshBasicMaterial(options.material);
        }

    };

    Plane.prototype.setHeight = function (options) {
        if (options.random) {
            var length = this.geometry.vertices.length, maxHeight = options.maxHeight || 1000;
            for (var i = 0; i < length; i++) {
                this.geometry.vertices[i].z = maxHeight * Math.random() * 0.9;
            }
        } else {

        }
        return this;
    };

    Plane.prototype.initializePlane = function () {
        this.plane = new THREE.Mesh(this.geometry, this.material);
        return this;
    };

    Plane.prototype.rotationXYZ = function (options) {
        if (options.x) {
            this.geometry.applyMatrix(new THREE.Matrix4().makeRotationX(options.x));
        }
        if (options.y) {
            this.geometry.applyMatrix(new THREE.Matrix4().makeRotationY(options.y));
        }
        if (options.z) {
            this.geometry.applyMatrix(new THREE.Matrix4().makeRotationZ(options.z));
        }
        return this;
    };

    Plane.prototype.setToScene = function (scene) {
        scene.add(this.plane);
        return this;
    };

    Plane.prototype.setPosition = function (position) {
        _.extend(this.plane.position, position);
        return this;
    };

    Plane.prototype.getRealObject = function () {
        return this.plane;
    };

    return Plane;


});
