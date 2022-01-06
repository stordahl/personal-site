<script>
  export let title
  export let num
  export let path = undefined
  export let style = '';
</script>

{#if path}
  <a class="list-item" href={path} style={style}>
    <span>{num}</span>
    <h2>{title}</h2>
    <slot />
  </a>
{:else}
  <div class="list-item" style={style}>
    <span>{num}</span>
    <h2>{title}</h2>
    <slot />
  </div>
{/if}

<style>
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
  }

  @media screen and (min-width: 900px) {
    .list-item {
      grid-template-columns: max-content minmax(200px, 400px);
    }
  }
  
</style>