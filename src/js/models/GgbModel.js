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
        ggbApplet.setAxisLabels(1, ``, ``);
        if (this.points.length > 0) {
            this.points.forEach(el => ggbApplet.deleteObject(el.name));
        }
    }

    draw() {
        if (!this.implicit) {
            ggbApplet.evalCommand(`${this.name} = ${this.formula}`);
            ggbApplet.setColor(this.name, this.colorR, this.colorG ,this.colorB);
            ggbApplet.setLineThickness(this.name, this.size);
            ggbApplet.setCaption(this.name, `$${this.name}(x)$`);
            ggbApplet.setLabelStyle(this.name, 3);
            ggbApplet.setLabelVisible(this.name, true);
            ggbApplet.setAxisLabels(1, `$${this.indVar}$`, `${this.depVar}`);
        } else {
            ggbApplet.evalCommand(`${this.name}: ${this.formula}`);
            ggbApplet.setColor(this.name, this.colorR, this.colorG ,this.colorB);
            ggbApplet.setLineThickness(this.name, this.size);
            ggbApplet.setLabelVisible(this.name, false);
            ggbApplet.setAxisLabels(1, `$${this.indVar}$`, `${this.depVar}`);
        }
        if (this.points.length > 0) {
            this.points.forEach(el => {
                ggbApplet.evalCommand(`${el.name} = (${el.x}, ${el.y})`);
                ggbApplet.setPointStyle(el.name, el.style);
                ggbApplet.setPointSize(el.name, el.size);
                ggbApplet.setColor(el.name, el.colorR, el.colorG, el.colorB);
            });
        }
    }

    evaluate(x) {
        if (this.discontinuities.length > 0) {
            this.discontinuities.forEach(el => {
                if (el.x == x) return el.value;
            });
        } else {
            return ggbApplet.getValue(`${this.name}(${x})`);
        }
    }

    // if function is monotonic on (leftEndpt, rightEndPt), this will return an endpoint.  Otherwise, it returns the relMax
    relMax(leftEndpt, rightEndpt) {
        const relMaxPt = this.getRelExtreme(leftEndpt, rightEndpt, 'Max');
        if (this.discontinuities.length > 0) {
            this.discontinuities.forEach(el => {
                if (el.x == relMaxPt.relMaxLoc) {
                   alert('There is a discontinuity!  Please try a different interval');
                }
            });
        } else return relMaxPt.relMax;
    }

    // if function is monotonic on (leftEndPt, rightEndPt), this will return an endpoint.  Otherwise returns the relMin
    relMin(leftEndPt, rightEndPt) {
        const relMinPt = this.getRelExtreme(leftEndPt, rightEndPt, 'Min');
        if (this.discontinuities.length > 0) {
            this.discontinuities.forEach(el => {
                if (el.x == relMinPt.relMinLoc) {
                   alert('There is a discontinuity!  Please try a different interval');
                }
            });
        } else return relMinPt.relMin;
    }
    
    // type is 'Max' or 'Min'.  This is an internal helper function
    getRelExtreme(leftEndpt, rightEndpt, type) {
        ggbApplet.evalCommand(`rel${type} = ${type}(${this.name},${leftEndpt},${rightEndpt})`);
        ggbApplet.setVisible(`rel${type}`, false);
        if (type === 'Max') {
            const relMax = Math.round(100000 * parseFloat(ggbApplet.getYcoord('relMax'))) / 100000;
            const relMaxLoc = Math.round(100000 * parseFloat(ggbApplet.getXcoord('relMax'))) / 100000;
            return { relMaxLoc, relMax };
        } else {
            const relMin = Math.round(100000 * parseFloat(ggbApplet.getYcoord('relMax'))) / 100000;
            const relMinLoc = Math.round(100000 * parseFloat(ggbApplet.getXcoord('relMax'))) / 100000;
            return { relMinLoc, relMin };
            
        }
    }
}