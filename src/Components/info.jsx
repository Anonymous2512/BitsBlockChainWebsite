import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Css/info.css";

const Info = () => {
  const carouselSettings = {
    responsive: {
      all: {
        breakpoint: { max: 4000, min: 0 },
        items: 1,
      },
    },
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 3000,
    keyBoardControl: true,
    transitionDuration: 500,
  };

  return (
    <div className="info-container">
      <div className="info-column">
        <h2>Previous Events</h2>
        <Carousel {...carouselSettings}>
          <div className="carousel-item">
            <img
              src="https://pbs.twimg.com/media/FVDCURPVIAAk--B?format=jpg&name=large"
              alt="Panel discussion"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://pbs.twimg.com/media/FUPBAzKaQAA-qXI?format=jpg&name=large"
              alt="Hackathon"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://pbs.twimg.com/media/FVhHeeoVIAAH0iK?format=jpg&name=large"
              alt="Random Event 3"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://pbs.twimg.com/media/FUT6AcTUcAA1hhn?format=jpg&name=large"
              alt="Random Event 3"
            />
          </div>
        </Carousel>
      </div>
      <div className="info-column">
        <h2>Upcoming Events</h2>
        <Carousel {...carouselSettings}>
        <div className="carousel-item">
            <img src="images/recruit.png" alt="bits blockchain week" />
          </div>
          <div className="carousel-item">
            <img
              src="https://hacikfy.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F6939835a26fa459abd678aeb8b868304%2Fassets%2Fcover%2F985.png&w=1440&q=100"
              alt="bits blockchain week"
            />
          </div>
          <div className="carousel-item">
            <img src="images/blockchain week.png" alt="bits blockchain week" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Info;
