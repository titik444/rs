import React from "react";

function Form_Guess() {
    return (
        <>
            <div className="container bg-base-color w-full h-auto p-5 mt-5">
                <h1 className="text-lg font-bold p-2 text-center mb-3">
                    Feedback Form
                </h1>
                <form action="">
                    {/* input your name ...... */}
                    <input
                        type="text"
                        placeholder="Your name ......"
                        className="input input-ghost bg-white w-full h-10"
                    />
                    {/* input your email ...... */}
                    <input
                        type="email"
                        placeholder="Your Email ......"
                        className="input input-ghost bg-white w-full h-10 mt-3"
                    />
                    {/* input chategory comment */}
                    <select className="select select-ghost bg-white w-full h-10 mt-3">
                        <option disabled selected>
                            Choose Category
                        </option>
                        <option>Service</option>
                        <option>proficiency</option>
                        <option>cleanliness</option>
                    </select>
                    {/* give Rating */}
                    <div className="flex justify-evenly mt-2">
                        <h1 className="font-thin italic text-sm font-montserrat mt-2">
                            Give us Rating :
                        </h1>
                        <div className="rating rating-md mt-1 ">
                            <input
                                type="radio"
                                name="rating-7"
                                className="mask mask-star-2 bg-orange-400"
                            />
                            <input
                                type="radio"
                                name="rating-7"
                                className="mask mask-star-2 bg-orange-400"
                                checked
                            />
                            <input
                                type="radio"
                                name="rating-7"
                                className="mask mask-star-2 bg-orange-400"
                            />
                            <input
                                type="radio"
                                name="rating-7"
                                className="mask mask-star-2 bg-orange-400"
                            />
                            <input
                                type="radio"
                                name="rating-7"
                                className="mask mask-star-2 bg-orange-400"
                            />
                        </div>
                    </div>
                    {/* give the Comment  */}
                    {/* lg */}
                    <textarea
                        placeholder="Bio"
                        className="textarea textarea-bordered textarea-lg w-full h-40 mt-3 "
                    ></textarea>
                    {/* button submit  */}
                    <div className="w-full  b mt-5 flex ">
                        <input
                            type="submit"
                            value="Submit"
                            className="btn mx-auto text-white bg-[#1279FF]"
                        />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Form_Guess;
