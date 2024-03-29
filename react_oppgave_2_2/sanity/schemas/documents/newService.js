export default {
  name: "newService",
  title: "New Service",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the service",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "The unique and last part of the url",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "slogan",
      title: "Slogan",
      type: "string",
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
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
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
    },
  ],
  preview: {
    select: {
      title: "title",
      created: "_createdAt",
    },
    prepare({ title, created }) {
      return {
        title,
        subtitle: `Dato: ${created ? new Date(created).toDateString() : null}`,
      };
    },
  },
};
