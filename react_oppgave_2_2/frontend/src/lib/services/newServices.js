import client from '../client'

export const newServices = async (body) => {
  const { title, slug, slogan, preAmble, box } = body

  try {
    await client.create({
      _type: 'newService',
      title,
      slug: {
        _type: 'slug',
        current: slug,
      },
      slogan,
      preAmble,
      box,
    })
  } catch (error) {
    throw new Error(error)
  }
}
