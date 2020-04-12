let header = document.querySelector('header');


class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;

    }
    createDiv() {
        let div = document.createElement('DIV');
        div.innerHTML = 'd';
        div.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign}; `;
        document.body.appendChild(div);   
    }
}

let ndiv = new Options('100px', '100px', '#333', '14', 'center');
ndiv.createDiv();
