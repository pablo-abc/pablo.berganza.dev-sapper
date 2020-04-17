<script context="module">
  import Icon from 'fa-svelte';
  import { faClock, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
  export function preload({ params, query }) {
    return this.fetch(`blog.json`).then(r => r.json()).then(blogs => {
      return { blogs };
    });
  }
</script>

<script>
  export let blogs;
</script>

<svelte:head>
  <title>Blog | Pablo Berganza</title>
</svelte:head>

<section class=blog-posts>
  <header class=title>
    <h1>Blog</h1>
  </header>
  <section class=blog-list>
    {#each blogs as blog}
      <a class=blog-item rel='prefetch' href='blog/{blog.slug}'>
        <article>
          <h3>{blog.title}</h3>
          <p class=ttr-created>
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
          <p class=introduction>{blog.introduction}</p>
        </article>
      </a>
    {/each}
  </section>
</section>

<style>
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
      color: #555;
      font-style: italic;
      margin-top: 0px;
      margin-bottom: 8px;
  }

  .ttr {
      margin-right: 24px;
  }

  .introduction {
      margin: 0px;
      color: #333;
  }

  h3 {
      color: var(--color-primary-0);
      margin: 0;
  }

  .blog-item:hover {
      background-color: var(--color-secondary-2-1);
      text-decoration: none;
  }
</style>
