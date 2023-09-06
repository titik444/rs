import React from "react";
import imageCard from "@/images/specialist.png";
import CardItem from "@/Components/DasbordUser_item/CardItem";
import image1 from "@/images/specialist.png";
import image2 from "@/images/specialist 2.png";
function Specialist_Card() {
    return (
        <>
            {/* container Card  */}
            <div className="container flex flex-col justify-center items-center">
                {/* judul container... */}
                <h1 className="text-lg font-bold p-2 text-center">About Us</h1>
                {/* item card specialist.....*/}
                <CardItem
                    SpecialistName={"General Practitioner"}
                    text={"Lorem Ipsum is simply dummy text of thtypesettin"}
                    image={image1}
                />
                <CardItem
                    SpecialistName={"Radiologist"}
                    text={"Lorem Ipsum is simply dummy text of thtypesettin"}
                    image={image2}
                />
                <CardItem
                    SpecialistName={"Cardiologist"}
                    text={"Lorem Ipsum is simply dummy text of thtypesettin"}
                />
                {/* akhir item card specialist .....*/}
            </div>

            {/* akhir container Card */}
        </>
    );
}

export default Specialist_Card;
