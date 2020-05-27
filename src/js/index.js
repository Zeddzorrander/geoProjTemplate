//import './Geogebra/deployggb';
//require("imports-loader?GGBApplet=GGBapplet!./Geogebra/deployggb.js");
import functG from './functions/f.json';
import GgbFunction from './models/GgbModel';
import { parameters, views } from './configGeo';
import $ from 'jquery';

let g = new GgbFunction(functG);
g.applet = new GGBApplet(parameters, '5.0', views);

window.onload = function() {
    this.console.log(g);
    g.applet.inject('ggbApplet', 'preferHTML5');
    // $('#initGgb').click(function() {
    //     g.draw();
    // });
    // window.document.getElementById('initGgb').click();
};

g.applet.setPreviewImage('data:image/gif;base64,R0lGODlhAQABAAAAADs=','https://www.geogebra.org/images/GeoGebra_loading.png','https://www.geogebra.org/images/applet_play.png');