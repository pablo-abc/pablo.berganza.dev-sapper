<script context="module">
  export async function preload() {
    const resp = await this.fetch('/index.json');
    const data = await resp.json();
    return { index: data };
  }
</script>

<script>
  import Navbar from '../components/Navbar.svelte';
  import Home from '../components/Home.svelte';
  import Head from '../components/Head.svelte';
  export let index;
</script>

<Head
  title="Home | Pablo Berganza"
  description="Personal site and blog for Pablo Berganza"
  url=process.env.HOST
  />

<Home {index} />
