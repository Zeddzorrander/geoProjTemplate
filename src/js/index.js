//import './Geogebra/deployggb';
//require("imports-loader?GGBApplet=GGBapplet!./Geogebra/deployggb.js");
import functG from './functions/f.json';
import { GgbFunction } from './models/GgbModel';
import { parameters, views } from './configGeo';
import $ from 'jquery';

let g = new GgbFunction(functG);
g.applet = new GGBApplet(parameters, '5.0', views);

function draw() {
    g.draw();
    //console.log(g.points.length);
    document.getElementById('hidden').style.display = 'none';
}

function erase() {
   // console.log(g.name);
    g.erase();
}

window.onload = function() {
    console.log(g);
    g.applet.inject('ggbApplet', 'preferHTML5');
    document.getElementById('initGgb').addEventListener('click', draw);
    this.document.getElementById('erase').addEventListener('click', erase);
    //$('#initGgb').click(draw);
    //window.document.getElementById('initGgb').click();
};

g.applet.setPreviewImage('data:image/gif;base64,R0lGODlhAQABAAAAADs=','https://www.geogebra.org/images/GeoGebra_loading.png','https://www.geogebra.org/images/applet_play.png');