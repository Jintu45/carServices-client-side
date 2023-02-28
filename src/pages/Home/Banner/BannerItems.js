import React from "react";

const BannerItems = ({ slide }) => {
  const { image, id, pre, next, para } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} alt="" className="w-full rounded-xl" />
      </div>

      <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-28 left-10 right-5 top-1/4">
        <h1 className="font-bold text-white text-5xl lg:text-6xl ms-6">
          Affordable <br />
          Price For Car <br />
          Servicing
        </h1>
      </div>

      <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-28 left-10 right-5 lg:w-1/2  top-2/4">
        <p className="text-white text-lg lg:text-xl">
          {para}
        </p>
      </div>

      <div className="absolute flex justify-start transform -translate-y-1/2 lg:left-28 left-10 right-5 top-2/3 lg:top-3/4">
        <button className="btn btn-warning mr-5 text-white">
          Discover More
        </button>
        <button className="btn btn-outline btn-success text-white">
          Latest Project
        </button>
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${pre}`} className="btn btn-circle mr-5 text-xl">
          ❮
        </a>
        <a
          href={`#slide${next}`}
          className="btn btn-circle bg-amber-400 text-xl text-white"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItems;
