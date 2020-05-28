//import './Geogebra/deployggb';
//require("imports-loader?GGBApplet=GGBapplet!./Geogebra/deployggb.js");
import functF from './functions/f.json'
import functG from './functions/g.json';
import imp from './functions/implicit.json';
import { GgbFunction } from './models/GgbModel';
import { parameters, views } from './configGeo';

import $ from 'jquery';




let f = new GgbFunction(functF);
let g = new GgbFunction(functG);
let implicit = new GgbFunction(imp);
f.applet = new GGBApplet(parameters, '5.0', views);
g.applet = new GGBApplet(parameters, '5.0', views);
implicit.applet = new GGBApplet(parameters, '5.0', views);

function draw() {
    f.draw();
    console.log(f.relMax(-3, -1));
    // implicit.draw();
    //console.log(g.points.length);
    //document.getElementById('hidden').style.display = 'none';
}

function erase() {
   // console.log(g.name);
    g.erase();
    implicit.erase();
}

window.onload = function() {
    console.log(g);
    f.applet.inject('ggbApplet', 'preferHTML5');
    g.applet.inject('ggbApplet', 'preferHTML5');
    implicit.applet.inject('ggbApplet', 'preferHTML5');
    document.getElementById('initGgb').addEventListener('click', draw);
    document.getElementById('erase').addEventListener('click', erase);
   
};

g.applet.setPreviewImage('data:image/gif;base64,R0lGODlhAQABAAAAADs=','https://www.geogebra.org/images/GeoGebra_loading.png','https://www.geogebra.org/images/applet_play.png');