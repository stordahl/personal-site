import { client } from '$lib/sanityClient'
import { getSingleProjectQuery } from '$lib/queries';

/**
* @type {import('@sveltejs/kit').RequestHandler}
*/
export const get = async ({ params }) => {

  const query = getSingleProjectQuery(params.slug)
  // console.log(query)

  const res = await client.fetch(query);

  if (res) {
    return {
      status: 200,
      body: res
    }
  }

  return {
    status: 500,
    body: new Error('Internal Server Error')
  }
}