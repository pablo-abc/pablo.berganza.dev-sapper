<script context="module">
  export async function preload() {
    const resp = await this.fetch('index.json')
    const data = await resp.json()
    return { index: data }
  }
</script>

<script>
  import Home from '../components/Home.svelte'
  import Head from '../components/Head.svelte'
  export let index
</script>

<Head
  title="Home | Pablo Berganza"
  description="Personal site and blog for Pablo Berganza"
/>

<svelte:head>
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Pablo Berganza",
      "url": "https://pablo.berganza.dev",
      "email": "pablo@berganza.dev",
      "jobTitle": "Software Engineer"
    }
  </script>
</svelte:head>

<Home {index} />
