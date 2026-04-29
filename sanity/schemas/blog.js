const blog = {
  name: "post",
  title: "Insight",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "Short summary for cards and SEO",
    },
    {
      name: "intro",
      title: "Intro (Top Paragraph)",
      type: "text",
      rows: 5,
      description:
        "Opening paragraph shown below the title and above the cover image on the insight details page.",
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    },
    {
      name: "authorName",
      title: "Author name",
      type: "string",
      description: "Displayed next to the publish date on the insight page.",
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      description: "Type a tag and press Enter to save it as a chip before publishing.",
      options: { layout: "tags" },
    },
    {
      name: "faqs",
      title: "FAQs",
      type: "array",
      description:
        "Add multiple FAQs for this blog post. Drag and drop items to set their display order.",
      of: [
        {
          type: "object",
          name: "faq",
          title: "FAQ",
          fields: [
            {
              name: "question",
              title: "Question",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "answer",
              title: "Answer",
              type: "text",
              rows: 4,
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: "question",
              subtitle: "answer",
            },
          },
        },
      ],
    },
  ],
  orderings: [
    {
      title: "Newest",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", publishedAt: "publishedAt" },
    prepare({ title, publishedAt }) {
      return {
        title: title || "Untitled",
        subtitle: publishedAt ? new Date(publishedAt).toLocaleDateString() : "",
      };
    },
  },
};

export default blog;
