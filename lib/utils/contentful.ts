import { createClient } from 'contentful'

const client = createClient({
  space: '2t9hb4tao4sq',
  accessToken: 'J7j-hpejnbL8JcXd5KdvcKv6KagvypDiYGGqkCYcl14',
})

// Retrieve the list of blog posts from Contentful
export const getBlogPosts = async () => {
  const response = await client.getEntries({
    content_type: 'blogPost',
  })

  return response.items
}

// export default getBlogPosts;
