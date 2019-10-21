const path = require("path");

module.exports = {
    mode: "production",
    context: path.resolve(__dirname, "src", "lib"),
    entry: "./index.js",
    output: {
        libraryTarget: "commonjs2"
    },
    externals: {
        react: "react"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, "src", "lib"),
                use: ["babel-loader"],
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, "src", "lib"),
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'file-loader'],
            }
        ]
    }
};
