<template lang="html">
    <div v-html="content" class="text-component"></div>
</template>

<script>
export default {
    name: 'c-richtext-1',

    props: {
        content: String
    }
}
</script>

<style lang="css" scoped>
</style>
