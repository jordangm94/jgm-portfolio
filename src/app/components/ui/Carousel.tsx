"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Photo1 from "../../../../public/jgm-1.jpg";
import Photo2 from "../../../../public/jgm-2.jpg";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}>
      <Slider {...settings}>
        <div>
          <Image
            src={Photo1} // Change to actual image path
            alt="Photo 1"
            width={500}
            height={700}
            style={{ borderRadius: 10 }}
          />
        </div>
        <div>
          <Image
            src={Photo2} // Change to actual image path
            alt="Photo 1"
            width={500}
            height={700}
            style={{ borderRadius: 10 }}
          />
        </div>
      </Slider>
    </div>
  );
}
