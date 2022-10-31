import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickSlider = ({ children }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    lazyLoad: true,
    pauseOnHover: false,
    initialSlide: 0,
    cssEase: "linear",
  };

  return (
    <div>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};
export default SlickSlider;
