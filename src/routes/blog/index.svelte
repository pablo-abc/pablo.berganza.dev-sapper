<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`).then(r => r.json()).then(blogs => {
      return { blogs };
    });
  }
</script>

<script>
  import Head from '../../components/Head.svelte';
  import BlogList from '../../components/blogs/BlogList.svelte';
  const host = process.browser ? JSON.parse('process.env.HOST') : 'process.env.HOST';
  export let blogs;
</script>

<Head
  title="Blog | Pablo Berganza"
  description="Personal site and blog for Pablo Berganza"
  url={host + '/blog'}
  />

<BlogList {blogs} />
