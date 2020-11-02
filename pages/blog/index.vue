<template lang="html">
    <div class="container margin-top-lg max-width-lg">
        <div class="grid gap-md">

            <c-card-1
                class="col-4@lg"
                v-for="(post, index) in posts"
                :key="index"
                v-bind="post"/>

        </div>
    </div>
</template>

<script>
import CCard1 from '~/components/component/c-card-1.vue'

export default {
    components: {
        CCard1
    },

    data() {
        return {
            posts: [
                {
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
                },
                {
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
                },
                {
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
                },
                {
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
                },
                {
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
                },
                {
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
                },
            ]
        }
    }
}
</script>

<style lang="scss">
</style>
