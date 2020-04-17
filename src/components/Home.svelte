<script>
  export let index;
  let abilities = [
    ['https://cdn.svgporn.com/logos/javascript.svg', 'JavaScript'],
    ['https://cdn.svgporn.com/logos/typescript-icon.svg', 'TypeScript'],
    ['https://cdn.svgporn.com/logos/clojure.svg', 'Clojure'],
    ['/img/cljs-white.svg', 'ClojureScript'],
    ['https://cdn.svgporn.com/logos/python.svg', 'Python'],
    ['https://cdn.svgporn.com/logos/docker.svg', 'Docker'],
  ];
</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<section class=main>
  <section class=main-info>
    <div id=profile-box>
      <img id=profile-pic src=/img/profile-pic.jpeg alt="Profile picture">
      <h3 id=profile-bubble>
        {index.metadata.welcome}
      </h3>
    </div>
  </section>
  <section class=about-me>
    <h2>{index.metadata.aboutme}</h2>
    {@html index.html}
  </section>
  <section class=abilities>
    <h2>{index.metadata.myabilities}</h2>
    <section class=box-abilities>
      {#each abilities as ability, index}
      <section class="ability color-{(index + 1) % 2 || 2}">
        <img src={ability[0]} alt={ability[1]}>
      </section>
      {/each}
    </section>
  </section>
</section>
