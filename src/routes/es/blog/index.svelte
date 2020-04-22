<script context="module">
  export function preload() {
    return this.fetch('es/blog.json').then(r => r.json()).then(blogs => {
      return { blogs }
    })
  }
</script>

<script>
  import Head from '../../../components/Head.svelte'
  import BlogList from '../../../components/blogs/BlogList.svelte'
  export let blogs
</script>

<Head
  title="Blog | Pablo Berganza"
  description="Sitio y blog personal de Pablo Berganza"
  url="/es/blog"
  lang="es"
  />

<BlogList {blogs} />
