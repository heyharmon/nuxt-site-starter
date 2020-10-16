<template lang="html">
    <div class="grid container max-width-adaptive-lg">
        <!-- Sidebar -->
        <div class="sidebar col-3@lg margin-y-sm">
            <h4 class="margin-bottom-sm">Categories</h4>
            <nuxt-link class="btn btn--subtle" to="/blog/category/vue">Vue</nuxt-link>
            <nuxt-link class="btn btn--subtle" to="/blog/category/nuxt">Nuxt</nuxt-link>
            <nuxt-link class="btn btn--subtle" to="/blog/category/laravel">Laravel</nuxt-link>
            <nuxt-link class="btn btn--subtle" to="/blog/category/laravel">Forge</nuxt-link>
            <nuxt-link class="btn btn--subtle" to="/blog/category/laravel">CloudFlare</nuxt-link>
        </div>

        <!-- Content -->
        <div class="col-9@lg margin-bottom-xxl">
            <div class="grid gap-md">
                <app-card class="col-6@lg"/>
                <app-card class="col-6@lg"/>
                <app-card class="col-6@lg"/>
                <app-card class="col-6@lg"/>
                <app-card class="col-6@lg"/>
                <app-card class="col-6@lg"/>
            </div>
        </div>
    </div>
</template>

<script>
import AppCard from '~/components/AppCard.vue'

export default {
    components: {
        AppCard
    }
}
</script>

<style lang="scss">
.sidebar {
    .btn {
        margin-right: var(--space-xxxs);
        margin-bottom: var(--space-xs);
    }
}
</style>
