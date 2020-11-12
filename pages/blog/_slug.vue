<template lang="html">
    <article class="padding-y-lg">
      <header class="container max-width-xs margin-bottom-lg">
        <div class="text-component text-center line-height-lg v-space-md margin-bottom-md">
          <h1>{{ post.title }}</h1>
          <p class="color-contrast-medium text-md">{{ post.excerpt }}</p>
        </div>
      </header>

      <figure class="container max-width-lg margin-bottom-lg">
        <img :src="post.image.url" alt="Image description">
      </figure>

      <div class="container max-width-adaptive-sm">
        <div v-html="post.body" class="text-component line-height-lg v-space-md"></div>
      </div>
    </article>
</template>

<script>
export default {
    asyncData({ params, $repository }) {
        return $repository.posts.show(params.slug)
        .then(response => {
            return { post: response }
        })
    }
}
</script>

<style lang="scss">
</style>
