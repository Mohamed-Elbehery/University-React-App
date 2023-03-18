import { PagesBackground, Footer, BlogContent, Header } from "../../components";
import "./blog.scss";

const Blog = () => {
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
