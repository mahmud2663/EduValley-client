import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

import img1 from "../../../assets/banner/(1).jpg";
import img2 from "../../../assets/banner/(2).jpg";
import img3 from "../../../assets/banner/(16).jpg";

const Banner = () => {
  const titles = [
    "Edu_Valley",
    "Cultural Exploration",
    "Language Learning",
    
  ];

  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >
        <div className="lg:h-[800px] sm:mt-16">
          <img className="lg:h-[800px]" src={img1} alt="Banner 1" />
          <div className="overlay flex flex-col justify-center mx-auto container text-left absolute inset-0">
            <div className="p-10 rounded-lg">
              <h1 className="lg:text-6xl text-2xl font-bold">
                <span className="text-amber-500">{titles[0]}</span>
              </h1>
              <p className="lg:text-2xl text-slate-50 font-semibold lg:my-10 sm:my-5">
                Discover the beauty of language diversity and the <br /> joy of
                exploring different cultures.
              </p>
              <Link to="/blog" className="mr-4">
                <button className="bg-amber-500 hover:bg-amber-600 lg:text-xl sm:text-base text-slate-50 font-bold py-2 px-4 rounded-full border-b-4 border-gray-700">
                  Learn More
                </button>
              </Link>
              <Link to="/login">
                <button className="bg-amber-500 hover:bg-amber-600 lg:text-xl sm:text-base text-slate-50 font-bold py-2 px-4 rounded-full border-b-4 border-gray-700">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:h-[800px] relative sm:mt-16">
          <img className="lg:h-[800px]" src={img2} alt="Banner 2" />
          <div className="overlay flex flex-col justify-center mx-auto container text-right absolute inset-0">
            <div className="p-10 rounded-lg space-y-10">
              <h1 className="lg:text-6xl text-2xl font-bold">
                <span className="text-amber-500">{titles[1]}</span>
              </h1>
              <p className="lg:text-2xl text-slate-50 font-semibold lg:my-10 sm:my-5">
                Immerse yourself in the rich tapestry of cultures through <br /> the
                study of languages.
              </p>
              <Link to="/blog" className="mr-4">
                <button className="bg-amber-500 hover:bg-amber-600 lg:text-xl sm:text-base text-slate-50 font-bold py-2 px-4 rounded-full border-b-4 border-gray-700">
                  Learn More
                </button>
              </Link>
              <Link to="/login">
                <button className="bg-amber-500 hover:bg-amber-600 lg:text-xl sm:text-base text-slate-50 font-bold py-2 px-4 rounded-full border-b-4 border-gray-700">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:h-[800px] relative sm:mt-16">
          <img className="lg:h-[800px]" src={img3} alt="Banner 3" />
          <div className="overlay flex flex-col justify-center mx-auto container text-right absolute inset-0">
            <div className="p-10 rounded-lg space-y-10">
              <h1 className="lg:text-6xl text-2xl font-bold">
                <span className="text-amber-500">{titles[2]}</span>
              </h1>
              <p className="lg:text-2xl text-slate-50 font-semibold lg:my-10 sm:my-5">
                Start your journey in the world of programming with edu_Valley. <br /> Unlock new opportunities and expand your skills.
              </p>
              <Link to="/blog" className="mr-4">
                <button className="bg-amber-500 hover:bg-amber-600 lg:text-xl sm:text-base text-slate-50 font-bold py-2 px-4 rounded-full border-b-4 border-gray-700">
                  Learn More
                </button>
              </Link>
              <Link to="/login">
                <button className="bg-amber-500 hover:bg-amber-600 lg:text-xl sm:text-base text-slate-50 font-bold py-2 px-4 rounded-full border-b-4 border-gray-700">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;




