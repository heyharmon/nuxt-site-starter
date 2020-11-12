export const Post = (data) => ({
    slug:  data.slug,
    title: data.title,
    image: {
        url: data.image.url,
        alt: data.image.alt,
        caption: data.image.caption
    },
    excerpt: data.excerpt,
    body: data.body,
    link: {
        label: data.link.label,
        url: data.link.url
    }
})

export const WordpressPost = (data) => {
    return Post({
        slug:  data.slug,
        title: data.title.rendered,
        image: {
            url: data._embedded['wp:featuredmedia'][0].source_url,
            alt: data._embedded['wp:featuredmedia'][0].alt_text,
            caption: data._embedded['wp:featuredmedia'][0].caption.rendered,
        },
        excerpt: data.excerpt.rendered.replace(/(<([^>]+)>)/gi, "").substr(0, 120),
        body: data.content.rendered,
        link: {
            label: 'Read',
            url: '/blog/' + data.slug
        }
    })
}
