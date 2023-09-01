import React, { useState } from "react";

function Form_Guess() {
    const [selectedValue, setSelectedValue] = useState("default");

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

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
                    {/* input category comment */}
                    <select
                        className="select select-ghost bg-white w-full h-10 mt-3"
                        value={selectedValue}
                        onChange={handleSelectChange}
                    >
                        <option value="default" disabled>
                            Choose an option
                        </option>
                        <option value="option1">Service</option>
                        <option value="option2">Proficiency</option>
                        <option value="option3">Cleanliness</option>
                    </select>
                    {/* give Rating */}
                    <div className="flex justify-evenly mt-2">
                        <h1 className="font-thin italic text-sm font-montserrat mt-2">
                            Give us Rating :
                        </h1>
                        <div className="rating rating-md mt-1 ">
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <input
                                    key={rating}
                                    type="radio"
                                    name="rating"
                                    value={rating.toString()}
                                    className="mask mask-star-2 bg-orange-400"
                                    checked={
                                        selectedValue === rating.toString()
                                    }
                                    onChange={handleSelectChange}
                                />
                            ))}
                        </div>
                    </div>
                    {/* give the Comment */}
                    {/* lg */}
                    <textarea
                        placeholder="Bio"
                        className="textarea textarea-bordered textarea-lg w-full h-40 mt-3 "
                    ></textarea>
                    {/* button submit */}
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
