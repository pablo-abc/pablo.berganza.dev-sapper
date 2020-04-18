<script>
  import Icon from 'fa-svelte';
  import ShareButtons from '../ShareButtons.svelte';
  import { faClock, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
  import BlogBanner from './BlogBanner.svelte';
  export let blog;
</script>

<article id=blog>
  <header class=title>
    <h1>{blog.metadata.title}</h1>
    <h4 class=introduction>{blog.metadata.introduction}</h4>
  </header>
  {#if blog.metadata.banner}
    <BlogBanner
      src={blog.metadata.banner}
      alt={blog.metadata.bannertitle}
      title={blog.metadata.bannertitle}
      />
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
  <footer>
    <ShareButtons {blog} />
  </footer>
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

  .content :global(table) {
      border: 4px solid var(--color-primary-2);
      border-radius: 10px;
      margin: 0px auto;
  }
</style>
