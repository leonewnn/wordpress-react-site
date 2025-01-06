import React, { useState, useEffect } from "react";
import "./Footer.css";

function Footer() {
  const [content, setContent] = useState("");

  useEffect(() => {
    // Replace XX with your WordPress footer page ID
    fetch(
      "https://dev-sitetestpresentation.pantheonsite.io/wp-json/wp/v2/pages/35"
    )
      .then((res) => res.json())
      .then((data) => {
        setContent(data.content.rendered);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

export default Footer;
