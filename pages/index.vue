<template lang="html">
    <div class="">
        <component
            v-for="(block, index) in page.blocks"
            :key="index"
            :is="block.name"
            v-bind="block"/>
    </div>
</template>

<script>
import BHero1 from '~/components/block/b-hero-1.vue'
import BGrid1 from '~/components/block/b-grid-1.vue'
import BFeature1 from '~/components/block/b-feature-1.vue'

export default {
    components: {
        BHero1,
        BGrid1,
        BFeature1
    },

    data() {
        return {
            page: {
                blocks: [
                    {
                        name: "b-hero-1",
                        image: {
                            url: "https://images.unsplash.com/photo-1554559380-823246762a89?auto=format&w=1400&q=80",
                            alt: "",
                            caption: ""
                        },
                        pre_title: "Pre-title",
                        title: "I am dynamic sit amet consectetur adipisicing elit",
                        sub_title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                        link: {
                            label: "Visit Blog",
                            url: "/blog",
                            target: ""
                        }
                    },
                    {
                        name: "b-grid-1",
                        columns: [
                            {
                                width: "3",
                                alignment: "left",
                                components: [
                                    {
                                        name: "c-richtext-1",
                                        content: "<h2>Foo</h2>\n<p>Quia et suscipit suscipit recusandae consequuntur expedita autem.</p>\n"
                                    }
                                ]
                            },
                            {
                                width: "6",
                                alignment: "left",
                                components: [
                                    {
                                        "name": "c-richtext-1",
                                        "content": "<h2>Bar</h2>\n<p>Quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto.</p>\n"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "b-feature-1",
                        image: {
                            url: "https://images.unsplash.com/photo-1554559380-823246762a89?auto=format&w=800&q=80",
                            alt: "",
                            caption: ""
                        },
                        flip_horizontal: false,
                        pre_title: "Pre-title",
                        title: "Lorem ipsum dolor sit.",
                        sub_title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, rem neque doloribus impedit explicabo minus laborum.",
                        link: {
                            label: "View Products",
                            url: "/products",
                            target: ""
                        }
                    },
                    {
                        name: "b-feature-1",
                        image: {
                            url: "https://images.unsplash.com/photo-1554559380-823246762a89?auto=format&w=800&q=80",
                            alt: "",
                            caption: ""
                        },
                        flip_horizontal: true,
                        pre_title: "Pre-title",
                        title: "Lorem ipsum dolor sit.",
                        sub_title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, rem neque doloribus impedit explicabo minus laborum.",
                        link: {
                            label: "View Services",
                            url: "/services",
                            target: ""
                        }
                    }
                ]
            }
        }
    }
}
</script>

<style lang="css" scoped>
</style>
