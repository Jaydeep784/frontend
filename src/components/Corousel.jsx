import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const Carousel = () => {
  return (
    <div className="carousel w-full m-0">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-52 md:h-96" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"></div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-52 md:h-96" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"></div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-52 md:h-96" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"></div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://images.pexels.com/photos/270288/pexels-photo-270288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-52 md:h-96" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"></div>
      </div>
    </div>
  );
};

export default Carousel;
