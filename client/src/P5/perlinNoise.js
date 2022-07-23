var xoff1 = 0;
var yoff1 = 0;
var xoff2 = 100;
var inc = 0.0001;
var start = 0;

export default function PerlinNoise(p5) {
    p5.setup = () => {
        p5.createCanvas(2000, 2000);
        p5.pixelDensity(1);
        // p5.background(0, 0, 0);
    };

    p5.draw = () => {
        // p5.mousePressed = () => {
        //     p5.noLoop();
        // };

        // for (let i = 0; i < 3000; i++) {
        //     perlinWorm(p5);
        // }

        perlinWorm(p5);
        // p5.noLoop();
        //perlinScope(p5);

        // p5.loadPixels();
        // for (var x = 0; x < 500; x++) {
        //     xoff1 = 0;
        //     for (var y = 0; y < 500; y++) {
        //         //find the pixel ?
        //         var idx = (x + y * 500) * 4;
        //         p5.noiseDetail(8, 0, 9);
        //         var r = p5.noise(xoff1, yoff1) * 255;
        //         p5.pixels[idx + 0] = r;
        //         p5.pixels[idx + 1] = r;
        //         p5.pixels[idx + 2] = r;
        //         p5.pixels[idx + 3] = 255;
        //         xoff1 += inc;
        //     }
        //     yoff1 += inc;
        // }
        // p5.updatePixels();
        //p5.noLoop();
    };
}

function perlinWorm(p5) {
    var x = p5.noise(xoff1, xoff1) * 1000;
    var y = p5.noise(xoff2, xoff2) * 1000;
    var z = p5.noise(y) * 50;
    xoff1 += 0.005;
    xoff2 += 0.005;
    p5.fill(y / 4, x / 4, x - y / 4, z + 100);

    p5.stroke(p5.color(x / 4, y / 4, z * 5));

    p5.ellipse(x + x, y, x / 7, y / 7);
}

function perlinScope(p5) {
    p5.stroke(255);
    p5.noFill();
    p5.beginShape();
    var xoff1 = start;
    for (var x = 0; x < 500; x++) {
        p5.background(
            p5.noise(xoff1) * 250,
            p5.noise(xoff1 + 100) * 250,
            p5.noise(xoff1 + 150) * 250
        );
        p5.stroke(255);
        p5.vertex(x, p5.noise(xoff1) * 500);
        xoff1 += inc;
    }

    p5.endShape();
    start += inc;
}
