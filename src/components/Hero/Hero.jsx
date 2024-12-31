import React from "react";
import RocketSvg from "../../assets/rocket.svg";
import CloudSvg1 from "../../assets/clouds-1.svg";
import CloudSvg2 from "../../assets/clouds-2.svg";
import PlanetSvg from "../../assets/planet.svg";

const CloudBG = {
  backgroundImage: `url(${CloudSvg1}),url(${CloudSvg2})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  backgroundSize: "contain",
};

const Hero = () => {
  return (
    <>
      <div
        style={CloudBG}
        className="bg-primary text-white min-h-[630px]
      flex justify-center items-center
      overflow-hidden"
      >
        <div
          className="container grid
        md:grid-cols-2 place-items-center"
        >
          {/* Text info Section */}
          <div
            className="text-center md:text-left
          space-y-6 py-10 md:py-0 relative z-10"
          >
            <p data-aos="fade-up">EXPLORE THE UNIVERSE</p>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-4xl md:text-6xl
            font-bold"
            >
              Start Exploring <br /> All over the <span>Space</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="500" data-aos-offset="0">
              Start to Explore in the Space, Navigate and discover all the
              wonders of the universe
            </p>
            <div data-aos="fade-up" data-aos-delay="700" data-aos-offset="0">
              <button
                className="bg-secondary text-white
                rounded-full px-8 py-2 shadow-custom-inset
                hover:scale-105 transition duration-200 "
              >
                Get Started
              </button>
            </div>
          </div>
          {/* Animated Rocket Section */}
          <div>
            {/* Animated Rocket Image */}
            <div
              data-aos="fade-up-right"
              data-aos-delay="700"
              data-aos-duration="1000"
            >
              <img
                src={RocketSvg}
                alt=""
                className="max-h-[500px] relative animate-rocket"
              />
            </div>

            {/* Planets Image */}
            <img
              src={PlanetSvg}
              alt=""
              className="absolute top-40 -right-0
              opacity-90 h-[70px] z-10"
              data-aos="fade"
              data-aos-offset="0"
              data-aos-ease="ease-out-quad"
              data-aos-delay="600"
            />

            <img
              src={PlanetSvg}
              alt=""
              className="absolute top-60 left-50
            opacity-90 h-[150px]"
              data-aos="fade"
              data-aos-offset="0"
              data-aos-ease="ease-out-quad"
              data-aos-delay="900"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
