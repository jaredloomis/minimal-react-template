const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    app: path.join(__dirname, "src", "index.js")
  },
  output: {
    filename:   "[name].bundle.js",
    path:       path.join(__dirname, "dist", "js"),
    publicPath: "/js/",
    pathinfo:   true
  },

  module: {
    rules: [
      // ESLint for all .js files
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        use: "eslint-loader"
      },
      // Babel for .js and .jsx
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      // CSS Modules
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {loader: "css-loader", options: {
            modules: true,
            localIdentName: "[name]_[local]_[hash:base64:5]"
          }}
        ],
      }
    ]
  }
};
