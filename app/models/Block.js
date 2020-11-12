export const Block = (data) => ({
    name: data.name,
    ...data
})

export const WordpressBlock = (data) => {
    return Block({
        name: data.acf_fc_layout,
        ...data
    });
}
