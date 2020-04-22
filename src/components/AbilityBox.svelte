<script>
  export let src
  export let alt
  export let color
</script>

<section class="ability color-{color}">
  <img {src} {alt}>
</section>

<style>
  .ability {
      width: 80vw;
      height: 80vw;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 10vw 10vw 10vw;
      border-radius: 10px;
  }

  .ability img {
      width: 80%;
  }

  @media only screen and (min-width: 600px) {
      .ability {
          max-width: 250px;
          max-height: 250px;
          margin: 24px 16px;
      }
  }

  .color-1 {
      background-color: var(--color-secondary-2-1);
  }

  .color-2 {
      background-color: var(--color-primary-1);
  }

  .color-3 {
      background-color: var(--color-primary-1);
  }

</style>
