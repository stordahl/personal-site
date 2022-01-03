<script context=module>
   export async function load({fetch, page}) {
    try {
      const res = await fetch(`/work/${page.params.slug}.json`)
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
  import ListItem from '$lib/ListItem.svelte'
  import Code from '$lib/Code.svelte'
  import Link from '$lib/Link.svelte'
  import ImageBlock from '$lib/ImageBlock.svelte'
  import PortableText from '@portabletext/svelte'
  
  export let data
</script>

<section>
  <div id="page-header">
    <a href={data.url} target="_blank">
      Visit Site
      <img src="/images/arrow.svg" alt="a right arrow"/>
    </a>
    <h1>{data.name}</h1>
    <img src="/images/dots.svg" alt="a decorative dot grid">
  </div>
  {#if data.background}
    <ListItem title={'Background'} num={1} style={'align-items: flex-start; flex-wrap: wrap;'}>
      <div class="pt-inner">
      <PortableText blocks={data.background}/>
      </div>
    </ListItem>
  {/if}
  {#if data.design}
    <ListItem title={'Design'} num={2} style={'align-items: flex-start; flex-wrap: wrap;'}>
      <div class="pt-inner">
        <PortableText blocks={data.design}/>
      </div>
    </ListItem>
  {/if}
  {#if data.tech}
    <ListItem title={'Tech'} num={3} style={'align-items: flex-start; flex-wrap: wrap;'}>
      <div class="pt-inner">
        <PortableText blocks={data.tech}/>
      </div>
    </ListItem>
  {/if}
  {#if data.postmortem}
    <ListItem title={'Postmortem'} num={4} style={'align-items: flex-start; flex-wrap: wrap;'}>
      <div class="pt-inner">
        <PortableText 
          blocks={data.postmortem}
          serializers={{
            types: {
              code: Code,
              image: ImageBlock
            },
            marks: {
              link: Link
            }
          }}
        />
      </div>
    </ListItem>
  {/if}
  <ListItem title="Metadata" num="">
    <ul>
      <li>live url: <a href={data.url} target="_blank">{data.url}</a></li>
      <li>provided: {data.type}</li>
      <li>built in: {data.year}</li>
    </ul>
  </ListItem>
  
</section>

<style>
  .pt-inner {
    max-width: 500px;
    font-size: 1.2rem;
  }
  #page-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 20px;
    position: relative;
    background-color: var(--trans-bg);
  }

  #page-header > img {
    position: absolute;
    top: 0;
    right: -3rem;
    max-width: 300px;
    z-index: -1;
  }

  #page-header > a {
    color: var(--black);
    font-size: clamp(1rem, calc(1vw + 1rem), 1.5rem);
    font-style: italic;
    line-height: 1;
    display: flex;
    align-items: center;
    gap:10px;
  }
  #page-header > a img {
    width: clamp(15px, calc(1vw + 10px), 20px);
  }

  h1 {
    max-width: max-content;
  }

</style>