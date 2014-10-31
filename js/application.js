define([

    'three',
    'modules/planes/Plane'

], function (THREE, Plane) {
    'user strict';
    var camera, scene, renderer, plane;

    var app = {
        init: function () {


            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
            scene = new THREE.Scene();

            plane = new Plane({
                geometry: {
                    width: 500,
                    height: 375,
                    widthSegments: 30,
                    heightSegments: 30
                },
                material: {
                    map: 'plane_1.jpg'
//                    wireframe: true
                }
            });

            plane.setHeight({random: true, maxHeight: 150}).rotationXYZ({x: -Math.PI / 2}).initializePlane().setToScene(scene);
//            plane.initializePlane().setToScene(scene);

            camera.position.y = 400;
            camera.rotation.x = -0.8;
            camera.position.z = 350;
            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);

            document.getElementById('page-content').appendChild(renderer.domElement);


        },
        animate: function () {
            requestAnimationFrame(app.animate);

            plane.getRealObject().rotation.y += 0.005;

            renderer.render(scene, camera);
        }
    };

    return app;


});
