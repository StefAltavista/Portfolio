var xoff1 = 600;
var yoff1 = 100;
var xoff2 = 90;
var inc = 0.0025;
var start = 0;

let h;
let w;

export default function WaveComplex(p5) {
    size(p5);
    p5.setup = () => {
        p5.createCanvas(w, h);
        p5.pixelDensity(1);
        p5.frameRate(22);
    };
    // ON WINDOW RESIZE : RESIZE CANVAS
    window.onresize = () => {
        size(p5);
    };
    p5.draw = () => {
        // GET SNAPSHOT?
        // p5.mousePressed = () => {
        //     p5.noLoop();
        // };
        perlinScope(p5, w, h);
    };
}

//Other Graphic
function perlinWorm(p5, w, h) {
    var x = p5.noise(xoff1, xoff1) * w;
    var y = p5.noise(xoff2, xoff2) * h;
    var z = p5.noise(y) * 50;
    xoff1 += 0.005;
    xoff2 += 0.005;

    start++;
    p5.stroke(p5.color(x / (Math.random() * x), y / 8, z * 5));

    p5.noFill();
    p5.rect(x, y, x / 7, y / 7);
}

// Black Wave (Applied Graph)
function perlinScope(p5) {
    p5.beginShape();
    var xoff1 = start;
    for (var x = 0; x < w; x++) {
        p5.background(
            p5.noise(xoff1) * 250,
            p5.noise(xoff1 + 1000) * 250,
            p5.noise(xoff1 + 150) * 250
        );
        p5.stroke(0);

        p5.noFill();
        p5.vertex(x, p5.noise(xoff1) * h);
        p5.vertex(x / 2, p5.noise(xoff1) * h);
        xoff1 += inc;
    }

    p5.endShape();

    start += inc;
}

//Resize Function
function size(p5) {
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
