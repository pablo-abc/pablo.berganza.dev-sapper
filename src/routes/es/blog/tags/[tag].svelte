<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`blog/tags/${params.tag}.json?lang=es`);
    const data = await res.json();

    if (res.status === 200) {
      return { blogs: data, tag: params.tag };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Head from '../../../../components/Head.svelte';
  import BlogList from '../../../../components/blogs/BlogList.svelte';
  export let blogs;
  export let tag;
  $: capitalizedTag = tag.charAt(0).toUpperCase() + tag.slice(1);
</script>

<Head
  title={'Tag: ' + tag + ' | Pablo Berganza'}
  description="Publicaciones sobre {tag}"
  url="/es/blog/tags/{tag}"
  lang="es"
  />

<BlogList {blogs} title={capitalizedTag} />
