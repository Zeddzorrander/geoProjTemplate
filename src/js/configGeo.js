export const parameters = {
    "id": "ggbApplet",
    "width":800,
    "height":600,
    "showMenuBar":false,
    "showAlgebraInput":false,
    "showToolBar":false,
    "customToolBar":"0 73 62 | 1 501 67 , 5 19 , 72 75 76 | 2 15 45 , 18 65 , 7 37 | 4 3 8 9 , 13 44 , 58 , 47 | 16 51 64 , 70 | 10 34 53 11 , 24  20 22 , 21 23 | 55 56 57 , 12 | 36 46 , 38 49  50 , 71  14  68 | 30 29 54 32 31 33 | 25 17 26 60 52 61 | 40 41 42 , 27 28 35 , 6",
    "showToolBarHelp":false,
    "showResetIcon":false,
    "enableLabelDrags":false,
    "enableShiftDragZoom":true,
    "enableRightClick":false,
    "errorDialogsActive":false,
    "useBrowserForJS":false,
    "allowStyleBar":false,
    "preventFocus":false,
    "showZoomButtons":false,
    "capturingThreshold":3,
    // add code here to run when the applet starts
    "appletOnLoad":function(api){ //api.evalCommand('f(x)=0.05(x+4)(x-1)(x-5)');
                                //   api.setColor('f',0,0,0);
                                //   api.setLineThickness('f',7);
                                //   api.setCaption('f', '$f(x)$');
                                //   api.setLabelStyle('f', 3);
                                //   api.setLabelVisible('f', true);
                                //   api.setAxisLabels(1, '$x$', '$f$');
                                //   api.evalCommand('g(x) = If(x < 2, -(x - 2)² + 4, x > 2, -(x - 2)² + 4)');
                                //   api.setColor('g',0,0,0);
                                //   api.setLineThickness('g',7);
                                //   api.setCaption('g', '$g(x)$');
                                //   api.setLabelStyle('g', 3);
                                //   api.setLabelVisible('g', true);
                                //   api.setVisible('g', false);
                                //   api.evalCommand('A = (2, 4)');
                                //   api.setPointStyle('A', 2);
                                //   api.setPointSize('A', 5);
                                //   api.setColor('A',0,0,0);
                                //   api.setVisible('A', false);
                                //   api.evalCommand('B = (2, 4)');
                                //   api.setPointStyle('B', 0);
                                //   api.setPointSize('B', 4);
                                //   api.setColor('B',255,255,255);
                                //   api.setVisible('B', false);

                                  //api.setCoordSystem(-10, 10, -10, 10);
                                },
    "showFullscreenButton":false,
    "scale":1,
    "disableAutoScale":false,
    "allowUpscale":false,
    "clickToLoad":false,
    "appName":"classic",
    "showSuggestionButtons":true,
    "buttonRounding":0.7,
    "buttonShadows":false,
    "language":"en",
    // use this instead of ggbBase64 to load a material from geogebra.org
    //"material_id":"kNsYvNTd",
    // use this instead of ggbBase64 to load a .ggb file
    //"filename":"http://Users/Zeddzorrander/Documents/Sabbatical2020/functionImages1/GeoGebra/FunctionImages.ggb"
    "ggbBase64":"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",
    
};
    // is3D=is 3D applet using 3D view, AV=Algebra View, SV=Spreadsheet View, CV=CAS View, EV2=Graphics View 2, CP=Construction Protocol, PC=Probability Calculator DA=Data Analysis, FI=Function Inspector, macro=Macros
export const views = {'is3D': 0,'AV': 0,'SV': 0,'CV': 0,'EV2': 0,'CP': 0,'PC': 0,'DA': 0,'FI': 0,'macro': 0};

export function ggbFunctionf(x) {
    return 0.05 * (x + 4) * (x - 1) * (x - 5);
};
