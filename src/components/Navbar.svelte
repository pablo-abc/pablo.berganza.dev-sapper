<script>
  import { flip } from 'svelte/animate'
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
  $: blogNav = {
    show: !isBlog,
    key: 'blog',
    text: 'Blog',
    href: `${langPath}blog`,
    attributes: {
      id: 'blog-nav',
      rel: 'prefetch',
    },
  }
  $: contactNav = {
    show: !isContact,
    key: 'contact',
    text: lang === 'en' ? 'Contact Me' : 'Contáctame',
    href: `${langPath}contact`,
    attributes: {
      id: 'contact-nav',
    },
  }
  $: navItems = [blogNav, contactNav].filter(ni => ni.show)
  $: segment = isBlog ? 'blog' : isContact ? 'contact' : ''
</script>

<nav>
  <ul class=left-nav>
    <li class=skip-nav>
      <a href="{langPath}{segment}#main-content">Skip to content</a>
    </li>
    <li>
      <a id=logo href="./{langPath}">
        <span>Pablo</span>
        <span>Berganza</span>
      </a>
    </li>
    {#each navItems as navItem (navItem.key)}
      <li animate:flip={{ duration: 200 }} class=nav-item>
        <a
          {...navItem.attributes}
          href={navItem.href}
          >
          <span
            in:receive={{ key: navItem.key, delay: 400 }}
            out:send={{ key: navItem.key }}
            >
            {navItem.text}
          </span>
        </a>
      </li>
    {/each}
  </ul>
  <ul class=right-nav>
    <li>
      <a rel=prefetch href={otherLangPath} on:click={changeLang}>
        {#if lang === 'en'}
          <span>es</span>
        {:else}
          <span>en</span>
        {/if}
      </a>
    </li>
    <li>
      <IconLink href="https://github.com/pablo-abc" title="GitHub">
        <Icon icon={faGithub} />
      </IconLink>
    </li>
    <li>
      <IconLink href="https://www.instagram.com/berganzapablo/" title="Instagram">
        <Icon icon={faInstagram} />
      </IconLink>
    </li>
    <li>
      <IconLink href="https://www.linkedin.com/in/PabloABC" title="LinkedIn">
        <Icon icon={faLinkedin} />
      </IconLink>
    </li>
    <li>
      <IconLink href="https://twitter.com/Pablo_ABC" title="Twitter">
        <Icon icon={faTwitter} />
      </IconLink>
    </li>
  </ul>
</nav>

<style>
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .nav-item {
    position: relative;
    top: 0px;
    display: inline-block;
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

  .nav-item:not(:last-child) {
    margin-right: 10px;
  }

  .skip-nav {
    position: absolute;
    top: 0;
  }

  .skip-nav a {
    display: inline-block;
    color: white;
    padding: 1rem;
    font-weight: bold;
    background: var(--color-primary-0);
    border-radius: 0 0 8px 8px;
    transform: translateY(0px);
    transition: transform 0.1s;
  }

  .skip-nav a:not(:focus):not(:active) {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    transform: translateY(-100px);
  }
</style>
