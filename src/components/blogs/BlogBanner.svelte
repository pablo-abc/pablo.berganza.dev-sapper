<script>
  import path from 'path-browserify';
  import { lazy } from '../../helpers.js';
  function srcName(src, extName) {
    const { dir, name, ext } = path.parse(src);
    return path.join(dir, `${name}-${extName}${ext}`);
  }
  export let src;
  export let alt;
  export let title;
  $: placeholderSrc = srcName(src, 'placeholder');
  $: fullSizeSrc = srcName(src, '800');
</script>

<img class=banner
     src={placeholderSrc}
     {alt}
     {title}
     use:lazy={{ src: fullSizeSrc }}
     >

<style>
  .banner {
      display: block;
      margin: 64px auto 64px auto;
      width: 95%;
      max-width: 720px;
  }
</style>
