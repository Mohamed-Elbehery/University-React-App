import "./blogContent.scss";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogContent = () => {
  return (
    <div className="blog-container">
      <div className="blog-content">
        <div className="blog-info">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, type: "tween" }}
            className="info-img"
          >
            <img
              loading="lazy"
              src={images?.certificate}
              alt="certificate-img"
            />
          </motion.div>
          <div className="info-text">
            <h3>Our Certificate & Online Programs For 2022</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
              velit. Expedita, voluptatum, cupiditate perferendis architecto ea,
              doloribus a nihil suscipit ab nobis nesciunt vitae voluptas
              aperiam natus tenetur doloremque iusto? Sunt labore accusantium
              vel, nesciunt adipisci non culpa laudantium itaque?
            </p>
            {[0, 1, 2].map((i) => (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                molestias perspiciatis, beatae, pariatur quidem iusto cumque
                nisi voluptates quae iure culpa rerum vel a similique eveniet in
                nulla, aliquam quaerat maxime optio? Iusto dicta minus
                laboriosam veritatis eius, fugit dignissimos itaque hic enim
                molestias quisquam impedit natus, labore, architecto inventore
                nihil illo eaque eligendi. Natus esse dolorem iusto obcaecati
                beatae voluptatibus recusandae, consequuntur quisquam animi.
              </p>
            ))}
          </div>
          <form>
            <h3>Leave a Comment</h3>
            <input type="text" placeholder="Enter Your Name..." />
            <input type="email" placeholder="Enter Your Email..." />
            <textarea cols="30" rows="10" placeholder="Enter Your Comment..." />
            <Link to={"/University-React-App/blog"}>Post Comment</Link>
          </form>
        </div>
        <div className="blog-cats">
          <h2>Post Categories</h2>
          <ul>
            <li>
              <span>Business Analytics</span>
              <span>21</span>
            </li>
            <li>
              <span>Data Science</span>
              <span>28</span>
            </li>
            <li>
              <span>Machine Learning</span>
              <span>15</span>
            </li>
            <li>
              <span>Computer Science</span>
              <span>34</span>
            </li>
            <li>
              <span>Business Analytics</span>
              <span>21</span>
            </li>
            <li>
              <span>AutoCAD</span>
              <span>42</span>
            </li>
            <li>
              <span>Journalism</span>
              <span>22</span>
            </li>
            <li>
              <span>Commerce</span>
              <span>30</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
