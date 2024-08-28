import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const TitlePage = (title?: string) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title ? `INVOFEST - ${title}` : "INVOFEST";
  }, [location, title]);
};
