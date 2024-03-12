"use client";

import { useState, useEffect } from "react";

export function useNavBarHeight() {
  const [navBarHeight, setNavBarHeight] = useState(0);

  useEffect(() => {
    const $navBar = document.querySelector("header");
    const observer = new ResizeObserver(() => {
      if ($navBar) setNavBarHeight($navBar.scrollHeight);
    });

    if ($navBar) observer.observe($navBar);
    return () => observer.disconnect();
  }, []);

  return navBarHeight;
}
