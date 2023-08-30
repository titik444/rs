import React from "react";
import CardInfo from "../Components/CardInfo";
import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.png";
function WhyChooseUs() {
    return (
        <>
            <div className="container h-auto p-2 flex flex-col justify-center items-center">
                <h1 className="text-lg font-bold p-2">Why Choose Us</h1>
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
