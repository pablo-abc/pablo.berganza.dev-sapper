<script>
  import Icon from 'fa-svelte';
  import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
  import IconLink from './IconLink.svelte';
</script>

<nav>
  <div class=left-nav>
    <a id=logo href="/">
      <span>Pablo</span>
      <span>Berganza</span>
    </a>
    <div class=nav-items>
      <a id=blog-nav class=nav-item href="/blog/">
        Blog
      </a>
      |
      <a id=contact-nav class=nav-item href="/contact">
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
