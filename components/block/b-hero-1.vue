<template lang="html">
    <section class="hero padding-y-xxl" :style="'background-image: url(' + image.url + ');'">
      <div class="container max-width-adaptive-lg">
        <div class="max-width-xs">
          <div class="text-sm opacity-60% margin-bottom-xxs">{{ pre_title }}</div>

          <div class="text-component margin-bottom-sm">
            <h1>{{ title }}</h1>
            <p>{{ sub_title }}</p>
          </div>

          <div class="flex flex-wrap items-center gap-sm">
            <nuxt-link :to="link.url" class="btn btn--primary">{{ link.label || link.title }}</nuxt-link>

          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
    name: 'b-hero-1',

    props: {
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

<style lang="scss">
/* --------------------------------

File#: _1_hero
Title: Hero
Descr: A full-width callout section
Usage: codyhouse.co/license

-------------------------------- */

.hero {
  // if bg = img
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

// --overlay-layer
.hero--overlay-layer {
  &::after { // add a layer in between the img/video background and the content
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: alpha(var(--color-bg), 0.65);
    z-index: 1;
  }
}
</style>
