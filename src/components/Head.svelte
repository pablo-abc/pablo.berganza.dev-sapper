<script>
  import { onMount } from 'svelte'
  import { srcName } from '../helpers.js'
  import { host } from '../../site.config.js'
  export let title
  export let description
  export let lang = 'en'
  export let url = ''
  export let img = ''
  export let isArticle = false
  export let created = ''
  export let ttr = undefined
  $: imgSrc = srcName(img, '800')

  onMount(() => {
    if (!isArticle) return
    const jsonLd = {
      '@context': 'https://schema.org/',
      '@type': 'BlogPosting',
      'headline': title.split('|')[0].trim(),
      'alternativeHeadline': description,
      'image': `${host}/${imgSrc}`,
      'dateCreated': created,
      'datePublished': created,
      'isFamilyFriendly': 'true',
      'author': {
        '@type': 'Person',
        'name': 'Pablo Berganza',
        'url': 'https://pablo.berganza.dev',
        'email': 'pablo@berganza.dev',
        'jobTitle': 'Software Engineer'
      }
    }

    const jsonScript = document.createElement('script')
    jsonScript.type = 'application/ld+json'
    const schema = document.createTextNode(JSON.stringify(jsonLd))
    jsonScript.appendChild(schema)
    document.head.appendChild(jsonScript)
  })
</script>

<svelte:head>
  <meta name="author" content="Pablo Berganza" />
  <meta name="description" content="{description}" />
  <meta itemprop="name" content="{title}" />
  <meta itemprop="description" content="{description}" />
  {#if img}
    <meta name="twitter:image" content="{`${host}/${imgSrc}`}" />
    <meta property="og:image" content="{`${host}/${imgSrc}`}" />
    <meta itemprop="image" content="{`${host}/${imgSrc}`}" />
    <meta name="twitter:card" content="summary_large_image" />
  {:else}
    <meta name="twitter:card" content="summary" />
  {/if}
  <meta name="twitter:title" content="{title}" />
  <meta name="twitter:description" content="{description}" />
  <meta name="twitter:site" content="Pablo_ABC" />
  <meta name="twitter:creator" content="Pablo_ABC" />
  <meta property="og:title" content="{title}" />
  <meta property="og:url" content="{`${host}${url}`}" />
  <meta property="og:site_name" content="Pablo Berganza" />
  <meta property="og:description" content="{description}" />
  <meta property="og:locale" content="{lang}" />
  <meta property="fb:admins" content="1441268341" />
  <meta property="fb:app_id" content="2097322913669232" />
  <meta property="og:type" content="{isArticle ? 'article' : 'website'}" />
  {#if isArticle}
    <meta property="article:author" content="Pablo Berganza" />
    <meta property="article:published_time" content="{created}" />
    {#if lang === 'en'}
      <meta name="twitter:label1" value="Reading time" />
      <meta name="twitter:label2" value="Author" />
    {:else}
      <meta name="twitter:label1" value="Tiempo de lectura" />
      <meta name="twitter:label2" value="Autor" />
    {/if}
    <meta name="twitter:data1" value="{ttr} min" />
    <meta name="twitter:data2" value="Pablo Berganza" />
  {/if}
  <title>{title}</title>
</svelte:head>
