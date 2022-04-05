export default {
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'The title of the service',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'The unique and last part of the url',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'slogan',
            title: 'Slogan',
            type: 'string',
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{type: 'category'}],
        },
        {
            name: 'preAmble',
            title: 'Preamble',
            type: 'string',
            description: 'Preface/introduction',
        },
        {
            name: 'InitialContent',
            title: 'Initial Content',
            type: 'InitialContent',
        },
        {
            name: 'PortableText',
            title: 'Text',
            type: 'PortableText'
        },
        {
            name: 'box',
            title: 'Box',
            type: 'string'
        },
    ],

    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
            category: 'category.title',
        },
        prepare(selection) {
            const { title, category } = selection
            return {
                title,
                subtitle: `Category: ${category}`,
                media: selection.media,
            };
        },
    },
}
