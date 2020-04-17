<script>
  import Icon from 'fa-svelte';
  import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
  import IconLink from './IconLink.svelte';
</script>

<nav>
  <div class=left-nav>
    <a id=logo href="./">
      <span>Pablo</span>
      <span>Berganza</span>
    </a>
    <div class=nav-items>
      <a id=blog-nav class=nav-item href="blog">
        Blog
      </a>
      |
      <a id=contact-nav class=nav-item href="contact">
        Contact Me
      </a>
    </div>
  </div>
  <div class=right-nav>
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
</style>
