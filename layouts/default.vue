<template>
  <div>
    <app-navigation/>
    <nuxt/>
    <app-footer/>
  </div>
</template>

<script type="text/javascript">
import AppNavigation from '~/components/AppNavigation.vue'
import AppFooter from '~/components/Appfooter.vue'

export default {
    components: {
        AppNavigation,
        AppFooter
    }
}
</script>
