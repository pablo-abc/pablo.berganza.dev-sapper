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
  export let index;
</script>

<svelte:head>
	<title>Home | Pablo Berganza</title>
</svelte:head>

<Home {index} />
