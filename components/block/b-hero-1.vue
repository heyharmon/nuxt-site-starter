<template lang="html">
    <section class="hero padding-y-xxl margin-bottom-xl" style="background-image: url('https://codyhouse.co/app/assets/img/hero-img-2.jpg');">
      <div class="container max-width-adaptive-lg">
        <div class="max-width-xs">
          <div class="text-sm opacity-60% margin-bottom-xxs">This is a Label</div>

          <div class="text-component margin-bottom-sm">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vero aliquam, natus quae architecto hic quod!</p>
          </div>

          <div class="flex flex-wrap items-center gap-sm">
            <a href="#0" class="btn btn--primary">Download</a>
            <a href="#0" class="color-inherit">Learn more</a>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
    name: 'b-hero-1'
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
