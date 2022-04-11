import client from '../client'

const serviceFields = `
    title,
    'slug': slug.current,
    slogan,
    'category': category->title,
    InitialContent,
    preAmble,
    PortableText,
    box,
`

export const getServices = async () => {
  const data = await client.fetch(
    `*[_type in ["service", "newService"]]{${serviceFields}}`
  )
  return data
}

export const getService = async (slug) => {
  const data = await client.fetch(
    `*[_type in ["service", "newService"] && slug.current == $slug]{${serviceFields}
        PortableText[]{...}}`,
    { slug }
  )
  return data?.[0]
}
