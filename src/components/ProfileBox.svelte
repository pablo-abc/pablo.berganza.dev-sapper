<script>
  import { lazy } from '../helpers.js';
  export let welcome;
</script>

<div id=profile-box>
  <img
    id=profile-pic
    src=img/profile-pic-placeholder.jpeg
    alt="Profile picture"
    use:lazy={{ src: 'img/profile-pic-400.jpeg' }}
    >
  <h3 id=profile-bubble>
    {welcome}
  </h3>
</div>

<style>
  #profile-pic {
      object-fit: cover;
      width: 216px;
      height: 216px;
      border-radius: 50%;
      border: 4px solid var(--color-primary-0);
  }

  #profile-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 24px 0;

  }

  #profile-bubble {
      color: white;
      background-color: var(--color-primary-0);
      margin: 24px 20px;
      padding: 24px;
      padding-top: 28px;
      border-radius: 50px;
      line-height: 1;
      text-align: center;
  }

  @media only screen and (min-width: 600px) {
      #profile-box {
          flex-direction: row;
          justify-content: center;
      }
  }
</style>
