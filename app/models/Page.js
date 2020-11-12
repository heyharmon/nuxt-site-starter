import { Block } from '~/app/models/Block'
import { WordpressBlock } from '~/app/models/Block'

export const Page = (data) => ({
    slug:   data.slug,
    title:  data.title,
    blocks: data.blocks.map(block => {
      return Block(block)
    })
})

export const WordpressPage = (data) => {
    return Page({
        slug:   data.slug,
        title:  data.title.rendered,
        blocks: data.acf.blocks.map(block => {
          return WordpressBlock(block)
        })
    })
}
