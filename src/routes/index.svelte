<script>
  import SvelteSeo from 'svelte-seo'
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
  <h1>Hi, I'm Jacob.</h1>
  <p>
    I'm a Software Engineer, obsessed with building tools and infrastructure that enable front-end teams to be productive. 
    Currently, I'm building radical ecommerce user experiences at <a class="out" href="http://stylitics.com">Stylitics.</a> Check out some of my open source work <a href="/work">here</a>.
    You can reach me on twitter or shoot me an email <a class="out" href="mailto:jacob@stordahl.dev">here</a>.
    <span class="strike">I'm currently available for hire.</span>
  </p>

</section>


<style>
  section {
    margin: 3rem auto;
    max-width: clamp(200px, calc(2rem + 80vw), 900px);
   }

  h1 {
    font-size: clamp(30px, calc(5vw + 1rem), 70px);
    text-align: left;
  }

  p {
    font-size: clamp(15px, calc(2vw + 1rem), 50px);
  }
</style>