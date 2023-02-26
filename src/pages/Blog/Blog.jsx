import { PagesBackground, Footer, BlogContent, Header } from "../../components";
import "./blog.scss";
import { useEffect } from "react";
import { handleObserver } from "../../useObserver";

const Blog = () => {
  useEffect(() => {
    handleObserver();
  }, []);
  return (
    <div>
      <Header />
      <PagesBackground title={"Our Certificate & Online Programs For 2022"} />
      <BlogContent />
      <Footer />
    </div>
  );
};

export default Blog;
