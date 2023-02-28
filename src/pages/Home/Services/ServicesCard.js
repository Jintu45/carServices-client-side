import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServicesCard = ({service}) => {
    const {img, title, price} = service
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img className='h-64 w-full' src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className='text-2xl text-orange-600 font-semibold'>price: ${price}</p>
          <div className="card-actions justify-end">
              <Link> <FaArrowRight className='text-orange-500 font-bold mr-5 text-2xl mb-5 '></FaArrowRight> </Link>
          </div>
        </div>
      </div>
    );
};

export default ServicesCard;