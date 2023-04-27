//rfce -shortcut

import React from "react";

const Book = (props) => {
  //attribute, eventHandler

  //this way replaces doing -> props.img, props.title, props.author
  const { img, title, author } = props;
  const clickHandler = () => {
    alert("you clicked!");
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <p>{author}</p>
      <button type="button" onClick={clickHandler}>
        Clicke me!
      </button>
    </article>
  );
};

export default Book;
