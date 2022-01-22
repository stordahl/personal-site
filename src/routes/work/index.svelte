<script context=module>
   export async function load({fetch}) {
    try {
      const res = await fetch('/work/all.json')
      const data = await res.json()
      return {
        props: {
          data
        }
      }
    } catch (err) {
      console.log('500:', err)
    }
  }
</script>
<script>
  import SvelteSeo from 'svelte-seo'
  import ListItem from '$lib/ListItem.svelte'
  export let data

  $:({ projects, oss } = data);
</script>

<SvelteSeo 
  title='Jacob Stordahl'
  description='designer & developer'
  openGraph={{
    title: 'Jacob Stordahl',
    description: 'designer & developer',
    url: 'https://stordahl.dev',
    type: 'website',
    images: [
      {
        url: 'https://stordahl.dev/images/og.png',
        width: 850,
        height: 650,
        alt: 'Jacob Stordahl - designer & developer'
      }
    ]
  }}
/>

<section>
  <div id="page-header">
    <h1>WORK</h1>
    <div class="faded faded-all">
      <p>These projects have been chosen to convey my strengths in UI/UX design, development, and graphic design.</p>
    </div>
    <img src="/images/dots.svg" alt="a decorative dot grid">
  </div>
  <div>
    {#each projects as {name, slug, type, year}, index}
        <ListItem 
          title={name} 
          num={index + 1} 
          path={`/work/${slug.current}`}
        >
          <div class="meta">
            <span>{type}</span>
            <span>{year}</span>
          </div>
        </ListItem>
    {/each}
  </div>
  <div id="section-header">
    <div class="faded faded-all">
      <p>These projects have been chosen to showcase some of the work I've contributed to the open source community.</p>
    </div>
  </div>
  <div>
    {#each oss as {title, year, url}, index}
      <ListItem 
          {title} 
          num={index + 1} 
          path={url}
        />
    {/each}
  </div>
</section>

<style>
  .meta{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 20px;
  }
  #page-header {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr;
    gap: 1rem;
    position: relative;
    background-color: var(--trans-bg);
  }

  p {
    font-size: clamp(14px, calc(.5vw + 1rem), 18px);
    max-width: 600px;
    background-color: var(--trans-bg);
    color: var(--black);
    margin-bottom: 15px;
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

  #section-header {
    margin: 3rem auto;
  }
</style>