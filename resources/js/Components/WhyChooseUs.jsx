import React from "react";
import CardInfo from "./items_LandingPAge/CardInfo";
import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.png";
function WhyChooseUs() {
    return (
        <>
            <h1 className="text-lg text-center font-bold p-2 md:mt-2 md:text-xl">
                Why Choose Us
            </h1>
            <div className=" h-auto p-2 flex flex-col justify-center items-center md:flex-row md:p-2 md:justify-evenly ">
                {/*  element card why chooose us  */}
                <CardInfo
                    logo={logo1}
                    title={"Satisfying health services"}
                    text="Lorem Ipsum is simply dummy
                    text of the printing and typesettin
                    g industry. "
                />
                <CardInfo
                    logo={logo2}
                    title={"Professional health services"}
                    text="Lorem Ipsum is simply dummy
                    text of the printing and typesettin
                    g industry. "
                />
                <CardInfo
                    logo={logo3}
                    title={"Find us wherever you are"}
                    text="Lorem Ipsum is simply dummy
                    text of the printing and typesettin
                    g industry. "
                />
            </div>
        </>
    );
}

export default WhyChooseUs;
