import { data } from "browserslist";
import Slider from "react-slick";

const Carousel = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    auto: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <h1>Trending Section</h1>
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <div key={item._id}>
              <img src={item.imageUrl} height="200" className="carouselImg" />
              <p style={{ textAlign: "center" }}>{item.title}</p>
            </div>
          );
        })}
      </Slider>
    </>
  );
};
export default Carousel;
