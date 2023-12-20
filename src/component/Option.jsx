import { useState } from "react";

export function Option({ title, content, children }) {
  return (
    <>
      <h2 className="title">
        {title} {children}
      </h2>
      <div className={`content`}>
        <p >{content}</p>
      </div>
    </>
  );
}
