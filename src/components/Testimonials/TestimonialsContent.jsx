import { images } from '../../constants';

const TestimonialsContent = () => {
  return (
    <div className="testimonials-content">
      <div className="testimonials-cards">
      <div className="testimonials-card">
        <div className="user-img">
          <img src={images?.user1} alt="user-img" />
        </div>
        <div className="user-opinion">
          <div className="content">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ipsa numquam voluptatem asperiores hic! A doloribus optio nihil animi voluptatibus reiciendis possimus eligendi deleniti consequuntur accusamus?
            </p>
            <h3>Christine Berkley</h3>
          </div>
          <div className="user-rate">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
        </div>
      </div>
      <div className="testimonials-card">
        <div className="user-img">
          <img src={images?.user2} alt="user-img" />
        </div>
        <div className="user-opinion">
          <div className="content">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ipsa numquam voluptatem asperiores hic! A doloribus optio nihil animi voluptatibus reiciendis possimus eligendi deleniti consequuntur accusamus?
            </p>
            <h3>David Byer</h3>
          </div>
          <div className="user-rate">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
        </div>
      </div>
      <div className="testimonials-card">
        <div className="user-img">
          <img src={images?.user1} alt="user-img" />
        </div>
        <div className="user-opinion">
          <div className="content">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ipsa numquam voluptatem asperiores hic! A doloribus optio nihil animi voluptatibus reiciendis possimus eligendi deleniti consequuntur accusamus?
            </p>
            <h3>Moaaz JR.</h3>
          </div>
          <div className="user-rate">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
        </div>
      </div>
      <div className="testimonials-card">
        <div className="user-img">
          <img src={images?.user2} alt="user-img" />
        </div>
        <div className="user-opinion">
          <div className="content">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ipsa numquam voluptatem asperiores hic! A doloribus optio nihil animi voluptatibus reiciendis possimus eligendi deleniti consequuntur accusamus?
            </p>
            <h3>Mohamed El-Behery</h3>
          </div>
          <div className="user-rate">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default TestimonialsContent