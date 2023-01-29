import React, { RefObject, useEffect, useRef } from "react";

type Handler = (e: MouseEvent) => void;

export function useClickOutArea<T extends HTMLElement>(
  ref: RefObject<T>,
  handler: Handler
) {
  const onClickOutArea = (e: MouseEvent) => {
    e.preventDefault();
    if (!ref.current || ref.current?.contains(e.target as HTMLElement)) return;
    else {
      handler(e);
    }
  };

  useEffect(() => {
    document.addEventListener("click", onClickOutArea);
    return () => document.removeEventListener("click", onClickOutArea);
  }, []);

  return;
}
