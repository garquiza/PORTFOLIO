import { useEffect, useState } from "react";
import { prefersReducedMotion } from "../lib/motion";

const TYPE_MS = 70;
const DELETE_MS = 35;
const PAUSE_MS = 1400;

export function useTypewriter(words: readonly string[]): string {
  const reduced = prefersReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const word = words[wordIndex] ?? "";

  useEffect(() => {
    if (reduced || words.length === 0) return;

    const atEnd = !deleting && length === word.length;
    const atStart = deleting && length === 0;
    const delay = atEnd ? PAUSE_MS : deleting ? DELETE_MS : TYPE_MS;

    const timer = setTimeout(() => {
      if (atEnd) {
        setDeleting(true);
      } else if (atStart) {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
      } else {
        setLength((current) => current + (deleting ? -1 : 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [reduced, words, word, length, deleting]);

  return reduced ? (words[0] ?? "") : word.slice(0, length);
}
