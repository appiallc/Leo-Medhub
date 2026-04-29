import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

function getImageSrc(source) {
  if (!source) return null;
  if (typeof source?.asset?.url === "string" && source.asset.url) {
    return source.asset.url;
  }

  try {
    return urlFor(source).width(1200).fit("max").auto("format").url();
  } catch {
    return null;
  }
}

function renderChildren(children = []) {
  return children.map((child) => {
    if (!child?._key) return child?.text || null;

    let className = "";
    if (child.marks?.includes("strong")) className += " font-semibold text-gray-900";
    if (child.marks?.includes("em")) className += " italic";

    return (
      <span key={child._key} className={className.trim() || undefined}>
        {child.text}
      </span>
    );
  });
}

function renderBlock(block) {
  const content = renderChildren(block.children);

  if (block.listItem) {
    return null;
  }

  switch (block.style) {
    case "h2":
      return (
        <h2 key={block._key} className="mb-4 mt-10 text-2xl font-bold text-gray-900 sm:text-3xl">
          {content}
        </h2>
      );
    case "h3":
      return (
        <h3 key={block._key} className="mb-4 mt-8 text-xl font-bold text-gray-900 sm:text-2xl">
          {content}
        </h3>
      );
    case "blockquote":
      return (
        <blockquote
          key={block._key}
          className="mb-6 border-l-4 border-[#d63227] pl-4 text-lg italic leading-relaxed text-gray-700"
        >
          {content}
        </blockquote>
      );
    default:
      return (
        <p
          key={block._key}
          className="mb-5 text-base leading-relaxed text-gray-700 last:mb-0 sm:text-lg"
        >
          {content}
        </p>
      );
  }
}

function renderList(items, listType, key) {
  const ListTag = listType === "number" ? "ol" : "ul";
  const className =
    listType === "number"
      ? "mb-6 list-decimal space-y-3 pl-6 text-base leading-relaxed text-gray-700 sm:text-lg"
      : "mb-6 list-disc space-y-3 pl-6 text-base leading-relaxed text-gray-700 sm:text-lg";

  return (
    <ListTag key={key} className={className}>
      {items.map((item) => (
        <li key={item._key}>{renderChildren(item.children)}</li>
      ))}
    </ListTag>
  );
}

export default function PostBody({ value }) {
  if (!value?.length) return null;

  const output = [];

  for (let index = 0; index < value.length; index += 1) {
    const block = value[index];

    if (block?._type === "image") {
      const src = getImageSrc(block);
      if (!src) continue;

      output.push(
        <figure key={block._key || index} className="mb-8 overflow-hidden rounded-2xl border border-gray-100 bg-gray-50">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-contain"
            />
          </div>
        </figure>
      );
      continue;
    }

    if (block?._type === "block" && block.listItem) {
      const listType = block.listItem;
      const items = [block];

      while (
        index + 1 < value.length &&
        value[index + 1]?._type === "block" &&
        value[index + 1]?.listItem === listType
      ) {
        items.push(value[index + 1]);
        index += 1;
      }

      output.push(renderList(items, listType, block._key || index));
      continue;
    }

    if (block?._type === "block") {
      output.push(renderBlock(block));
    }
  }

  return <div className="max-w-none">{output}</div>;
}
