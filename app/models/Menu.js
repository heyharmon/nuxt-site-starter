export const MenuItem = (data) => ({
    slug:  data.slug,
    title: data.title
})

export const WordpressMenuItem = (data) => {
    return MenuItem({
        slug:  data.slug,
        title: data.title
    })
}
