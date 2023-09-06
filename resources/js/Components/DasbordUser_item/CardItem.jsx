import React from "react";
import imageCard from "@/images/specialist.png";
function Specialist_Card({ SpecialistName, text, image }) {
    return (
        <>
            {/* container Card  */}
            <div className="container -z-10 flex flex-col justify-center items-center">
                <div className="card w-96 p-2 bg-base-100 shadow-xl image-full">
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
