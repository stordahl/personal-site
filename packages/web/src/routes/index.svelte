<section>
  <div id="content">
    <h1>JACOB<br/>STORDAHL</h1>
    <h2>designer & developer</h2>
  </div>
  <div id="dots">
    <img src="/images/dots.svg" alt="A decorative dot grid">
  </div>
  <nav>
    <ul>
      <li><a sveltekit:prefetch href='/work'>work</a></li>
      <li><a sveltekit:prefetch href='/writing'>writing</a></li>
    </ul>
  </nav>
</section>

<style>
  section {
    display: grid;
    grid-template-columns: minmax(50px, 50%) minmax(50px, 50%);
    grid-template-rows: auto;
    grid-template-areas: "content dots" "empty nav";
    min-height: 70vh;
    max-width: 100%;
    margin-top: 5vh;
  }
  
  #content {
    grid-area: content;
    justify-items: right;
    justify-self: left;
    align-self: end;
    margin-left: auto;
    background-color: var(--trans-bg);
  }

  h1 {
    font-size: clamp(50px, calc(5vw + 1rem), 70px);
    text-align: right;
  }
  h2 {
    font-size: clamp(15px, calc(1.5vw + .5rem), 25px);
    text-align: right;
  }
  #dots {
    grid-area: dots;
    width: clamp(200px, 8vw, 300px);
    height: max-content;
    justify-self: start;
    align-self: end;
    transform: translate(-20px, 20px);
    z-index: -1;
  }
  #dots > img {
    max-width: 100%;
  }

  nav {
    grid-area: nav;
    justify-self: center;
    align-self: center;
  }
  nav > ul {
    list-style: none;
    /* font-size: clamp(1.2rem, calc(1vw + 1rem), 2rem); */
    
    
  }
  nav li a {
    font-family: var(--heading-family);
    font-weight: 900;
    font-size: clamp(1.2rem, calc(3vw + 1.5rem), 2rem);
  }
</style>