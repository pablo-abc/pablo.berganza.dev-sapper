<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(`es/blog/${params.slug}.json`)
    const data = await res.json()

    if (res.status === 200) {
      return { blog: data }
    } else {
      this.error(res.status, data.message)
    }
  }
</script>

<script>
  import Head from '../../../components/Head.svelte'
  import Blog from '../../../components/blogs/Blog.svelte'
  export let blog
</script>

<Head
  title={blog.attributes.title + ' | Pablo Berganza'}
  description={blog.attributes.description}
  img={blog.attributes.banner}
  isArticle
  created={blog.attributes.created}
  url="/es/blog/{blog.slug}"
  lang="es"
  ttr={blog.ttr}
  />

<Blog {blog} />
