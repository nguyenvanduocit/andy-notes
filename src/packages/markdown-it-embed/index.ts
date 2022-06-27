import Token from "markdown-it/lib/token";
import MarkdownIt from "markdown-it";

const embedRE = /!\[\[([^\]]+)]]/s

export default (md: MarkdownIt, options: any) => {
  md.renderer.rules.wiki_embed = function tokenizeBlock(tokens: Token[], idx: number) {
    if (!tokens[idx].info) return ''
    console.log(tokens[idx])
    return "<" + tokens[idx].tag + " page-id='" + tokens[idx].info + "'/>"
  }

  md.block.ruler.before(
    'wiki_link',
    'wiki_embed',
    function customEmbed(state, startLine, endLine, silent) {
      let startPos = state.bMarks[startLine] + state.tShift[startLine]
      let maxPos = state.eMarks[startLine]
      let pointer = {line: startLine, pos: startPos}

      if (state.src.charCodeAt(pointer.pos) !== 33/* ! */ ||
        state.src.charCodeAt(pointer.pos + 1) !== 91/* [ */) {
        return false
      }

      const block = state.src.slice(startPos, maxPos)
      const match = embedRE.exec(block)
      if (!match || match.length < 2) {
        return false
      }

      const [all, pagePath] = match

      pointer.pos += all.length

      if (!silent) {
        let token = state.push('wiki_embed', 'PageStackContent', 0)
        token.markup = state.src.slice(startPos, pointer.pos)
        token.content = pagePath.split('/').pop() || pagePath
        token.block = true
        token.map = [startLine, pointer.line + 1]
        state.line = pointer.line + 1
        token.info = pagePath

        if (!token.info.startsWith('/')) {
          token.info = '/' + token.info
        }

        if (!token.info.endsWith('.md')) {
          token.info += '.md'
        }
      }

      return true
    }
  )
}
