import '../Geogebra/deployggb';

export default class GgbFunction {
    constructor({name, formula, indVar = 'x', points = [], discontinuities = [], implicit = false, depVar}) {
        this.name = name;
        this.formula = formula;
        this.points = points;
        this.discontinuities = discontinuities;
        this.indVar = indVar;
        this.implicit = implicit;
        if (implicit) {
            this.depVar = depVar;
        } else this.depVar = this.name;
    }
    draw() {
        ggbApplet.evalCommand(this.formula);
        ggbApplet.setColor(this.name,0,0,0);
        ggbApplet.setLineThickness(this.name,7);
        ggbApplet.setCaption(this.name, `$${this.name}(x)$`);
        ggbApplet.setLabelStyle(this.name, 3);
        ggbApplet.setLabelVisible(this.name, true);
        ggbApplet.setAxisLabels(1, `$${this.indVar}$`, `$${this.depVar}$`);
        if (this.points.length > 0) {
            this.points.forEach(el => {
                ggbApplet.evalCommand(`${el.name} = (${el.x}, ${el.y})`);
                ggbApplet.setPointStyle(el.name, el.style);
                ggbApplet.setPointSize(el.name, el.size);
                ggbApplet.setColor(el.name, el.colorR, el.colorG, el.colorB);
            });
        }
    }
    erase() {
        ggbApplet.deleteObject(this.name);
        if (this.points.length > 0) {
            this.points.forEach(el => ggbApplet.deleteObject(el.name));
        }
    }
}