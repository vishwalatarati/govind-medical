import Header from "../components/Header";
import SecondaryHeader from "../components/SecondaryHeader";
import FeatureSlider from "../components/FeatureSlider";
import HeroCarousel from "../components/HeroCarousel";
import CategorySlider from "../components/CategorySlider";
import ProductsOverview from "../components/ProductsOverview";
import CustomerReviews from "../components/CustomerReviews";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="home_page">
      <Header />
      <SecondaryHeader />
      <FeatureSlider />
      <HeroCarousel />
      <CategorySlider />
      <ProductsOverview />
      {/* <CustomerReviews /> */}
      <Footer />
    </div>
  );
}
