<template>
  <div>
    <g-navigation-1/>
    <nuxt/>
    <g-footer-1/>
  </div>
</template>

<script type="text/javascript">
import GNavigation1 from '~/components/global/g-navigation-1.vue'
import GFooter1 from '~/components/global/g-footer-1.vue'

export default {
    components: {
        GNavigation1,
        GFooter1
    }
}
</script>
