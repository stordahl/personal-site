<script context="module">
  export async function load({page, fetch}) {
    try {
      const url = `/writing/${page.params.slug}.json`
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
  import SanityImage from '$lib/SanityImage.svelte'

  export let post
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>
<p>
  Published {new Date(post.publishedAt).toLocaleDateString('en', {
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  })}
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