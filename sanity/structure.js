export const structure = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("post").title("Insights"),
      S.documentTypeListItem("faq").title("FAQs"),
    ]);
