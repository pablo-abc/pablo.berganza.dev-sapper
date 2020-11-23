<script context="module">
  export function preload() {
    return this.fetch('blog.json').then(r => r.json()).then(blogs => {
      return { blogs }
    })
  }
</script>

<script>
  import { onMount } from 'svelte'
  import Head from '../../components/Head.svelte'
  import BlogList from '../../components/blogs/BlogList.svelte'
  export let blogs

  onMount(() => {
    const jsonLd = {
      '@context': 'https://schema.org/',
      '@type': 'Blog',
      blogPost: blogs.map(blog => ({
        headline: blog.title,
        alternativeHeadline: blog.description,
        datePublished: blog.created,
        dateCreated: blog.created,
        isFamilyFriendly: 'true',
        author: {
          '@type': 'Person',
          name: 'Pablo Berganza',
          url: 'https://pablo.berganza.dev',
          email: 'pablo@berganza.dev',
          jobTitle: 'Software Engineer',
        },
      })),
    }

    const jsonScript = document.createElement('script')
    jsonScript.type = 'application/ld+json'
    const schema = document.createTextNode(JSON.stringify(jsonLd))
    jsonScript.appendChild(schema)
    document.head.appendChild(jsonScript)
  })
</script>

<Head
  title="Blog | Pablo Berganza"
  description="Personal site and blog for Pablo Berganza"
  url="/blog"
  />

<BlogList {blogs} />
