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

    asyncData({ params, $repository }) {
        return $repository.pages.show(params.slug)
        .then(response => {
            return { page: response }
        })
    }
}
</script>

<style lang="scss">
</style>
