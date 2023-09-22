import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../images/slide1.png";
import slide2 from "../images/slide2.png";
import slide3 from "../images/slide3.png";
import slide4 from "../images/slide4.png";
import slide5 from "../images/slide5.png";
import path from "../images/PATH.png";

function About_Us() {
    const [isMediumScreen, setIsMediumScreen] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 768px)");

        const handleMediaQueryChange = (e) => {
            setIsMediumScreen(e.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // Inisialisasi nilai awal
        setIsMediumScreen(mediaQuery.matches);

        return () => {
            // Hapus event listener ketika komponen unmount
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, [isMediumScreen]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: isMediumScreen ? 3 : 1,
        slidesToScroll: 1,
    };

    const ItemCardInfo = ({ persen, text1, text2 }) => {
        return (
            <div className="card w-[350px] shadow-xl bg-[#6580B5] text-white mt-2 md:w-[250px] md:h-40 lg:w-[28%]">
                <div className="card-body text-center ">
                    <h1 className="text-3xl font-montserrat font-bold md:text-2xl">
                        {persen}
                    </h1>
                    <h3 className="text-md font-montserrat font-bold">
                        {text1}
                    </h3>
                    <p className="text-sm italic font-thin mt-0">{text2}</p>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="flex flex-col justify-center bg-base-color items-center p-3 mt-2">
                <h1
                    id="About_us"
                    className="text-lg font-bold p-2 text-center md:text-xl"
                >
                    About Us
                </h1>
                <div className="w-11/12 h-autorounded-md mt-2 lg:p-5">
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
                <div className="p-3 md:flex md:justify-between lg:w-[85%]">
                    {/*  text about */}
                    <p className="p-3 font-montserrat text-center md:text-left text-md italic md:font-thin">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nisi corporis sit, deserunt earum explicabo in
                        cumque at ullam consectetur voluptatibus sapiente!
                        Beatae temporibus recusandae consequuntur natus
                        accusamus dolor, distinctio explicabo cupiditate veniam
                        nam animi unde!
                    </p>
                    <p className="p-3 font-montserrat text-center md:text-left font-light md:font-thin">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit rerum adipisci provident, explicabo
                        voluptatem incidunt repellat quod perferendis iusto,
                        totam quia doloribus labore consequatur qui consequuntur
                        ea id quisquam minus.
                    </p>
                </div>
                {/* fiture container */}
                <div className="card w-[350px] md:w-full md:flex md:flex-row md:justify-evenly md:p-2 lg:mb-5 ">
                    {/* fiture one */}
                    <ItemCardInfo
                        persen={"98,45%"}
                        text1={"Positive feedback"}
                        text2={"from ours doctors"}
                    />
                    {/* fiture two */}
                    <ItemCardInfo
                        persen={"3000+"}
                        text1={"questions and answer"}
                        text2={"from feedback box and social media"}
                    />
                    {/* fiture three */}
                    <ItemCardInfo
                        persen={"2500+"}
                        text1={"Experience Clinics"}
                        text2={"High Qualified"}
                    />
                </div>
            </div>
            {/*  Path to check  */}
            <div id="Check" className="mt-5">
                <img src={path} className="m-auto" alt="path image" />
            </div>
        </>
    );
}

export default About_Us;
