import '../Geogebra/deployggb';

export class GgbFunction {
    constructor({name, formula, colorR, colorB, colorG, size, indVar = 'x', points = [], discontinuities = [], implicit = false, depVar}) {
        this.name = name;
        this.formula = formula;
        this.points = points;
        this.discontinuities = discontinuities;
        this.indVar = indVar;
        this.implicit = implicit;
        this.colorR = colorR;
        this.colorG = colorG;
        this.colorB = colorB;
        this.size = size;
        if (implicit) {
            this.depVar = depVar;
        } else this.depVar = this.name;
    }
    
    erase() {
        ggbApplet.deleteObject(this.name);
        if (this.points.length > 0) {
            this.points.forEach(el => ggbApplet.deleteObject(el.name));
        }
    }

    draw() {
        if (!this.implicit) {
            ggbApplet.evalCommand(`${this.name} = ${this.formula}`);
        } else ggbApplet.evalCommand(this.formula);
        ggbApplet.setColor(this.name, this.colorR, this.colorG ,this.colorB);
        ggbApplet.setLineThickness(this.name, this.size);
        ggbApplet.setCaption(this.name, `$${this.name}(x)$`);
        ggbApplet.setLabelStyle(this.name, 3);
        ggbApplet.setLabelVisible(this.name, true);
        ggbApplet.setAxisLabels(1, `$${this.indVar}$`, `${this.depVar}`);
        if (this.points.length > 0) {
            this.points.forEach(el => {
                ggbApplet.evalCommand(`${el.name} = (${el.x}, ${el.y})`);
                ggbApplet.setPointStyle(el.name, el.style);
                ggbApplet.setPointSize(el.name, el.size);
                ggbApplet.setColor(el.name, el.colorR, el.colorG, el.colorB);
            });
        }
    }
}

// GgbFunction.prototype.draw = function() {
//     ggbApplet.evalCommand(this.formula);
//     ggbApplet.setColor(this.name,0,0,0);
//     ggbApplet.setLineThickness(this.name,7);
//     ggbApplet.setCaption(this.name, `$${this.name}(x)$`);
//     ggbApplet.setLabelStyle(this.name, 3);
//     ggbApplet.setLabelVisible(this.name, true);
//     ggbApplet.setAxisLabels(1, `$${this.indVar}$`, `$${this.depVar}$`);
//     if (this.points.length > 0) {
//         this.points.forEach(el => {
//             ggbApplet.evalCommand(`${el.name} = (${el.x}, ${el.y})`);
//             ggbApplet.setPointStyle(el.name, el.style);
//             ggbApplet.setPointSize(el.name, el.size);
//             ggbApplet.setColor(el.name, el.colorR, el.colorG, el.colorB);
//         });
//     }
// }