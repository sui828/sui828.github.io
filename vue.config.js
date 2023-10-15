const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: config => {
    config.module.rules.delete('svg')

    config.module
      .rule('svg')
      .test(/\.(svg)(\?.*)?$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .options({
        svgo: false // これを追加してsvgoを無効化
      })
  },

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
