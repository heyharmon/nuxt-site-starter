<template lang="html">
    <section class="padding-y-xl">
        <div class="container max-width-adaptive-lg">
            <div class="grid gap-xl">

                <div v-for="column in columns" :class="'col-' + column.width + '@md text-component'">
                    <component
                        v-for="(component, index) in column.components"
                        :key="index"
                        :is="component.name"
                        v-bind="component"/>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
import CRichtext1 from '~/components/component/c-richtext-1.vue'

export default {
    name: 'b-grid-1',

    components: {
        CRichtext1
    },

    props: {
        columns: Array
    }
}
</script>

<style lang="css" scoped>

</style>
