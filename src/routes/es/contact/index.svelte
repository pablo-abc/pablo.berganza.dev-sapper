<script context="module">
  export async function preload() {
    const resp = await this.fetch('es/contact.json')
    const data = await resp.json()
    return { contact: data }
  }
</script>

<script>
  import Contact from '../../../components/Contact.svelte'
  import Head from '../../../components/Head.svelte'
  export let contact
</script>

<Head
  title="Contáctame | Pablo Berganza"
  description="Sitio y blog personal de Pablo Berganza"
  url="/es/contact"
  lang="es"
  />

<Contact {contact} />
