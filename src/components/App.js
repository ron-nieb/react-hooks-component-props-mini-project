import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header blogName= "My Blog" />
      <About image="imageURL" aboutText="About text for the blog" />
      <ArticleList posts= {blogData.posts} />
    </div>
  );
}

export default App;
