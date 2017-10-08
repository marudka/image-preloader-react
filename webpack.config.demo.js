var path = require("path");

module.exports = {
    entry: path.join(__dirname, "demo/index.js"),
    output: {
        filename: "index.js",
        path: path.join(__dirname, "/demo/dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                loaders: "style-loader!css-loader"
            }
        ]
    }

};