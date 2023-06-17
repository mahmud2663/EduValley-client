import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import teacher1 from "../../../assets/teachers/1 (1).jpg";
import teacher2 from "../../../assets/teachers/1 (1).png";
import teacher3 from "../../../assets/teachers/1(6).jpg";
import teacher4 from "../../../assets/teachers/1 (7).jpg";
import teacher5 from "../../../assets/teachers/1(8).jpg";
import teacher6 from "../../../assets/teachers/1 (9).jpg";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

const Teachers = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 10,

      breakpoints: {
        // When window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // When window width is >= 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      autoplay: {
        delay: 1000, // Auto-swipe interval in milliseconds
        disableOnInteraction: false, // Continue auto-swiping even when user interacts with the swiper
      },
    });

    swiperRef.current = swiper;

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  const teachersData = [
    {
      name: "John",
      description: "John is an expert in JavaScript programming.",
      image: teacher1,
      country: "USA",
      socialMedia: {
        facebook: "https://www.facebook.com/john",
        twitter: "https://www.twitter.com/john",
        instagram: "https://www.instagram.com/john",
      },
    },
    {
      name: "Emily",
      description: "Emily is an experienced Python instructor.",
      image: teacher2,
      country: "Canada",
      socialMedia: {
        facebook: "https://www.facebook.com/emily",
        twitter: "https://www.twitter.com/emily",
        instagram: "https://www.instagram.com/emily",
      },
    },
    {
      name: "Sarah",
      description: "Sarah specializes in Java programming.",
      image: teacher3,
      country: "Australia",
      socialMedia: {
        facebook: "https://www.facebook.com/sarah",
        twitter: "https://www.twitter.com/sarah",
        instagram: "https://www.instagram.com/sarah",
      },
    },
    {
      name: "Michael",
      description: "Michael is a C++ programming expert.",
      image: teacher4,
      country: "Germany",
      socialMedia: {
        facebook: "https://www.facebook.com/michael",
        twitter: "https://www.twitter.com/michael",
        instagram: "https://www.instagram.com/michael",
      },
    },
    {
      name: "Linda",
      description: "Linda teaches web development with HTML & CSS.",
      image: teacher5,
      country: "USA",
      socialMedia: {
        facebook: "https://www.facebook.com/linda",
        twitter: "https://www.twitter.com/linda",
        instagram: "https://www.instagram.com/linda",
      },
    },
    {
      name: "Robert",
      description: "Robert is an expert in PHP programming.",
      image: teacher6,
      country: "United Kingdom",
      socialMedia: {
        facebook: "https://www.facebook.com/robert",
        twitter: "https://www.twitter.com/robert",
        instagram: "https://www.instagram.com/robert",
      },
    },
  ];

  return (
    <div className="mt-28">
      <SectionTitle
        subHeading={"Check out our talented and experienced teachers:"}
        heading={"Our Famous Teachers"}
      ></SectionTitle>
      <div className="mx-auto container space-x-16 mt-8 overflow-x-hidden">
        <div className="text-center mb-24 "></div>
        <div className="swiper-container my-24">
          <div className="swiper-wrapper">
            {teachersData.map((teacher, index) => (
              <div key={index} className="swiper-slide">
                <div className="card bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src={teacher.image}
                      alt={`Teacher ${index + 1}`}
                      className="h-64 object-cover"
                    />
                  </figure>
                  <div className="card-body text-center space-y-3">
                    <h2 className="text-3xl text-amber-500 font-bold">
                      {teacher.name}
                    </h2>
                    <p className=" text-lg">{teacher.description}</p>
                    <p className="text-sm text-gray-500">
                      Country: {teacher.country}
                    </p>
                    <div className="social-icons flex justify-around bg-gray-300 rounded-lg p-5 m-0">
                      <a
                        href={teacher.socialMedia.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebook />
                      </a>
                      <a
                        href={teacher.socialMedia.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTwitter />
                      </a>
                      <a
                        href={teacher.socialMedia.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;

