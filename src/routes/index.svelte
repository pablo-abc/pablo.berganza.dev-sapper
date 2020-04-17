<script context="module">
  export async function preload() {
    const resp = await this.fetch('/index.json');
    const data = await resp.json();
    return { index: data };
  }
</script>

<script>
  import Home from '../components/Home.svelte';
  export let index;
</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<Home {index} />
