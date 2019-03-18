import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
const proxy = require('http-proxy-middleware');
import open from 'open';

/*eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

process.env.NODE_ENV = 'development'; 
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(proxy('/rest', { target: 'https://admin.vetti.co', secure: false,
  changeOrigin: true
}));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));  
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
