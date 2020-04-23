<script>
  import { send, receive } from '../crossfade.js'
  import { stores, goto } from '@sapper/app'
  import Icon from 'fa-svelte'
  import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
  import IconLink from './IconLink.svelte'
  const { session, page } = stores()
  $: lang = $session.lang
  $: langPath = lang === 'en' ? '' : lang + '/'
  $: otherLangPath = (lang === 'en' ? 'es' + $page.path : $page.path.slice(4)) || './'
  async function changeLang(e) {
    e.preventDefault()
    if (lang === 'en') $session.lang = 'es'
    else $session.lang = 'en'
    await goto(otherLangPath)
  }
  $: isBlog = /^((\/)|(\/es\/))blog\/?$/.test($page.path)
  $: isContact = /^((\/)|(\/es\/))contact\/?$/.test($page.path)
</script>

<nav>
  <div class=left-nav>
    <a id=logo href="./{langPath}">
      <span>Pablo</span>
      <span>Berganza</span>
    </a>
    <div class=nav-items>
      {#if !isBlog}
        <a id=blog-nav rel=prefetch class=nav-item href="{langPath}blog">
          <span
            in:receive={{ key: 'blog' }}
            out:send={{ key: 'blog' }}
            >
            Blog
          </span>
        </a>
      {/if}
      {#if !isContact}
        <a id=contact-nav class=nav-item href="{langPath}contact">
          <span
            in:receive={{ key: 'contact' }}
            out:send={{ key: 'contact' }}
            >
            {#if lang === 'es'}
              Contáctame
            {:else}
              Contact Me
            {/if}
          </span>
        </a>
      {/if}
    </div>
  </div>
  <div class=right-nav>
    <a rel=prefetch href={otherLangPath} on:click={changeLang}>
      {#if lang === 'en'}
        es
      {:else}
        en
      {/if}
    </a>
    <IconLink href="https://github.com/pablo-abc" title="GitHub">
      <Icon icon={faGithub} />
    </IconLink>
    <IconLink href="https://www.instagram.com/berganzapablo/" title="Instagram">
      <Icon icon={faInstagram} />
    </IconLink>
    <IconLink href="https://www.linkedin.com/in/PabloABC" title="LinkedIn">
      <Icon icon={faLinkedin} />
    </IconLink>
    <IconLink href="https://twitter.com/Pablo_ABC" title="Twitter">
      <Icon icon={faTwitter} />
    </IconLink>
  </div>
</nav>

<style>
  nav div {
      display: inline;
  }

  .left-nav {
      flex: 1;
      display: flex;
      flex-direction: column;
  }

  @media only screen and (min-width: 540px) {
      .left-nav {
          flex-direction: row;
          align-items: center;
      }
  }

  .right-nav {
      display: flex;
      align-items: center;
  }

  .right-nav :global(a) {
      margin: 5px;
  }

  #logo {
      text-decoration: none;
      transition: color 0.1s;
      color: var(--color-primary-0);
      font-weight: bold;
      font-size: 1.5em;
      display: flex;
      flex-direction: column;
  }

  #logo:hover {
      color: var(--color-primary-1);
  }

  #logo span {
      margin-right: 8px;
  }

  @media only screen and (min-width: 362px) {
      #logo {
          flex-direction: row;
      }
  }

  nav {
      max-width: 960px;
      padding: 0 20px;
      margin: 8px auto;
      display: flex;
      align-items: center;
      line-height: 1.3;
      justify-content: space-between;
  }

  #blog-nav {
      margin-right: 8px;
  }
</style>
