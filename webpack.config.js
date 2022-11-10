//path モジュールの読み込み
const path = require('path');
//MiniCssExtractPlugin の読み込み
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//変数 devMode は production モードの場合は false でその他の場合は true
const devMode = process.env.NODE_ENV !== 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 
  //エントリポイント（デフォルトと同じなので省略可）
  entry: './src/index.js',  
  //出力先（デフォルトと同じなので省略可）
  output: { 
        filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    //ファイルを出力する前にディレクトリをクリーンアップ
    clean: true, 
    //Asset Modules の出力先の指定
    assetModuleFilename: 'images/[name][ext][query]'

  },
  //webpack-dev-server の設定
  devServer: {  
    //表示する静的ファイルのディレクトリを指定
    static: './',
    // または static: path.join(__dirname, ''),
    //サーバー起動時にブラウザを自動的に起動
    open: true,
    //webpack-dev-middleware 関連の設定
    devMiddleware: {
      writeToDisk: true, //バンドルされたファイルを出力する（実際に書き出す）
    },
  },
  module: {
    rules: [
      //SASS 及び CSS 用のローダー
      {
        //拡張子 .scss、.sass、css を対象
        test: /\.(scss|sass|css)$/i, 
        // 使用するローダーの指定
        use: [ 
          //CSS を別ファイルとして出力するプラグインのローダー
          MiniCssExtractPlugin.loader, 
          {
            loader: "css-loader",
            options: {
              // postcss-loader と sass-loader の場合は2を指定
              importLoaders: 2, 
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
            },
          },
          // PostCSS の設定
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      /* オプション */
                      browsers: "last 2 versions",
                      stage: 3,
                      features: {
                        "nesting-rules": true
                      },
                      autoprefixer: { grid: true },
                    },
                  ],
                  [ 'css-declaration-sorter', { order: 'alphabetical' } ],
                  [ 'postcss-sort-media-queries'],
                ],
              },
            },
          },
          //Sass ローダー
          'sass-loader',
        ], 
      },
      //Asset Modules の設定
      {
        //対象とするアセットファイルの拡張子を正規表現で指定
        test: /\.(png|svg|jpe?g|gif)$/i,
        //画像をコピーして出力
        type: 'asset/resource'  
      },
    ],
  },
  //プラグインの設定
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['index'],
      //出力先を output で指定した dist/js から dist/html に変更及びファイル名を指定
      filename: path.resolve(__dirname, 'dist/html/index.html'),
    }),
    new MiniCssExtractPlugin({
      // 抽出する CSS のファイル名
      filename: 'style.css',
    }),
  ],
  //production モード以外の場合は source-map タイプのソースマップを出力
  devtool: devMode ? 'source-map' : 'eval',
  // node_modules を監視（watch）対象から除外
  watchOptions: {
    ignored: /node_modules/  //正規表現で指定
  },
};
