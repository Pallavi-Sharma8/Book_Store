import React from "react";
 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import { useState, useEffect } from "react";
import axios from "axios";

const FreeBook = () => {
  const [books, setbooks] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:4000/book");
        const contents = response.data.filter(
          (data) => data.category === "Free"
        );
       
        setbooks(contents);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  ">
        <div>
          <h1 className="font-bold text-xl mb-5 ">Free Courses</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>

        <div className="slider-container mt-10 shadow-md ">
          <Slider {...settings}>
            {books.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FreeBook;
