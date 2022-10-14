var xoff1 = 600;
var yoff1 = 100;
var xoff2 = 90;
var inc = 0.0025;
var start = 0;

let h;
let w;

export default function WaveSimple(p5) {
    function size() {
        if (window.innerHeight) {
            h = window.innerHeight;
        } else if (document.documentElement.clientHeight) {
            h = document.documentElement.clientHeight;
        } else if (document.body.clientHeight) {
            h = document.document.body.clientHeight;
        }

        if (window.innerWidth) {
            w = window.innerWidth;
        } else if (document.documentElement.clientWidth) {
            w = document.documentElement.clientWidth;
        } else if (document.body.clientHeight) {
            w = document.document.body.clientWidth;
        }
        p5.resizeCanvas(w, h);
    }
    size();
    p5.setup = () => {
        p5.createCanvas(w, h);
        p5.pixelDensity(1);
        p5.frameRate(30);
    };

    window.onresize = () => {
        size();
    };
    p5.draw = () => {
        // p5.background(45, 193, 92); Green
        // p5.background(201, 131, 62); Orange
        p5.background(62, 92, 201);

        perlinScope(p5, w, h);
    };
}

function perlinScope(p5) {
    p5.beginShape();
    var xoff1 = start;
    for (var x = 0; x < w / 2; x++) {
        p5.stroke(0);
        p5.noFill();
        p5.vertex(x, p5.noise(xoff1) * h);
        xoff1 += inc;
    }

    p5.endShape();
    start += inc;
}
