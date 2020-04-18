<script context="module">
  export async function preload() {
    const resp = await this.fetch('es.json');
    const data = await resp.json();
    return { index: data };
  }
</script>

<script>
  import Navbar from '../../components/Navbar.svelte';
  import Home from '../../components/Home.svelte';
  import Head from '../../components/Head.svelte';
  export let index;
</script>

<Head
  title="Inicio | Pablo Berganza"
  description="Sitio y blog personal de Pablo Berganza"
  url="/es/"
  lang="es"
  />

<Home {index} />
