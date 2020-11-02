<template lang="html">
    <div class="card card--is-link">
      <nuxt-link class="card__link" :to="link.url" aria-label="Description of the link">
        <figure class="card__img">
          <img :src="image.url" alt="Card preview img">
          <div class="card__link-icon" aria-hidden="true">
            <svg class="icon" viewBox="0 0 32 32"><g stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" fill="none" stroke-miterlimit="10"><path d="M21,5s-4.333-1.667-7,1L6,14c-2.667,2.667-1,7-1,7"></path><path d="M27,11s1.667,4.333-1,7l-8,8c-2.667,2.667-7,1-7,1"></path> <line x1="12" y1="20" x2="4" y2="28"></line><line x1="28" y1="4" x2="20" y2="12"></line></g></svg>
          </div>
        </figure>

        <div class="card__content">
          <div class="text-component">
            <h4>{{ title }}</h4>
            <p class="text-sm color-contrast-medium">{{ excerpt }}</p>
          </div>
        </div>
    </nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'c-card-1',

    props: {
        image: {
            url: String,
            alt: String,
            caption: String
        },
        title: String,
        excerpt: String,
        link: {
            label:  String,
            title:  String,
            url:    String,
            target: String
        }
    }
}
</script>

<style lang="scss" scoped>
/* --------------------------------

File#: _1_card
Title: Card
Descr: Container of information used as teaser for further content exploration
Usage: codyhouse.co/license

-------------------------------- */

.card {
  background-color: var(--color-bg);
  box-shadow: var(--shadow-sm);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.card__img {
  img {
    display: block;
    width: 100%;
  }
}

.card__content {
  padding: var(--space-xs);
}

// --link
.card--is-link {
  will-change: box-shadow;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: var(--shadow-md);

    .card__img::after {
      opacity: 1;
    }
  }

  .card__img {
    position: relative;

    &::after { // overlay layer
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: alpha(var(--color-black), 0.6);
      opacity: 0;
      transition: opacity 0.2s;
    }
  }
}

.card__link {
  text-decoration: none;
  display: block;
  color: inherit;
}

.card__link-icon {
  position: absolute;
  z-index: 1;
  width: 64px;
  height: 64px;
  top: calc(50% - 32px);
  left: calc(50% - 32px);
  background-color: alpha(var(--color-white), 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  transition: opacity 0.2s;

  .icon {
    display: block;
    width: 32px;
    height: 32px;
    color: var(--color-black); // icon color
  }
}

.card--is-link:hover .card__link-icon {
  opacity: 1;
}
</style>
