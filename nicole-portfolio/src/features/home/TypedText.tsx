import { useTypewriter } from "../../hooks/useTypewriter";

export function TypedText({ words }: { words: readonly string[] }) {
  const text = useTypewriter(words);

  return (
    <>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden="true">
        {text}
        <span className="ml-0.5 inline-block h-5 w-0.5 translate-y-1 animate-caret bg-accent" />
      </span>
    </>
  );
}
