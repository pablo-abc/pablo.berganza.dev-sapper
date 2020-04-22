<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(`blog/tags/${params.tag}.json`)
    const data = await res.json()

    if (res.status === 200) {
      return { blogs: data, tag: params.tag }
    } else {
      this.error(res.status, data.message)
    }
  }
</script>

<script>
  import Head from '../../../components/Head.svelte'
  import BlogList from '../../../components/blogs/BlogList.svelte'
  export let blogs
  export let tag
  $: capitalizedTag = tag.charAt(0).toUpperCase() + tag.slice(1)
</script>

<Head
  title={'Tag: ' + tag + ' | Pablo Berganza'}
  description="Posts about {tag}"
  url="/blog/tags/{tag}"
  />

<BlogList {blogs} title={capitalizedTag} />
