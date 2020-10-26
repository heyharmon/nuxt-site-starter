<template lang="html">
    <div class="">
        <b-hero-1/>

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
    }
}
</script>

<style lang="css" scoped>
</style>
