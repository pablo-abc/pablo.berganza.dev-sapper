<script>
  import { srcName, lazy } from '../../helpers.js'
  export let src
  export let alt
  export let title
  $: placeholderSrc = srcName(src, 'placeholder')
  $: fullSizeSrc = srcName(src, '800')
</script>

<img class=banner
     src={placeholderSrc}
     {alt}
     {title}
     use:lazy={{ src: fullSizeSrc }}
     itemprop="image"
     >

<style>
  .banner {
      display: block;
      margin: 64px auto 64px auto;
      width: 95%;
      max-width: 720px;
  }
</style>
