import React from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
import "./Banner.css";
import BannerItems from "./BannerItems";

const bannerData = [
  {
    image: img1,
    pre: 6,
    id: 1,
    next: 2,
    para: 'There are many variations of passages of available, but the majority have suffered alteration in some form'
  },
  {
    image: img2,
    pre: 1,
    id: 2,
    next: 3,
    para: 'There are many variations of passages of available, but the majority have suffered alteration in some form'
  },
  {
    image: img3,
    pre: 2,
    id: 3,
    next: 4,
    para: 'There are many variations of passages of available, but the majority have suffered alteration in some form'
  },
  {
    image: img4,
    pre: 3,
    id: 4,
    next: 5,
    para: 'There are many variations of passages of available, but the majority have suffered alteration in some form'
  },
  {
    image: img5,
    pre: 4,
    id: 5,
    next: 6,
    para: 'There are many variations of passages of available, but the majority have suffered alteration in some form'
  },
  {
    image: img6,
    pre: 5,
    id: 6,
    next: 1,
    para: 'There are many variations of passages of available, but the majority have suffered alteration in some form'
  },
];

const Banner = () => {
  return (
    <div className="carousel w-full py-10">
      {bannerData.map((slide) => (
        <BannerItems key={slide.id} slide={slide}></BannerItems>
      ))}
    </div>
  );
};

export default Banner;
