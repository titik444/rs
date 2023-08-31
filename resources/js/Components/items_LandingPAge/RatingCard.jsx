import React from "react";

function RatingCard({ image, nama, text }) {
    return (
        <div className="card w-96 h-auto bg-scale-200 shadow-2xl mt-3">
            <div className="card-body">
                <div className="avatar flex flex-col items-center">
                    {/* image */}
                    <div className="text-neutral-content rounded-full w-16">
                        <img src={image} alt="coba" />
                    </div>
                    {/* nama */}
                    <h1 className="font-montserrat font-bold text-md mt-4">
                        {nama}
                    </h1>
                </div>
                {/* bintang */}
                <div className="rating m-auto">
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        disabled
                    />
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        disabled
                    />
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        disabled
                    />
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        disabled
                    />
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        disabled
                    />
                </div>
                <p className=" font-montserrat font-thin text-sm text-center">
                    "${text}";
                </p>
            </div>
        </div>
    );
}

export default RatingCard;
