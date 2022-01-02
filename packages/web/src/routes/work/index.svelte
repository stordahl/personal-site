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
  export let data

  $:(console.log(data));

</script>

<section>
  <div id="page-header">
    <h1>WORK</h1>
    <div class="faded faded-all">
      <p>These projects have been chosen to convey my strengths in UI/UX design, development, and graphic design.</p>
    </div>
    <img src="/images/dots.svg" alt="">
  </div>
  <div>
    {#each data as {name, type, year}, index}
      <div class="list-item">
        <span>{index}</span>
        <h2>{name}</h2>
        <div>
          <span>{type}</span>
          <span>{year}</span>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  #page-header {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
    position: relative;
  }

  p {
    font-size: clamp(14px, calc(.5vw + 1rem), 18px);
    max-width: 600px;
    background-color: var(--trans-bg);
    color: var(--black);
  }

  img {
    position: absolute;
    top: 0;
    right: -3rem;
    max-width: 300px;
    z-index: -1;
  }

</style>