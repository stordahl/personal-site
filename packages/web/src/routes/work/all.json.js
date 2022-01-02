import { client } from '$lib/sanityClient'
import { getProjectsQuery } from '$lib/queries';

/**
* @type {import('@sveltejs/kit').RequestHandler}
*/
export const get = async () => {

  const res = await client.fetch(getProjectsQuery);

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