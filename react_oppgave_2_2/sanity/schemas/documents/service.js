export default {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the service",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "The unique and last part of the url",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "slogan",
      title: "Slogan",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "preAmble",
      title: "Preamble",
      type: "string",
      description: "Preface/introduction",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "InitialContent",
      title: "Initial Content",
      type: "InitialContent",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "PortableText",
      title: "Text",
      type: "PortableText",
    },
    {
      name: "box",
      title: "Box",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
      category: "category.title",
    },
    prepare(selection) {
      const { title, category } = selection;
      return {
        title,
        subtitle: `Kategori: ${category}`,
        media: selection.media,
      };
    },
  },
};
