<script context="module">
  export async function load({params, fetch}) {
    try {
      const url = `/writing/${params.slug}.json`
      const res = await fetch(url)
      const data = await res.json()

      if (data?.post) {
        return {
          props: data
        }
      }
    } catch (err) {
      return {
        status: 500,
        error: new Error(`Could not load url`)
      }
    }
  }
</script>

<script>
  import PortableText from '@portabletext/svelte'
  import Code from '$lib/Code.svelte'
  import Link from '$lib/Link.svelte'
  import ImageBlock from '$lib/ImageBlock.svelte'
  import SvelteSeo from 'svelte-seo'

  export let post

  $: published = new Date(post.publishedAt).toLocaleDateString('en', {
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  })
</script>

<SvelteSeo 
  title={post.title}
  description={post.body[0].children[0].text.slice(0,100)}
  openGraph={{
    title: post.title,
    description: post.body[0].children[0].text.slice(0,100),
    url: `https://stordahl.dev/writing/${post.slug.current}`,
    type: 'article',
    article: {
      publishedTime: published,
      authors: [
        "https://twitter.com/stordahl_"
      ]
    },
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

<h1>{post.title}</h1>
<p>
  Published {published}
</p>

<hr />

<article>
  <PortableText
    blocks={post.body}
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

</article>
<hr/>

<style>
  p {
    text-align: right;
    margin: 1rem 0;
  }
  article {
    width: clamp(200px, calc(700px + 5vw), 1000px);
    margin: 2rem auto;
  }
</style>