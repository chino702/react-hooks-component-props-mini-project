import React from "react";

const Article = ({ title, date = "January 1, 1970", preview, minutes }) => {
  const renderEmojis = (count, emoji) => {
    return Array.from({ length: count }, (_, index) => (
      <span key={index}>{emoji}</span>
    ));
  };

  const renderMinutesToRead = (minutes) => {
    if (minutes > 30) {
      const coffeeCups = Math.ceil(minutes / 5);
      return (
        <span>{renderEmojis(coffeeCups, "☕️")} {minutes} min read</span>
      );
    } else {
      const bentoBoxes = Math.ceil(minutes / 10);
      return (
        <span>{renderEmojis(bentoBoxes, "🍱")} {minutes} min read</span>
      );
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <small>{renderMinutesToRead(minutes)}</small>
    </article>
  );
};

export default Article;