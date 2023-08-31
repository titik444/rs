import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../images/slide1.png";
import slide2 from "../images/slide2.png";
import slide3 from "../images/slide3.png";
import slide4 from "../images/Slide4.png";
import slide5 from "../images/slide5.png";
import path from "../images/PATH.png";

function About_Us() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1, // Mengatur hanya 1 slide yang ditampilkan
        slidesToScroll: 1,
    };

    return (
        <>
            <div className="flex flex-col justify-center bg-base-color items-center p-3 mt-2">
                <h1 className="text-lg font-bold p-2 text-center">About Us</h1>
                <div className="w-11/12 h-autorounded-md">
                    <Slider {...settings}>
                        <div className="w-fit">
                            <img
                                src={slide1}
                                className="object-cover h-full w-full"
                                alt="slide1"
                            />
                        </div>
                        <div>
                            <img
                                src={slide2}
                                className="object-cover h-full w-full"
                                alt="slide2"
                            />
                        </div>
                        <div>
                            <img
                                src={slide3}
                                className="object-cover h-full w-full"
                                alt="slide3"
                            />
                        </div>
                        <div>
                            <img
                                src={slide4}
                                className="object-cover h-full w-full"
                                alt="slide4"
                            />
                        </div>
                        <div>
                            <img
                                src={slide5}
                                className="object-cover h-full w-full"
                                alt="slide5"
                            />
                        </div>
                    </Slider>
                </div>
                {/*  paragraf */}
                <div className="p-3">
                    {/*  text about */}
                    <p className="p-3 font-montserrat font-light">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                    </p>
                    <p className="p-3 font-montserrat font-light">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                    </p>
                </div>
                {/* fiture container */}
                <div className="card w-[350px] bg-base-color shadow-xl">
                    {/* fiture one */}
                    <div className="card w-[350px] shadow-xl bg-[#6580B5] text-white">
                        <div className="card-body text-center ">
                            <h1 className="text-3xl font-montserrat font-bold">
                                98,45%
                            </h1>
                            <h3 className="text-md font-montserrat font-bold">
                                Positive feedback
                            </h3>
                            <p className="text-sm italic font-thin">
                                from ours doctors
                            </p>
                        </div>
                    </div>
                    {/* fiture two */}
                    <div className="card w-[350px] shadow-xl bg-[#6580B5] text-white mt-2">
                        <div className="card-body text-center ">
                            <h1 className="text-3xl font-montserrat font-bold">
                                3000+
                            </h1>
                            <h3 className="text-md font-montserrat font-bold">
                                questions and answer
                            </h3>
                            <p className="text-sm italic font-thin w-32 h-10 m-auto">
                                from feedback box and social media
                            </p>
                        </div>
                    </div>
                    {/* fiture three */}
                    <div className="card w-[350px] shadow-xl bg-[#6580B5] text-white mt-2">
                        <div className="card-body text-center ">
                            <h1 className="text-3xl font-montserrat font-bold">
                                2500+
                            </h1>
                            <h3 className="text-md font-montserrat font-bold">
                                Experience Clinics
                            </h3>
                            <p className="text-sm italic font-thin">
                                High Qualified
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/*  Path to check  */}
            <div className="mt-5">
                <img src={path} className="m-auto" alt="path image" />
            </div>
        </>
    );
}

export default About_Us;
