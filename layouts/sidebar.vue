<template>
  <div>
    <navigation/>
    <hr>
    Sidebar
    <nuxt/>
  </div>
</template>

<script type="text/javascript">
import navigation from '~/components/navigation.vue'

export default {
    components: {
        navigation
    }
}
</script>

<style>
html {
  font-family: "Helvetica Neue", Arial, sans-serif;
  padding: 20px;
}
</style>
