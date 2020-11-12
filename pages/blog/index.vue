<template lang="html">
    <div class="container margin-top-lg max-width-lg">
        <div class="grid gap-md">
            <c-card-1
                class="col-4@lg"
                v-for="(post, index) in posts"
                :key="index"
                v-bind="post"/>

        </div>
    </div>
</template>

<script>
import CCard1 from '~/components/component/c-card-1.vue'

export default {
    components: {
        CCard1
    },

    asyncData({ $repository }) {
        return $repository.posts.index()
        .then(response => {
            return { posts: response }
        })
    }
}
</script>

<style lang="scss">
</style>
