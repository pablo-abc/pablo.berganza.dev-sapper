<script context="module">
  export async function preload() {
    const resp = await this.fetch('contact.json');
    const data = await resp.json();
    return { contact: data };
  }
</script>

<script>
  import Contact from '../../components/Contact.svelte';
  import Head from '../../components/Head.svelte';
  export let contact;
</script>

<Head
  title="Contact Me | Pablo Berganza"
  description="Personal site and blog for Pablo Berganza"
  url="/contact"
  />

<Contact {contact} />
