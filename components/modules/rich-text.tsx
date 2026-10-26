import React from "react";

/**
 * Splits text containing an inline numbered list ("Intro: 1. Foo. 2. Bar.")
 * into its intro and items. Returns null unless the numbers run 1, 2, 3…
 * in order, so stray figures like "C.R.S. 24-34-502." are never split.
 */
function splitNumberedList(text: string): { intro: string; items: string[] } | null {
  const [intro, ...rest] = text.split(/(?:^|\s+)(\d+)\.\s+(?=[A-Z])/);
  if (rest.length < 4) return null;

  const items: string[] = [];
  for (let i = 0; i < rest.length; i += 2) {
    if (Number(rest[i]) !== items.length + 1) return null;
    items.push(rest[i + 1].trim());
  }
  return { intro: intro.trim(), items };
}

/** Renders a content string as a paragraph, or as an intro plus an ordered list when it contains "1. … 2. …". */
export function RichText({ text }: { text: string }) {
  const list = splitNumberedList(text);
  if (!list) return <p>{text}</p>;

  return (
    <>
      {list.intro && <p>{list.intro}</p>}
      <ol className="list-decimal pl-6 space-y-2 marker:font-bold marker:text-[#347C78]">
        {list.items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ol>
    </>
  );
}
