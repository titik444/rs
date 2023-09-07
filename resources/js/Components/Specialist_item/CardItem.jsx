import React from "react";
import imageCard from "@/images/specialist.png";
function Specialist_Card({ SpecialistName, text, image }) {
    return (
        <>
            {/* container Card  */}
            <div className="container  flex flex-col justify-center z-0 static items-center p-2 ">
                <div className="card w-80  bg-base-100 shadow-xl image-full hover:scale-105 hover:-translate-y-1 duration-300">
                    <figure>
                        <img src={image} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{SpecialistName}</h2>
                        <p>{text}</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">Periksa</button>
                        </div>
                    </div>
                </div>
                {/* akhir item card specialist .....*/}
            </div>

            {/* akhir container Card */}
        </>
    );
}

export default Specialist_Card;
