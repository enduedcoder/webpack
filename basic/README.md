# webpack basic

1. import and export our own js modules
2. we can install any npm module and use
3. `loaders` can load images into your javascript, it can load css, scss etc. So here we can use loaders like style-loader, css-loader,sass-loader
   Loaders are configured in module object of webpack.config.js otherwise we get below error:
   You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file

   Loaders are applied using `module` object in webpack.config.js
   `module`: {
   rules: [
   {
   test: /\.scss$/,
   use: ['style-loader', 'css-loader', 'sass-loader'],
   },
   ],
   },

4. `Plugins`: are more powerful than loaders
   import plugin like:
   const htmlWebpackPlugin = require('html-webpack-plugin');
   configuratiion:
   plugins: [
   new htmlWebpackPlugin({
   title: 'Webpack plugin',
   filename: 'index.html', //generates this index.html under dist
   template: 'src/template.html', // picks up the template from here
   }),
   ],

5. `caching`: for every changes in the content of the file, this contenthash number will changes which makes caching easier
   output: {
   path: path.resolve(\_\_dirname, 'dist'),
   filename: '[name][contenthash].js',
   },

6. `Server` : we can setup webpack dev server and make it auto-reload
   npm install -D webpack-dev-server

   devServer: {
   static: {
   directory: path.resolve(\_\_dirname, 'dist'),
   },
   port: 3000,
   open: true,
   hot: true,
   compress: true,
   historyApiFallback: true,
   },

7. Avoid duplication of bundle files on every code addition in the server file i.e., index.js
   use `clean:true` in `output` object

   output: {
   path: path.resolve(\_\_dirname, 'dist'),
   filename: '[name][contenthash].js',
   clean: true,
   },

8. when we run server, its not running from the files that are in dist folder but its running from the files that rae in memeory. you can test it by deleting `dist` folder and run `npm run dev`, it still shows output even whjen dist is not present

9. Add `sourcemap`: they are good for debuggin . sometime we get error with some line-number but that doesnt actually sjow where the issued is. so sourcemap provides that mapping between the dist f(production code) and the actual source code

10. `Babel `: loader that makes your code backward compatible with older browser

module: {
rules: [
...
{
test: /\.js$/,
exclude: /node_modules/,
use: {
loader: 'babel-loader',
options: {
presets: ['@babel/preset-env'],
},
},
},
],
},

11. Load `images`: mention asset/resource type loader
    output: {
    ...
    assetModuleFilename: '[name][ext]',
    },

    module: {
    rules: [
    ...
    {
    test: /\.(png|jpg|jpeg|svg|gif)$/i,
    type: 'asset/resource',
    },
    ],
    },

12. Webpack bundle anlayzer: import as

const BundleAnalyzerPlugin =
require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

plugins: [
...
new BundleAnalyzerPlugin(),
],

Then run `npm run build`

# commands

npm init -y
npm i -D webpack webpack-cli
npm i -D sass style-loader css-loader sass-loader
npm i -D html-webpack-plugin
npm install -D webpack-dev-server
npm i -D babel-loader @babel/core @babel/preset-env

npm i -D webpack-bundle-analyzer
