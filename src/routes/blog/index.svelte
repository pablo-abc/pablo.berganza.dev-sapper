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

<section class=blog-blogs>
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
