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
    data() {
        return {
            post: {
                image: {
                    url: "https://images.unsplash.com/photo-1508615070457-7baeba4003ab?auto=format&w=1280&q=80",
                    alt: "",
                    caption: ""
                },
                title: "Example Post",
                excerpt: "Quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas",
                body: "<h3>Omnis dicta quia quae officia reiciendis voluptatem exercitationem non. Animi ullam rerum nesciunt quo voluptas nam sit. Qui voluptatem doloremque omnis nam</h3>\n<hr>\n<p>Mollitia aut laudantium soluta deserunt. Pariatur inventore ipsum quae aut est aliquam. Et non ab et neque.</p>\n<p>Laudantium est <a title=\"Et voluptatibus sunt.\" href=\"http://google.com/\">Excepturi necessitatibus maxime non illo eum</a> In quod inventore possimus dolor placeat laudantium.</p>",
                link: {
                    label: "Read Post",
                    url: "/blog/sunt-aut-facere-repellat",
                    target: ""
                }
            }
        }
    }
}
</script>

<style lang="css" scoped>
</style>
