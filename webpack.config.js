const path = require('path')
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = {
    //This is a entry point from where the webpack will start finding the imports
    entry: './server.js',
    //This is a setup for the environment
    target: 'node',
    //This is a type of mode for which we are bundling
    mode: "development",
    //This object consist the configuration for the output of webpack
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    //This is a setup for the Nodemon
    plugins: [
        new NodemonPlugin()
    ]
}