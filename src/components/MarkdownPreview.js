import React from "react";
import katex from "katex";

const markdownPreview = {
  inlineCode: ({ children }) => {
    if (/^\$\$(.*)\$\$/.test(children)) {
      const html = katex.renderToString(
        children.replace(/^\$\$(.*)\$\$/, "$1"),
        {
          throwOnError: false,
        }
      );
      return <code dangerouslySetInnerHTML={{ __html: html }} />;
    }
    return children;
  },
  code: ({ children, language, value }) => {
    if (language.toLocaleLowerCase() === "katex") {
      const html = katex.renderToString(value, {
        throwOnError: false,
      });
      return (
        <pre>
          <code dangerouslySetInnerHTML={{ __html: html }} />
        </pre>
      );
    }
    return children;
  },
};

export default markdownPreview;