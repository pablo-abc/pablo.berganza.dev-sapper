<script context="module">
  import Icon from 'fa-svelte';
  import { faClock, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

  export async function preload({ params, query }) {
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { blog: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let blog;
</script>

<svelte:head>
  <title>{blog.metadata.title} | Pablo Berganza</title>
</svelte:head>

<article id=blog>
  <header class=title>
    <h1>{blog.metadata.title}</h1>
    <h4 class=introduction>{blog.metadata.introduction}</h4>
  </header>
  {#if blog.metadata.banner}
    <img class=banner src={blog.metadata.banner} alt={blog.metadata.bannertitle} title={blog.metadata.bannertitle}>
  {/if}
  <div class=ttr-created>
    <span class=ttr>
      <Icon icon={faClock} />
      {blog.ttr}
      min
    </span>
    <span class=created>
      <Icon icon={faCalendarAlt} />
      {blog.metadata.created}
    </span>
  </div>
  <div class=tag-links>
    Tags:
    {#each blog.metadata.tags as tag}
      <a class=tag-link href={`/blog/tags/${tag}`}>
        {tag}
      </a>
    {/each}
  </div>
  <section class='content'>
    {@html blog.html}
  </section>
</article>
