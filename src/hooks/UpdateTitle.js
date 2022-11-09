import { useEffect, useState } from "react";

export function useTitle(initialTitle) {
  const [title, setTitle] = useState(initialTitle);

  const updateTitle = () => {
    
    const htmlTitle = document.querySelector("title");
    if (title === "Home") {
      htmlTitle.innerText = "KMG's PortFolio";
    } else {
      htmlTitle.innerText = `${title}-KMG's PortFolio`;
    }
  };

  useEffect(updateTitle, [title]);
  return setTitle;
}
