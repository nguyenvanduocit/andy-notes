import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import { wikiEmbed } from './src/builder/wikiEmbed'
import { wikiLink } from './src/builder/wikiLink'

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown({
      builders: [wikiLink(), wikiEmbed()],
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      markdownItSetup(md) {
        md.use(require('markdown-it-prism'))
      }
    })
  ]
})
