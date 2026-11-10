import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Opens every new page at the top instead of keeping the previous scroll position.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
