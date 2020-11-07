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

    asyncData({ params, $axios }) {
        if (params.slug === undefined) { params.slug = 'homepage' }

        return $axios.$get('http://localhost:4000/pages?slug=' + params.slug)
        .then(response => {
            return { page: response[0] }
        })
    }
}
</script>

<style lang="scss">
</style>
