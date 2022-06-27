import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import { wikiEmbed } from './src/packages/embed'
import {wikiLink} from "./src/packages/link";

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown({ builders: [wikiLink(), wikiEmbed()]
    })
  ]
})
