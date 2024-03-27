//import
// path: NodeJS에서 파일 및 디렉토리 경로 작업을 위한 전역 모듈
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

//node.js 환경에서 동작을 하는 js
//export
module.exports = {
  resolve: {
    // 경로에서 확장자 생략 설정
    extensions: ['.js', '.vue'],
    // 경로 별칭 설정
    alias: {
      '~': path.resolve(__dirname, 'src'),
      'assets': path.resolve(__dirname, './src/assets')
    }
  },
  // parcel main.js
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './src/main.js',
  
  // 결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.s?css$/, // 정규표현식
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: '@import "~/scss/main";'
            }
          }
          // 'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 제외할 경로
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash:8].[ext]',
              esModule: false
            }
          }
          // {
          //   loader: 'url-loader',
          //   options: {
          //     limit: 10240,
          //     fallback: {
          //       loader: 'file-loader',
          //       options: {
          //         name: '[name].[contenthash:8].[ext]',
          //         esModule: false
          //       }
          //     },
          //     esModule: false
          //   }
          // }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          // 'babel-loader',
          'vue-svg-loader',
        ]
      },
    ]
  },

  // 번들러 후 결과문의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template:'./index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static'}
      ]
    }),
    new VueLoaderPlugin
  ],
  
  // 개발 서버 옵션
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true
  }
}