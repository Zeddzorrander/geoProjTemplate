// import any functions from their j.son files and any other modules needed
import functF from './functions/f.json'
import functG from './functions/g.json';
import imp from './functions/implicit.json';
import { GgbFunction } from './models/GgbModel';
import { parameters, views } from './configGeo';
import '../styles.css';




// create ggb functions for each json file -- need to each applet as a GgbFunction
let f = new GgbFunction(functF);
let g = new GgbFunction(functG);
let implicit = new GgbFunction(imp);
f.applet = new GGBApplet(parameters, '5.0', views);
g.applet = new GGBApplet(parameters, '5.0', views);
implicit.applet = new GGBApplet(parameters, '5.0', views);

function draw() {
    f.draw();
    g.draw();
    implicit.draw();
}

function test() {
    console.log(g.relMin(0, 2));
}

function erase() {
    g.erase();
    implicit.erase();
    f.erase();
}

function initializeGGB() {
    document.getElementById('initGgb').click();
}

window.onload = function() {
    f.applet.inject('ggbApplet', 'preferHTML5');
    g.applet.inject('ggbApplet', 'preferHTML5');
    implicit.applet.inject('ggbApplet', 'preferHTML5');
    document.getElementById('initGgb').addEventListener('click', draw);
    document.getElementById('erase').addEventListener('click', erase);
    document.getElementById('test').addEventListener('click', test);
    initializeGGB();
    
};

g.applet.setPreviewImage('data:image/gif;base64,R0lGODlhAQABAAAAADs=','https://www.geogebra.org/images/GeoGebra_loading.png','https://www.geogebra.org/images/applet_play.png');