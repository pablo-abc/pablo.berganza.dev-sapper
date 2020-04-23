<script>
  import { fly } from 'svelte/transition'
  import ProfileBox from './ProfileBox.svelte'
  import AbilityBoxes from './AbilityBoxes.svelte'
  export let index
</script>

<section
  class=main
  transition:fly={{ duration: 200, y: 100 }}
  >
  <section class=main-info>
    <ProfileBox welcome={index.attributes.welcome} />
  </section>
  <section class=about-me>
    <h2>{index.attributes.aboutme}</h2>
    {@html index.html}
  </section>
  <section class=abilities>
    <h2>{index.attributes.myabilities}</h2>
    <AbilityBoxes />
  </section>
</section>

<style>
  .main {
      z-index: 4;
  }

  .main-info {
      width: 100%;
      background-color: var(--background-color);
      background-repeat: no-repeat;
      background-size: 100%;
  }

  .abilities h2, .about-me h2 {
      color: var(--color-primary-4);
      margin-bottom: 0;
  }

  .about-me h2 {
      color: #8C0048;
  }

 .abilities :global(p), .about-me :global(p) {
      text-align: center;
      color: #361E2A;
      margin: 0 10px;
      max-width: 720px;
  }
  .abilities, .about-me {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

  }

  .about-me {
      background-color: var(--color-primary-1);
      padding-bottom: 48px;
  }
</style>
