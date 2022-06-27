import {PipelineStage, createBuilder} from "vite-plugin-md";
import markdownItWikilink from "../markdown-it-wikilink";
export interface CodeOptions {
}

export const wikiLink = createBuilder('link', PipelineStage.parser)
  .options<Partial<CodeOptions>>()
  .initializer()
  .handler(async (payload, options) => {
    payload.parser.use(markdownItWikilink)
    return payload
  })
  .meta({
    description: 'you are NOT going to believe what you can with this builder!'
  })
