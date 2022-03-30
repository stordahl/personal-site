<script context="module">
  export async function load({fetch}) {
    try {
      const res = await fetch('/writing/all.json')
      const data = await res.json()
      return {
        props: data
      }
    } catch (err) {
      console.log('500:', err)
    }
  }
</script>

<script>
  import SvelteSeo from 'svelte-seo'

  export let posts
</script>

<SvelteSeo 
  title='Jacob Stordahl'
  description='software engineer'
  openGraph={{
    title: 'Jacob Stordahl',
    description: 'software engineer',
    url: 'https://stordahl.dev',
    type: 'website',
    images: [
      {
        url: 'https://stordahl.dev/images/og.png',
        width: 850,
        height: 650,
        alt: 'Jacob Stordahl - software engineer'
      }
    ]
  }}
/>

<section>
  <div id="page-header">
    <h1>WRITING</h1>
    <img src="/images/dots.svg" alt="a decorative dot grid">
  </div>
  {#each posts as post, index}
    <a class="list-item" href="/writing/{post.slug.current}">
      <span>{index + 1}</span>
      <h2>{post.title}</h2>
    </a>
  {/each}
</section>

<style>
  #page-header {
    background-color: var(--trans-bg);
    position: relative;
    padding-bottom: 20px;
  }
  #page-header h1 {
    margin-bottom: 0;
  }
  #page-header > img {
    position: absolute;
    top: 0;
    right: -3rem;
    max-width: 300px;
    z-index: -1;
  }
  a:hover {
    text-decoration: unset;
  }
   .list-item {
    /* display: flex; */
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    position: relative;
    background-color: var(--trans-bg);
    border-top: 2px solid var(--black);
    padding: 2.5rem clamp(10px, calc(10px + 2vw), 60px);
    flex-wrap: wrap;
  }
  .list-item:hover { border-bottom: none; }
  a.list-item:hover h2 { 
    text-decoration: underline; 
    cursor: pointer;
  }
  .list-item:last-of-type { border-bottom: 2px solid var(--black); }
  .list-item > span {
    position: absolute;
    font-family: var(--heading-family);
    left: 35px;
    font-size: 120px;
    color: var(--blue);
    z-index: 0;
    opacity: 10%;
    /* line-height: 0.5; */
  }
  .list-item h2 {
    font-family: var(--copy-family);
    z-index: 1;
    color: var(--black);
    font-weight: 400;
    margin: 0;
    font-size: clamp(20px, calc(3vw + 1rem), 40px);
  }
</style>