<script>
  import { send, receive } from '../crossfade.js'
  import { fade } from 'svelte/transition'
  import Icon from 'fa-svelte'
  import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
  import IconLink from './IconLink.svelte'
  export let contact
</script>

<section class=main>
  <header class=title>
    <h1>
      <span
        in:receive={{ key: 'contact' }}
        out:send={{ key: 'contact' }}
        >
        {contact.attributes.contactme}
      </span>
    </h1>
  </header>
  <section
    class=contact-info
    transition:fade={{ duration: 400 }}
    >
    {@html contact.html}
    <dl>
      <dt>
        {contact.attributes.socialmedia}
      </dt>
      <dd>
        <IconLink href="https://github.com/pablo-abc" title="GitHub">
          <Icon icon={faGithub} /> GitHub
        </IconLink>
      </dd>
      <dd>
        <IconLink href="https://www.instagram.com/berganzapablo/" title="Instagram">
          <Icon icon={faInstagram} /> Instagram
        </IconLink>
      </dd>
      <dd>
        <IconLink href="https://www.linkedin.com/in/PabloABC" title="LinkedIn">
          <Icon icon={faLinkedin} /> LinkedIn
        </IconLink>
      </dd>
      <dd>
        <IconLink href="https://twitter.com/Pablo_ABC" title="Twitter">
          <Icon icon={faTwitter} /> Twitter
        </IconLink>
      </dd>
      <dt>
        {contact.attributes.email}
      </dt>
      <dd>
        <a href="mailto:pablo@berganza.dev">
          <Icon icon={faEnvelope} />
          pablo@berganza.dev
        </a>
      </dd>
    </dl>
  </section>
</section>

<style>
  span {
      display: inline-block;
  }

  .contact-info {
      margin: 0 10px;
      max-width: 720px;
      font-weight: 550;
  }

  @media only screen and (min-width: 740px) {
      .contact-info {
          margin: 0 auto;
      }
  }

  dl {
      line-height: 1.5;
  }

  dt {
      color: var(--color-primary-0);
      font-weight: bold;
      margin-top: 8px;
  }
</style>
