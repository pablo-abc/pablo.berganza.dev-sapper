<script>
  export let href;
  export let title;
</script>

<a
  class="nav-item sm"
  {href}
  {title}
  aria-label={title}
  target="_blank"
  rel="noopener noreferrer"
  >
  <slot></slot>
</a>

<style>
  a {
      font-size: 1.2rem;
  }

  .sm {
      display: none;
  }

  @media only screen and (min-width: 330px) {
      .sm {
          display: inline;
      }
  }
</style>
