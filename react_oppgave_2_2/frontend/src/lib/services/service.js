import client from "../client";

const serviceFields = `
    title,
    'slug': slug.current,
    slogan,
    'image': mainImage{alternativeText, caption, asset->{url}},
    'category': category->title,
    'initialContent',
    preAmble,
    text,
    box,
`

export const getServices = async () => {
    const data = await client.fetch(`*[_type == "service"]{${serviceFields}}`)
    return data
}

export const getService = async (slug) => {
    const data = await client.fetch(
        `*[_type == "service" && slug.current == $slug]{${serviceFields}}`,
        { slug }
    )
    return data?.[0]
}