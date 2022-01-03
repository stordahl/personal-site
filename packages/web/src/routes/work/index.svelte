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
  import ListItem from '$lib/ListItem.svelte'
  export let data
</script>

<section>
  <div id="page-header">
    <h1>WORK</h1>
    <div class="faded faded-all">
      <p>These projects have been chosen to convey my strengths in UI/UX design, development, and graphic design.</p>
    </div>
    <img src="/images/dots.svg" alt="a decorative dot grid">
  </div>
  <div>
    {#each data as {name, slug, type, year}, index}
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
    grid-template-rows: 1fr 1fr;
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

  #page-header > img {
    position: absolute;
    top: 0;
    right: -3rem;
    max-width: 300px;
    z-index: -1;
  }

</style>