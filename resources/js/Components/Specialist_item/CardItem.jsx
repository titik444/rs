import React from "react";
import { Link } from "@inertiajs/react";
function Specialist_Card({ SpecialistName, text, image, link }) {
    return (
        <>
            {/* container Card  */}
            <div className="flex flex-col justify-center z-0 static items-center p-2 ">
                <div className="card w-80 bg-base-100 z-0 shadow-xl image-full hover:scale-105 hover:-translate-y-1 duration-300">
                    <figure>
                        <img src={image} alt={SpecialistName} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{SpecialistName}</h2>
                        <p>{text}</p>
                        <div className="card-actions justify-center">
                            <Link href={link} className="btn btn-primary">
                                Check
                            </Link>
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
