// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2023 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Block } from "verstak"
import * as markdown from "markdown-it"
import * as prism from "prismjs"

const md = new markdown.default({
  html: true,
  highlight: (str: string, lang: string, attrs: string) => {
    const highlighted = prism.highlight(str, prism.languages[lang], lang)
    return `<pre class="language-${lang}"><code>${highlighted}</code></pre>`
  },
})

export function Markdown(name: string, content: string) {
  return Block(name, {
    render(e) {
      e.innerHTML = md.render(content)
    },
  })
}
