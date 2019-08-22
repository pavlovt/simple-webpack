// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html")
    }),
    new MiniCssExtractPlugin({
      filename: `styles/[name].css`
    })
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src")
    }
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"]
      // },
      {
        test: /\.(scss|css)$/,
        resolve: { extensions: [".scss", ".css"] },
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader?sourceMap",
          "resolve-url-loader?sourceMap",
          "sass-loader?sourceMap"
        ]
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
