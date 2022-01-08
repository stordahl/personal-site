import adapter from '@sveltejs/adapter-netlify'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    target: '#svelte',
    adapter: adapter(),
    // vite: () => ({
      
    //   build: {
    //     rollupOptions: {
    //       external: [
    //         'svelte-seo',
    //         'prismjs'
    //       ]
    //     }
    //   }
    // })
  }
}

export default config
