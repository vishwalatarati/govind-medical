import Category1 from "../images/category1.jpg";
import Category2 from "../images/category2.jpg";
import Category3 from "../images/category3.jpg";
import Category4 from "../images/category4.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function CategorySlider() {
  return (
    <div className="category_slider">
      <h1>Categories</h1>
      <div className="category_container">
        <div className="category" data-aos="fade-in" data-aos-duration="1000">
          <div className="category_image">
            <img src={Category1} alt="category_image" />
          </div>
          <p className="category_name">Medicine</p>
        </div>

        <div className="category" data-aos="fade-in" data-aos-duration="1000">
          <div className="category_image">
            <img src={Category2} alt="category_image" />
          </div>
          <p className="category_name">Tablets</p>
        </div>

        <div className="category" data-aos="fade-in" data-aos-duration="1000">
          <div className="category_image">
            <img src={Category3} alt="category_image" />
          </div>
          <p className="category_name">Capsules</p>
        </div>

        <div className="category" data-aos="fade-in" data-aos-duration="1000">
          <div className="category_image">
            <img src={Category4} alt="category_image" />
          </div>
          <p className="category_name">Syrups</p>
        </div>
      </div>
    </div>
  );
}
