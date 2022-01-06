import { client } from '$lib/sanityClient'
import { getProjectsQuery, openSourceQuery } from '$lib/queries';

/**
* @type {import('@sveltejs/kit').RequestHandler}
*/
export const get = async () => {

  const projects = await client.fetch(getProjectsQuery);
  const oss = await client.fetch(openSourceQuery);

  const res = {
    projects,
    oss
  }

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