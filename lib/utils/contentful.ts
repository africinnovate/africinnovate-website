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

// Retrieve a blog post from Contentful

export const getBlogPost = async (DD) => {
  console.log('SSSSSSSSSSSSSSSSSSSSSSSSSSS')
  console.log(DD)

  // return await client.getEntry('The Transformative Power of Technology: Elevating Lives and Communities')
  return await client.getEntry('1zAT98ZxXR0MsbBPCk0AvR')
}
