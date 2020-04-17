<script>
  import AbilityBoxes from './AbilityBoxes.svelte';
  export let index;
</script>

<section class=main>
  <section class=main-info>
    <div id=profile-box>
      <img id=profile-pic src=img/profile-pic.jpeg alt="Profile picture">
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
    <AbilityBoxes />
  </section>
</section>

<style>
  .main-info {
      width: 100%;
      background-color: var(--background-color);
      background-repeat: no-repeat;
      background-size: 100%;
  }

  #profile-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 24px 0;

  }

  #profile-pic {
      object-fit: cover;
      width: 216px;
      height: 216px;
      border-radius: 50%;
      border: 4px solid var(--color-primary-0);
  }

  #profile-bubble {
      color: white;
      background-color: var(--color-primary-0);
      margin: 24px 20px;
      padding: 24px;
      padding-top: 28px;
      border-radius: 50px;
      line-height: 1;
      text-align: center;
  }

  .abilities h2, .about-me h2 {
      color: var(--color-primary-4);
      margin-bottom: 0;
  }

 .abilities :global(p), .about-me :global(p) {
      text-align: center;
      color: #333;
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

  @media only screen and (min-width: 600px) {
      #profile-box {
          flex-direction: row;
          justify-content: center;
      }
  }
</style>
