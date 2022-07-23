var xoff1 = 0;
var xoff2 = 100;

export default function Glitches(p5) {
    let img;
    let img2;

    let w;
    let h;
    let c;

    p5.preload = () => {
        img2 = p5.loadImage("images/bebeWatch.jpg");
        img = p5.loadImage("images/face.png");
    };

    p5.setup = () => {
        img.resize(666, 0);
        img2.resize(666, img.height);
        w = 666;
        h = img.height;
        p5.createCanvas(w, h);
    };
    p5.draw = () => {
        // p5.background(0);
        // collateral(p5, img, w, h, c);

        perlinWorm(p5, img, w, h, c);

        // p5.noLoop();

        // async function file_canvas() {
        //     var canvas = document.querySelector("canvas");
        //     let file = null;
        //     canvas.toBlob(function (blob) {
        //         file = new File([blob], "test.png", {
        //             type: "image/png",
        //         });
        //         console.log("file", file);
        //         let formData = new FormData();
        //         formData.append("file", file);
        //         console.log("formData", formData);
        //         fetch("/saveimage", {
        //             method: "POST",
        //             body: formData,
        //         });
        //     }, "image/png");
        // }
        // file_canvas();
    };
}

////PERLIN NOISER DRAWERS
function perlinWorm(p5) {
    var x = p5.noise(xoff1) * 500;
    var y = p5.noise(xoff2) * 700;
    var z = p5.noise(y + x) * 500;
    xoff1 += 0.005;
    xoff2 += 0.005;
    p5.fill(y / 2, (x * z) / 500, x, z + 100);

    p5.stroke(p5.color(x, y, Math.random() * z, 0));

    p5.ellipse(x, y, x / (z / 20), y / (z / 20));
}
