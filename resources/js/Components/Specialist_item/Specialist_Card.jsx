import React from "react";
import imageCard from "@/images/specialist.png";
import CardItem from "@/Components/Specialist_item/CardItem";
import image1 from "@/images/Specialist.png";
import image2 from "@/images/Specialist2.png";
import image3 from "@/images/specialist3.png";
import image4 from "@/images/specialist4.png";
import Footer from "../Footer";
function Specialist_Card() {
    return (
        <>
            {/* container Card  */}
            <div className="container flex flex-col justify-center items-center z-0">
                {/* judul container... */}
                <h1 className="text-lg font-bold p-2 text-center">
                    Specialist{" "}
                </h1>
                <div className="w-full h-auto bg-base-color p-2 z-0">
                    {/* item card specialist.....*/}
                    <CardItem
                        SpecialistName={"General Practitioner"}
                        text={
                            "Lorem Ipsum is simply dummy text of thtypesettin"
                        }
                        image={image1}
                    />
                    <CardItem
                        SpecialistName={"Radiologist"}
                        text={
                            "Lorem Ipsum is simply dummy text of thtypesettin"
                        }
                        image={image2}
                    />
                    <CardItem
                        SpecialistName={"Cardiologist"}
                        text={
                            "Lorem Ipsum is simply dummy text of thtypesettin"
                        }
                        image={image3}
                    />
                    <CardItem
                        SpecialistName={"Dentist"}
                        text={
                            "Lorem Ipsum is simply dummy text of thtypesettin"
                        }
                        image={image4}
                    />
                    {/* akhir item card specialist .....*/}
                    {/* see more  */}
                    <div className="w-full mt-2 flex ">
                        <button className="btn btn-sm mx-auto">
                            See More ..
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer..... */}
            <Footer />
            {/* akhir Footer..... */}

            {/* akhir container Card */}
        </>
    );
}

export default Specialist_Card;
