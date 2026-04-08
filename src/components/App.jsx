import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className= "App">
      <Header name = "My Blog"></Header>
      <About image = "images/beach.jpg"></About>
      <ArticleList posts = {blogData.posts}></ArticleList>
    </div>
  );
}

export default App;
