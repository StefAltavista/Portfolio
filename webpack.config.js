const path = require("path");
const HTMLwebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // entry: "./public/src/start.js",
    entry: [
        path.join(__dirname, "public", "css", "style.css"),
        path.join(__dirname, "public", "src", "start.js"),
    ],
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
    },
    plugins: [
        new HTMLwebpackPlugin({ template: "./public/src/index.html" }),
        new MiniCssExtractPlugin(),
    ],

    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                        },
                    },
                ],
            },
        ],
    },
};
