const faqs = {
  name: "faq",
  title: "Page FAQs",
  type: "document",
  fields: [
    {
      name: "page",
      title: "Page",
      type: "string",
      description: "Choose which page this FAQ group belongs to.",
      options: {
        list: [
          { title: "Home", value: "home" },
          { title: "Blogs", value: "blogs" },
          { title: "Case Studies", value: "case-studies" },
          { title: "About", value: "about" },
          { title: "Contact", value: "contact" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) =>
        Rule.required().custom(async (value, context) => {
          if (!value) return true;

          const client = context.getClient({ apiVersion: "2024-01-01" });
          const documentId = context.document?._id?.replace(/^drafts\./, "");

          const existingFaqPage = await client.fetch(
            `*[_type == "faq" && page == $page && !(_id in [$draftId, $publishedId])][0]._id`,
            {
              page: value,
              draftId: documentId ? `drafts.${documentId}` : "",
              publishedId: documentId || "",
            }
          );

          return existingFaqPage
            ? "This page already has an FAQ document. Edit the existing one instead of creating another."
            : true;
        }),
    },
    {
      name: "faqs",
      title: "FAQs",
      type: "array",
      description: "Add multiple FAQs for the selected page.",
      of: [
        {
          type: "object",
          name: "faqItem",
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
  preview: {
    select: {
      page: "page",
      faqs: "faqs",
    },
    prepare({ page, faqs }) {
      const faqCount = Array.isArray(faqs) ? faqs.length : 0;
      const pageTitleMap = {
        home: "Home",
        blogs: "Blogs",
        "case-studies": "Case Studies",
        about: "About",
        contact: "Contact",
      };

      return {
        title: pageTitleMap[page] || "Untitled FAQ Page",
        subtitle: `${faqCount} FAQ${faqCount === 1 ? "" : "s"}`,
      };
    },
  },
};

export default faqs;
