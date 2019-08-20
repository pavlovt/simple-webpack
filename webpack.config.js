// webpack.config.js
const path = require("path");
// const CleanWebpackPlugin = require("clean-webpack-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  entry: {
    app: path.resolve(__dirname, "./src/index.js")
  },
  // output: {
  //   path: path.join(__dirname, "./build"),
  //   filename: "js/[name].js"
  // },
  plugins: [
    // new CleanWebpackPlugin(),
    // new CopyWebpackPlugin([
    //   { from: path.resolve(__dirname, './public'), to: 'public' }
    // ]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html")
    })
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src")
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(html)$/,
        use: { loader: "html-loader" }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [resolve("src"), resolve("test")]
      }
    ]
  }
};
