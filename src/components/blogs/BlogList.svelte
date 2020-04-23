<script>
  import { send, receive } from '../../crossfade.js'
  import { fade } from 'svelte/transition'
  import { stores } from '@sapper/app'
  import Icon from 'fa-svelte'
  import { faClock, faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
  export let blogs
  export let title = 'Blog'
  const { session } = stores()
  $: lang = $session.lang
  $: langPath = lang === 'en' ? '' : lang + '/'
</script>

<section class=main>
  <header
    class=title
    transition:fade={{ duration: 200 }}
    >
    <h1>{title}</h1>
  </header>
  <section
    class=blog-list
    >
    {#each blogs as blog, index}
      <a class=blog-item rel="prefetch" href="{langPath}blog/{blog.slug}">
        <article>
          <h2>
            <span
              in:receive={{ key: blog.slug + 'title' }}
              out:send={{ key: blog.slug + 'title' }}
              >
              {blog.title}
            </span>
          </h2>
          <p class=ttr-created
             transition:fade={{ duration: 200 }}
             >
            <span class=ttr>
              <Icon icon={faClock} />
              {blog.ttr}
              min
            </span>
            <span class=created>
              <Icon icon={faCalendarAlt} />
              {blog.created}
            </span>
          </p>
          <p class=description>
            <span
              in:receive={{ key: blog.slug + 'description' }}
              out:send={{ key: blog.slug + 'description' }}
              >
              {blog.description}
            </span>
          </p>
        </article>
      </a>
    {/each}
  </section>
</section>

<style>
  span {
      display: inline-block;
  }

  h1 {
      color: var(--color-primary-0);
      text-align: center;
  }

  .blog-list {
      display: flex;
      flex-direction: column;
      max-width: 720px;
      margin: 0 10px;
  }

  @media only screen and (min-width: 740px) {
      .blog-list {
          margin: 0 auto;
      }
  }

  .blog-item {
      text-decoration: none;
      transition: background-color 0.1s;
      color: var(--color-primary-4);
      margin: 0;
      margin-top: 16px;
      padding: 16px;
      border-radius: 5px;
  }

  .ttr-created {
      display: flex;
      color: #77606C;
      font-style: italic;
      margin-top: 0px;
      margin-bottom: 8px;
  }

  .ttr {
      margin-right: 24px;
  }

  .description {
      margin: 0px;
      color: var(--base-font-color);
  }

  h2 {
      color: var(--color-primary-0);
      margin: 0;
      font-size: 1.3em;
  }

  .blog-item:hover, .blog-item:active {
      background-color: #ECDFFF;
      text-decoration: none;
  }
</style>
