<template>
  <div>
    <app-navigation/>
    <nuxt/>
  </div>
</template>

<script type="text/javascript">
import AppNavigation from '~/components/AppNavigation.vue'

export default {
    components: {
        AppNavigation
    }
}
</script>

<style>
html {
  font-family: "Helvetica Neue", Arial, sans-serif;
  padding: 20px;
}
</style>
