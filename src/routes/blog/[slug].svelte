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
  import Head from '../../components/Head.svelte';
  export let blog;
</script>

<svelte:head>
  <title>{blog.metadata.title} | Pablo Berganza</title>
</svelte:head>
<Head
  title={blog.metadata.title + ' | Pablo Berganza'}
  description={blog.metadata.introduction}
  img={blog.metadata.banner}
  isArticle
  created={blog.metadata.created}
  />

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

<style>
  header {
      margin: 0 0 32px 0;
      min-height: 110px;
  }

  h1 {
      padding: 32px 0 0 0;
  }

  .content :global(h2) {
      color: var(--color-secondary-2-0);
  }

  .introduction {
      margin: 0;
      color: var(--color-primary-0);
      padding: 0 0 16px 0;
  }

  .ttr-created {
      display: flex;
      max-width: 720px;
      justify-content: space-between;
  }

  .tag-links {
      display: flex;
      max-width: 720px;
  }

  .tag-link {
      margin-left: 8px;
  }

  .content {
      max-width: 720px;
      font-weight: 550;
      line-height: 1.2;
      color: #444;
      border-bottom: 2px solid var(--color-primary-1);
  }

  .content, .ttr-created, .tag-links {
      margin: 8px 10px;
  }

  @media only screen and (min-width: 740px) {
      .content, .ttr-created, .tag-links {
          margin: 8px auto;
      }
  }

  @media only screen and (min-width: 600px) {
      .content {
          line-height: 1.5;
      }
  }

  .content :global(blockquote) {
      padding: 8px 10px;
      margin: 8px 10px;
      background-color: lighten(var(--color-primary-1,) 20%);
      border-left: 5px solid var(--color-primary-2);
      border-radius: 10px;

  }

  .content :global(blockquote) :global(p) {
      margin: 0;
  }

  .content :global(pre) {
      margin: 8px 10px;
      overflow: auto;
      display: flex;
      padding: 10px;
      border-left: 5px solid var(--color-primary-2);
      border-radius: 10px;
      white-space: pre;       /* css-3 */
      white-space: -moz-pre;  /* Mozilla, since 1999 */
      white-space: -pre;      /* Opera 4-6 */
      white-space: -o-pre;    /* Opera 7 */
  }

  ul.share-buttons {
      max-width: 720px;
      margin: 0 auto;
      color: #444;
      font-weight: 550;
      list-style: none;
      padding: 0;
      display: flex;
      justify-content: flex-end;
      align-items: center;
  }

  ul.share-buttons li {
      margin: 10px;
  }

  ul.share-buttons .sr-only {
      position: absolute;
      clip: rect(1px 1px 1px 1px);
      clip: rect(1px, 1px, 1px, 1px);
      padding: 0;
      border: 0;
      height: 1px;
      width: 1px;
      overflow: hidden;
  }

  .banner {
      display: block;
      margin: 64px auto 64px auto;
      width: 95%;
      max-width: 720px;
  }

  .content :global(table) {
      border: 4px solid var(--color-primary-2);
      border-radius: 10px;
      margin: 0px auto;
  }
</style>
