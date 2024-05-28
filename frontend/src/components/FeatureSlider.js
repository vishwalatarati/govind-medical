import FeatureImage1 from "../images/FeatureImage1.png";
import FeatureEducational from "../images/FeatureEducational.png";
import FeatureImage3 from "../images/FeatureImage3.png";
import FeatureImage4 from "../images/FeatureImage4.png";
import FeatureImage5 from "../images/FeatureImage5.png";
import FeatureImage6 from "../images/FeatureImage6.jpg";
import FeatureImage7 from "../images/FeatureImage7.jpg";
import FeatureImage8 from "../images/FeatureImage8.png";

export default function FeatureSlider() {
  return (
    <div className="feature_slider_container">
      <div className="feature_slider">
        <div className="feature">
          <img className="feature_image" src={FeatureImage1} />
          <p className="feature_name">Offers</p>
        </div>

        <div className="feature">
          <img className="feature_image" src={FeatureImage3} />
          <p className="feature_name">Antiseptic</p>
        </div>

        <div className="feature">
          <img className="feature_image" src={FeatureImage5} />
          <p className="feature_name">Detergent</p>
        </div>

        <div className="feature">
          <img className="feature_image" src={FeatureImage6} />
          <p className="feature_name">Cleaning</p>
        </div>

        <div className="feature">
          <img className="feature_image" src={FeatureImage8} />
          <p className="feature_name">Dental</p>
        </div>

        <div className="feature">
          <img className="feature_image" src={FeatureEducational} />
          <p className="feature_name">Educational</p>
        </div>

        <div className="feature">
          <img className="feature_image" src={FeatureImage7} />
          <p className="feature_name">Coupons</p>
        </div>
      </div>
    </div>
  );
}
