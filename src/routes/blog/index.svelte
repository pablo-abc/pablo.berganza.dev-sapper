<script context="module">
  export function preload() {
    return this.fetch('blog.json').then(r => r.json()).then(blogs => {
      return { blogs }
    })
  }
</script>

<script>
  import Head from '../../components/Head.svelte'
  import BlogList from '../../components/blogs/BlogList.svelte'
  export let blogs
</script>

<Head
  title="Blog | Pablo Berganza"
  description="Personal site and blog for Pablo Berganza"
  url="/blog"
  />

<BlogList {blogs} />
