import client from '../client'

export const newServices = async (PortableText) => {
  const { title, slug, slogan, preAmble, box } = PortableText

  try {
    await client.create({
      _type: 'newService',
      title,
      slug,
      slogan,
      preAmble,
      box,
    })
  } catch (error) {
    throw new Error(error)
  }
}
