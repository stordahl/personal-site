<script>
  import { page } from '$app/stores'
  import './base.css'
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'

  $:($page)
</script>

{#if $page.path !== '/'}
  <div id="dots">
    <img src="/images/dots.svg" alt="A decorative dot grid">
  </div>
  <Header title={'Jacob Stordahl'} />
{/if}
  <main>
    <slot />
  </main>
<Footer />

<style>
  #dots {
    display: none;
  }
  main {
    padding: 1rem;
    margin: auto;
    /* width: clamp(100px, 75vw, 1220px); */
    width: clamp(100px, calc(80vw + 5px), 1220px);
  }
</style>
