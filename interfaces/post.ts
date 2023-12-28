export type PostType = {
  metadata: { tags: string[] }
  sys: {
    space: object
    id: string
    type: string
    createdAt: string
    updatedAt: string
    environment: object
    revision: number
    contentType: object
    locale: string
  }
  fields: {
    title: string
    body: string
    slug: string
    featureImage: {
      fields: {
        file: {
          url: string
        }
      }
    }
    created: string
    author: [number]
  }
}

export type Params = {
  params: {
    slug: string
  }
}
