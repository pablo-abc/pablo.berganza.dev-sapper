<script>
  import { host } from '../../site.config.js';
  export let title;
  export let description;
  export let lang = 'en';
  export let url;
  export let img;
  export let isArticle = false;
  export let created;
</script>

<svelte:head>
  <meta name=author content="Pablo Berganza">
  <meta name=description content={description}>
  <meta itemdrop=name content={title}>
  <meta itemdrop=description content={description}>
  {#if img}
    <meta name="twitter:image:src" content={`${host}/${img}`}>
    <meta property="og:image" content={`${host}/${img}`}>
  {/if}
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content={title}>
  <meta name="twitter:description" content={description}>
  <meta name="twitter:site" content="Pablo_ABC">
  <meta name="twitter:creator" content="Pablo_ABC">
  <meta property="og:title" content={title}>
  <meta property="og:url" content={`${host}${url}`}>
  <meta property="og:site_name" content="Pablo Berganza">
  <meta property="og:description" content={description}>
  <meta property="og:locale" content={lang}>
  <meta property="fb:admins" content="1441268341">
  <meta property="fb:app_id" content="2097322913669232">
  <meta property="og:type" content="{isArticle ? 'article' : 'website'}">
  {#if isArticle}
    <meta property="article:author" content="Pablo Berganza">
    <meta property="article:published_time" content={created}>
  {/if}
  <title>{title}</title>
</svelte:head>
