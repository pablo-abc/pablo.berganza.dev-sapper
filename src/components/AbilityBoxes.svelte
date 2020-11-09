<script>
  import AbilityBox from './AbilityBox.svelte'
  const abilities = [
    ['https://cdn.svgporn.com/logos/javascript.svg', 'JavaScript'],
    ['https://cdn.svgporn.com/logos/typescript-icon.svg', 'TypeScript'],
    ['https://cdn.svgporn.com/logos/clojure.svg', 'Clojure'],
    ['img/cljs-white.svg', 'ClojureScript'],
    ['https://cdn.svgporn.com/logos/python.svg', 'Python'],
    ['https://cdn.svgporn.com/logos/docker.svg', 'Docker'],
    ['img/nestjs.svg', 'NestJS'],
    ['img/react.svg', 'React'],
    ['img/svelte.svg', 'Svelte'],
  ]
</script>

<style>
  .box-abilities {
    display: flex;
    flex-direction: column;
    width: 100vw;
  }

  @media only screen and (min-width: 600px) {
    .box-abilities {
      flex-direction: row;
      justify-content: space-around;
      flex-wrap: wrap;
      max-width: 960px;
      margin: 0 auto;
    }
  }
</style>

<section class="box-abilities">
  {#each abilities as ability, index}
    <AbilityBox
      color="{(index + 1) % 2 || 2}"
      src="{ability[0]}"
      alt="{ability[1]}"
      title="{ability[1]}"
    />
  {/each}
</section>
