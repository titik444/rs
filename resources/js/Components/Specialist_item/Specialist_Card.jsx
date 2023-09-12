import React from "react";
import imageCard from "@/images/specialist.png";
import CardItem from "@/Components/Specialist_item/CardItem";
import Footer from "../Footer";
function Specialist_Card({ specialists }) {
    return (
        <>
            {/* container Card  */}
            <div className=" flex flex-col justify-center items-center z-0">
                <div className="bg-base-color w-full h-auto mt-10">
                    {/* judul container... */}
                    <h1 className="text-lg font-bold p-2 text-center md:text-xl">
                        Specialist{" "}
                    </h1>
                    <div className="w-full h-auto p-3   z-0 md:flex md:flex-wrap md:justify-center">
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
                    </div>
                </div>

                <div className="w-full mt-5 flex md:p-3 ">
                    <button className="btn btn-sm mx-auto p-2">
                        See More ..
                    </button>
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
