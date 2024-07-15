// module.exports = {
//   "output": {
//     "filename": "[name].pack.js"
//   },
//   "resolve": {
//     "extensions": [
//       ".js",
//       ".json"
//     ],
//     "alias": {}
//   },
//   "module": {
//     "rules": [
//       {
//         "use": {
//           "loader": "babel-loader",
//           "options": {
//             "presets": [
//               "babel-preset-env",
//               "babel-preset-react"
//             ]
//           }
//         },
//         "exclude": /node_modules/,
//         "test": /\.js$/
//       }
//     ]
//   },
//   "entry": {
//     "index": "./index"
//   }
// }





// const path = require('path');

// module.exports = {
//   mode: 'development', 
//   entry: './index.js',
//   output: {
//     filename: '[name].pack.js',
//     path: path.resolve(__dirname, 'dist')
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: [
//               '@babel/preset-env',
//               '@babel/preset-react'
//             ],
//             plugins: [
//               '@babel/plugin-proposal-object-rest-spread'
//             ]
//           }
//         }
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['.js', '.json'],
//     alias: {}
//   }
// };

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: '[name].pack.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.json']
  }
};