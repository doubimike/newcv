// webpack.config.js
module.exports = {
    entry: "./es6/app.js",
    output: {
        path: __dirname+'/es6/build',
        filename: "main.bundle.js"
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
      ]
    }
};