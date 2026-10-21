import { useEffect } from "react";

export function useCleanAnchors() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const modified =
        event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
      if (event.defaultPrevented || event.button !== 0 || modified) return;

      const link = (event.target as Element).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      const target = link && document.getElementById(link.hash.slice(1));
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView();
      target.focus({ preventScroll: true });
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}
