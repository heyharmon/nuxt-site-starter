<template lang="html">
    <div class="">
        <b-hero-1 v-bind="hero"/>

        <section class="padding-y-xl">
            <div class="container max-width-adaptive-lg">
                <div class="grid gap-xl">
                    <div class="col-4@md text-component">
                        <h2>Foo</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>

                    <div class="col-4@md text-component">
                        <h2>Foo</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>

                    <div class="col-4@md text-component">
                        <h2>Foo</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
import BHero1 from '~/components/block/b-hero-1.vue'

export default {
    components: {
        BHero1
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
            }
        }
    }
}
</script>

<style lang="css" scoped>
</style>
