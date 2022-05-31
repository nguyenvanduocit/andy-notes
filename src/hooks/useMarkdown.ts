import MarkdownIt from 'markdown-it'
import wikilinks from 'markdown-it-wikilinks'
const md = new MarkdownIt()
md.use(wikilinks())
export const useMarkdown = (content: string) => {
  return md.render(content)
}
