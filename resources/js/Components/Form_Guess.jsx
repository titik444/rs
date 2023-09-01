import React, { useState } from "react";

function Form_Guess() {
    const [selectedValue, setSelectedValue] = useState("");

    const handleSelectChange = (e) => {
        setSelectedValue(e.target.value);
    };

    return (
        <>
            <div className="container bg-base-color w-full h-auto p-5 mt-5">
                <h1 className="text-lg font-bold p-2 text-center mb-3">
                    Feedback Form
                </h1>
                <form action="">
                    {/* Input your name */}
                    <input
                        type="text"
                        placeholder="Your name ......"
                        className="input input-ghost bg-white w-full h-10"
                    />
                    {/* Input your email */}
                    <input
                        type="email"
                        placeholder="Your Email ......"
                        className="input input-ghost bg-white w-full h-10 mt-3"
                    />
                    {/* Input category comment */}
                    <select
                        value={selectedValue}
                        onChange={handleSelectChange}
                        className="select select-ghost bg-white w-full h-10 mt-3"
                    >
                        <option value="" disabled>
                            Choose Category
                        </option>
                        <option value="Service">Service</option>
                        <option value="Proficiency">Proficiency</option>
                        <option value="Cleanliness">Cleanliness</option>
                    </select>
                    {/* Give Rating */}
                    <div className="flex justify-evenly mt-2">
                        <h1 className="font-thin italic text-sm font-montserrat mt-2">
                            Give us Rating :
                        </h1>
                        <div className="rating rating-md mt-1 ">
                            {/* Input radio elements for rating */}
                        </div>
                    </div>
                    {/* Give the Comment */}
                    <textarea
                        placeholder="Bio"
                        className="textarea textarea-bordered textarea-lg w-full h-40 mt-3"
                    ></textarea>
                    {/* Submit button */}
                    <div className="w-full mt-5 flex">
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
