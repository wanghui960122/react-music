const path = require('path')
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  // devServer:{
  //   proxy: {
  //       "/api": {
  //           target: 'http://123.207.32.32:9001',
  //           // target: 'http://127.0.0.1:8888',
  //           changeOrigin: true,
  //           pathRewrite: {
  //               "^/api": ""
  //           }
  //       },
  //   } 
  // }
}