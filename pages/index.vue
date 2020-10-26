<template lang="html">
    <div class="">
        <app-hero/>

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
import AppHero from '~/components/AppHero'

export default {
    components: {
        AppHero
    }
}
</script>

<style lang="css" scoped>
</style>
