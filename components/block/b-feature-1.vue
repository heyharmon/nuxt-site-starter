<template lang="html">
    <section class="margin-y-xxl position-relative z-index-1">
      <div class="container max-width-adaptive-lg">
        <div class="grid gap-md items-center">
          <div class="col-6@md" :class="flip_horizontal ? 'order-2@md' : ''">

            <div class="text-component">
              <p class="text-sm color-contrast-medium">{{ pre_title }}</p>
              <h1>{{ title }}</h1>
              <p>{{ sub_title }}</p>
            </div>

            <div class="margin-top-sm">
              <div class="flex flex-wrap gap-sm items-center">
                <nuxt-link :to="link.url" class="btn btn--primary">{{ link.label || link.title }}</nuxt-link>
              </div>
            </div>
          </div>

          <div class="col-6@md">
            <figure>
              <img class="block width-100%" :src="image.url" alt="Image description">
            </figure>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
    name: 'b-feature-1',

    props: {
        flip_horizontal: Boolean,
        image: {
            url: String,
            alt: String,
            caption: String
        },
        pre_title: String,
        title:     String,
        sub_title: String,
        link: {
            label:  String,
            title:  String,
            url:    String,
            target: String
        }
    }
}
</script>

<style lang="css" scoped>
</style>
