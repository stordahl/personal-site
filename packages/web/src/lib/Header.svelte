<script context="module">
  import {page} from '$app/stores'
</script>

<script>
  export let title = 'My Blog'

  let path
  $: ({path} = $page);
</script>

<header>
  <span>{title.toUpperCase()}</span>
  <nav>
    <ul>
      <li><a sveltekit:prefetch href="/">home</a></li>
      <li><a sveltekit:prefetch href='/work'>work</a></li>
      <li><a sveltekit:prefetch href='/writing'>writing</a></li>
    </ul>
  </nav>
</header>

<style>
  span {
    font-size: clamp(1.1rem, calc(1vw + 1rem), 1.35rem);
    font-family: var(--heading-family);
    color: var(--blue);
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: clamp(.5rem, 2vw, 30px);
  }
  a {
    text-decoration: none;
    display: block;
    font-size: clamp(1rem, calc(.3rem + 1vw), 1.2rem);
    font-family: var(--heading-family)
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: clamp(12px, 3vw, 30px) clamp(1.2rem, 3vw, 150px);
  }
  @media screen and (min-width: 400px) {
    header {
      flex-direction: row;
      align-items: center;
    }
  }
</style>
