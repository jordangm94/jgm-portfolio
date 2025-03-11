"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Photo1 from "../../../../public/jgm-1.jpg";
import Photo2 from "../../../../public/jgm-2.jpg";
import Photo3 from "../../../../public/jgm-3.jpg";
import Photo4 from "../../../../public/jgm-4.jpg";
import Photo5 from "../../../../public/jgm-5.jpg";

import { Box } from "@mui/material";

const arrayOfCarouselPhotos = [Photo1, Photo2, Photo3, Photo4, Photo5];

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box
      sx={{
        width: { xs: 300, md: 500 },
        height: { xs: 400, md: 666 },
      }}
    >
      <Slider {...settings}>
        {arrayOfCarouselPhotos.map((photo, index) => {
          return (
            <Box
              key={index}
              sx={{
                width: { xs: 300, md: 500 },
                height: { xs: 400, md: 666 },
                position: "relative",
              }}
            >
              <Image
                src={photo}
                alt={`Photo ${index}`}
                layout="fill"
                style={{ objectFit: "cover" }}
              />
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
}
