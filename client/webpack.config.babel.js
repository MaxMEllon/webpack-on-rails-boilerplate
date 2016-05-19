import webpack from 'webpack';
import { name } from './package.json';
import pascalCase from 'pascal-case';

const config = {
  entry: './src',
  output: {
    path: `${__dirname}/bundle/`,
    filename: `${name}.js`,
    library: pascalCase(name),
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.json'],
  },
  devServer: {
    contentBase: 'release',
    noInfo: true,
    quiet: true,
  },
};

switch (process.env.NODE_ENV) {
  case 'production':
    // config.plugins = [
    //   new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    // ];

    config.devtool = 'eval';
    break;

  default:
    config.devtool = 'eval';
}

export default config;
