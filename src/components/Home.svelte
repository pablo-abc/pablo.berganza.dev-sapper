<style lang="scss">
  @import '../styles/colorsfinal';
  .main {
    .main-info {
        width: 100%;
        background-color: lighten($color-primary-1, 16%);
        background-repeat: no-repeat;
        background-size: 100%;
    }

    #profile-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px 0;

        #profile-pic {
            object-fit: cover;
            width: 216px;
            height: 216px;
            border-radius: 50%;
            border: 4px solid $color-primary-0;
        }

        #profile-bubble {
            color: white;
            background-color: $color-primary-0;
            margin: 24px 20px;
            padding: 24px;
            padding-top: 28px;
            border-radius: 50px;
            line-height: 1;
            text-align: center;
        }
    }

    @media only screen and (min-width: 600px) {
        #profile-box {
            flex-direction: row;
            justify-content: center;
        }
    }

    .abilities, .about-me {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            color: $color-primary-4;
            margin-bottom: 0;
        }

        p {
            text-align: center;
            color: #333;
            margin: 0 10px;
            max-width: 720px;
        }
    }

    .about-me {
        background-color: $color-primary-1;
        padding-bottom: 48px;
    }

    .box-abilities {
        display: flex;
        flex-direction: column;
        width: 100vw;
    }

    .color-1 {
        background-color: $color-secondary-2-1;
    }

    .color-2 {
        background-color: $color-primary-1;
    }

    .color-3 {
        background-color: $color-primary-1;
    }

    .ability {
        width: 80vw;
        height: 80vw;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 10vw 10vw 10vw;
        border-radius: 10px;

        img {
            width: 80%;
        }
    }

    @media only screen and (min-width: 600px) {
        .box-abilities {
            flex-direction: row;
            justify-content: space-around;
            flex-wrap: wrap;
            max-width: 960px;
            margin: 0 auto;
        }

        .ability {
            max-width: 250px;
            max-height: 250px;
            margin: 24px 16px;
        }
    }
}
</style>

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
