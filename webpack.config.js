var path = require("path");

module.exports = {
    entry: path.join(__dirname, "lib/index.js"),
    output: {
        filename: "index.js",
        path: path.join(__dirname, "/dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            }
        ]
    }

};