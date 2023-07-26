import React from "react";
import Header from "./Header";
import ArticleList from "./ArticleList";
import About from "./About";
import blogData from "../data/blog";

const App = () => {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
};

export default App;