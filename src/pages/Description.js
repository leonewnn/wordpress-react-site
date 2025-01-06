import React, { useState, useEffect } from "react";
import "./Styles.css";

function Description() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch(
      "https://dev-sitetestpresentation.pantheonsite.io/wp-json/wp/v2/pages/24"
    )
      .then((res) => res.json())
      .then((data) => {
        setContent(data.content.rendered);
        setTitle(data.title.rendered);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <main className="page-container">
      <article>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </main>
  );
}

export default Description;
