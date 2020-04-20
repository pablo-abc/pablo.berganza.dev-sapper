<script>
  import { stores } from '@sapper/app';
  import Navbar from '../components/Navbar.svelte';
  export let segment;
  const { session } = stores();
  if (segment === 'es') $session.lang = 'es';
  else $session.lang = 'en';
</script>

<header>
  <Navbar />
</header>

<main>
  <slot></slot>
</main>

<style>
  main {
      margin-top: 107px;

  }

  header {
      position: fixed;
      top: 0;
      width: 100%;
      background-color: var(--background-color);
      opacity: 0.9;
      max-height: 107px;
      z-index: 99999;
  }

  @media only screen and (min-width: 362px) {
      main {
          margin-top: 73px;
      }
      header {
          max-height: 77px;
      }
  }

  @media only screen and (min-width: 540px) {
      main {
          margin-top: 50px;
      }
      header {
          max-height: 50px;
      }
  }
</style>
