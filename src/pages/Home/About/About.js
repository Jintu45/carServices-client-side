import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div>
            <div className="hero  lg:py-24 py-12">
                <div className="hero-content grid lg:grid-cols-2 grid-cols-1">
                   <div className=' relative'>
                        <img src={person} alt="" className=" rounded-lg w-5/6 shadow-2xl" />
                        <img src={parts} alt="" className="absolute w-3/5 top-32  lg:top-48 right-6 rounded-lg shadow-2xl" />
                   </div>
                    <div className='lg:mt-0 mt-20'>
                        <p className='text-xl font-bold mb-3 text-orange-700'>About Us</p>
                        <h1 className="text-3xl lg:text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                        <p className="py-6 text-xl">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                        <p className='text-xl'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="py-3 px-6 rounded-xl text-xl font-semibold text-white bg-orange-600 mt-8">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;