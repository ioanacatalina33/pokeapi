import {useEffect, useState} from "react";

/*
   Custom hooks that returns the pixels the current document has been scrolled 
   from the top of the window, vertically.
*/
export default function useYScroll() {
  const [scrollY, setScrollY] = useState(0);

  function didScroll() {
    setScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", didScroll);
    return () => {
      window.removeEventListener("scroll", didScroll);
    };
  });

  return scrollY;
}
