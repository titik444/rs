import React from "react";
import imageCard from "@/images/specialist.png";
import CardItem from "@/Components/Specialist_item/CardItem";
import Footer from "../Footer";
function Specialist_Card({ specialists }) {
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
                    {specialists.map((specialist) => (
                        <CardItem
                            key={specialist.id}
                            SpecialistName={specialist.name}
                            text={specialist.description}
                            image={`/images/specialist${specialist.id}.png`}
                            link={`/schedule/${specialist.id}`}
                        />
                    ))}
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
