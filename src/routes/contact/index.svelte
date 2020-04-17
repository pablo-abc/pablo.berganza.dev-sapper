<script context="module">
  export async function preload() {
    const resp = await this.fetch('/contact.json');
    const data = await resp.json();
    return { contact: data };
  }
</script>

<script>
  import Icon from 'fa-svelte';
  import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
  import IconLink from '../../components/IconLink.svelte';
  export let contact;
</script>

<section class=contact>
  <header class=title>
    <h1>{contact.metadata.contactme}</h1>
  </header>
  <section>
    {@html contact.html}
    <dl>
      <dt>
        {contact.metadata.socialmedia}
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
        {contact.metadata.email}
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
  section {
      margin: 0 10px;
      max-width: 720px;
      color: #555;
      font-weight: 550;

  }

  @media only screen and (min-width: 820px) {
      section {
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
