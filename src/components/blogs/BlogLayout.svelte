<script>
  import { send, receive } from '../../crossfade.js'
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import ShareButtons from '../ShareButtons.svelte'
  import { faClock, faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
  import Icon from 'fa-svelte'
  import BlogBanner from './BlogBanner.svelte'
  import Commento from '../Commento.svelte'
  import { stores } from '@sapper/app'
  import { readingTime } from 'reading-time-estimator'
  import Head from '../Head.svelte'

  export let title = undefined
  export let created = undefined
  export let description = undefined
  export let banner = undefined
  export let bannertitle = undefined
  export let tags = undefined

  let ttr
  let content

  const { session, page } = stores()
  $: slug = $page.path.split('/').filter(el => !!el).pop()
  $: lang = $session.lang
  $: langPath = lang === 'en' ? '' : lang + '/'
  $: blog = {
    slug,
    attributes: {
      description,
      title,
    },
  }

  onMount(() => {
    ttr = Math.ceil(readingTime(content.innerText, { wordsPerMinute: 200 }).minutes)
  })
</script>

<Head
  title={title + ' | Pablo Berganza'}
  description={description}
  img={banner}
  isArticle
  created={created}
  url="/blog/{slug}"
  ttr={ttr}
  />

<article class=main>
  {#if title}
    <header class=title>
      <h1>
        <span
          in:receive={{ key: slug + 'title' }}
          out:send={{ key: slug + 'title' }}
          >
          {title}
        </span>
      </h1>
      {#if description}
        <h4 class=description>
          <span
            in:receive={{ key: slug + 'description' }}
            out:send={{ key: slug + 'description' }}
            >
            {description}
          </span>
        </h4>
        {/if}
    </header>
  {/if}
  <div transition:fade={{ duration: 400 }}>
    {#if banner}
      <BlogBanner
        src={banner}
        alt={bannertitle}
        title={bannertitle}
        />
      {/if}
      <div class=ttr-created>
        <span class=ttr>
          <Icon icon={faClock} />
          {#if ttr}
            {ttr}
            min
          {/if}
        </span>
        <span class=created>
          <Icon icon={faCalendarAlt} />
          {created}
        </span>
      </div>
      <div class=tag-links>
        Tags:
        {#each tags as tag}
          <a class=tag-link href="{langPath}blog/tags/{tag}">
            {tag}
          </a>
        {/each}
      </div>
      <section bind:this={content} class='content'>
        <slot />
      </section>
      <footer>
        <ShareButtons {blog} />
        <Commento
          src={process.env.NODE_ENV === 'production'
          ? 'https://cdn.commento.io/js/commento.js'
          : 'http://localhost:8080/js/commento.js'}
          />
      </footer>
  </div>
</article>

<style>
  span {
      display: inline-block;
  }

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

  .description {
      margin: 0;
      color: var(--color-primary-4);
      padding: 0 0 16px 0;
  }

  .ttr-created {
      display: flex;
      max-width: 720px;
      justify-content: space-between;
      color: var(--color-primary-4);
  }

  .tag-links {
      display: flex;
      max-width: 720px;
      color: var(--color-primary-4);
  }

  .tag-link {
      margin-left: 8px;
  }

  .content {
      display: flex;
      flex-direction: column;
      max-width: 720px;
      font-weight: 550;
      line-height: 1.2;
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
      margin: 8px inherit;
      background-color: #FFF7FB;
      border-left: 5px solid var(--color-primary-2);
      border-radius: 10px;
      color: #694D5D;

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
      align-self: center;
      width: 95%;
  }

  .content :global(iframe), .content :global(table) {
      align-self: center;
      border: 4px solid var(--color-primary-2);
      border-radius: 10px;
      margin: inherit 10px;
      width: 95%;
  }
  .content :global(.yt-vid) {
      align-self: center;
      width: 95%;
  }

  .content :global(yt-vid) {
      --width: 100%;
      --height: 315px;
      --border: 4px solid var(--color-primary-2);
      --border-radius: 10px;
  }

  .content > :global(*) {
      margin-top: 8px;
      margin-bottom: 8px;
  }

  footer {
      display: flex;
      flex-direction: column;
      max-width: 720px;
      margin: 0 auto;
  }
</style>
