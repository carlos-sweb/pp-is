const path = require('path');

module.exports = {
  mode: 'production',
  entry: [
    path.resolve(__dirname,'..','js','main.webpack.js')
  ],
  output: {
    //name: 'MyLibrary',
    //type: 'umd',
    //umdNamedDefine: true,
    path: path.resolve(__dirname, '..' ,'dist'),
    filename: 'pp-is.app.bundle.js',
  },
};

