import React from "react";
function DoctorCard({ photo, name, text }) {
    return (
        <>
            <div className="w-4/5 h-auto p-5 flex flex-col  items-center justify-center">
                {/* card photo */}
                <div className="avatar">
                    <div className="w-40 rounded-full">
                        <img src={photo} />
                    </div>
                </div>
                {/* name of card */}
                <h1 className="font-montserrat font-bold text-md mt-4">
                    {name}
                </h1>
                <p className="font-montserrat font-light text-sm text-center w-[240px]">
                    {text}
                </p>
                {/* text of card */}
            </div>
        </>
    );
}

export default DoctorCard;
