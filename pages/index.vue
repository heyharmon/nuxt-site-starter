<template lang="html">
    <div class="">
        <b-hero-1 v-bind="hero"/>

        <b-grid-1 v-bind="grid"/>

    </div>
</template>

<script>
import BHero1 from '~/components/block/b-hero-1.vue'
import BGrid1 from '~/components/block/b-grid-1.vue'

export default {
    components: {
        BHero1,
        BGrid1
    },

    data() {
        return {
            hero: {
                image: {
                    url: "https://images.unsplash.com/photo-1554559380-823246762a89?auto=format&w=1400&q=80",
                    alt: "",
                    caption: ""
                },
                pre_title: "Pre-title",
                title: "Foo bar ipsum dolor sit amet consectetur adipisicing elit",
                sub_title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                link: {
                    label: "Visit Blog",
                    url: "/blog",
                    target: ""
                }
            },

            grid: {
                columns: [
                    {
                        width: "6",
                        components: [
                            {
                                name: 'c-richtext-1',
                                content: '<h2>Foo</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>'
                            }
                        ]
                    },
                    {
                        width: "3",
                        components: [
                            {
                                name: 'c-richtext-1',
                                content: '<h2>Foo</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>'
                            }
                        ]
                    }
                ]
            }
        }
    }
}
</script>

<style lang="css" scoped>
</style>
