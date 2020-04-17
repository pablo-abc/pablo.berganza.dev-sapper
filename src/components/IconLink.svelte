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
