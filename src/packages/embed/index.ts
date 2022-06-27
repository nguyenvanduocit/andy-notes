import {PipelineStage, createBuilder} from "vite-plugin-md";
import markdownItEmbed from "../markdown-it-embed";
export interface CodeOptions {
}

export const wikiEmbed = createBuilder('embed', PipelineStage.parser)
  .options<Partial<CodeOptions>>()
  .initializer()
  .handler(async (payload, options) => {
    payload.parser.use(markdownItEmbed)
    return payload
  })
  .meta({
    description: 'you are NOT going to believe what you can with this builder!'
  })
