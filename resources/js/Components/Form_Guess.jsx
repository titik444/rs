import { useForm } from "@inertiajs/react";
import { useState } from "react";

function Form_Guess({ flashMessage }) {
    const form = useForm({
        name: "",
        email: "",
        category: "",
        message: "",
        rating: 5,
    });

    const [data, setData] = useState({});

    const onHandleSubmit = (e) => {
        e.preventDefault();

        form.post(route("feedback.store"), {
            preserveScroll: true,
            onSuccess: () => {
                form.reset("name", "email", "category", "message"),
                    setData({
                        name: "",
                        email: "",
                        category: "default",
                        message: "",
                    });
            },
        });
    };

    const onHandleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
        form.setData(event.target.name, event.target.value);
    };

    return (
        <>
            <div className=" bg-base-color w-full h-auto p-5 mt-5">
                <h1 className="text-lg font-bold p-2 text-center md:text-xl mb-3">
                    Feedback Form
                </h1>
                <form
                    onSubmit={onHandleSubmit}
                    className="md:w-[80%] md:m-auto"
                >
                    {/* input your name ...... */}
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={(e) => onHandleChange(e)}
                        placeholder="Your name ......"
                        className="input input-ghost bg-white w-full h-10"
                    />
                    {/* input your email ...... */}
                    <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={(e) => onHandleChange(e)}
                        placeholder="Your Email ......"
                        className="input input-ghost bg-white w-full h-10 mt-3"
                    />
                    {/* input category comment */}
                    <select
                        name="category"
                        value={data.category}
                        onChange={(e) => onHandleChange(e)}
                        className="select select-ghost bg-white w-full h-10 mt-3"
                        defaultValue={"default"}
                    >
                        <option value="default" disabled>
                            Choose an option
                        </option>
                        <option value="Service">Service</option>
                        <option value="Proficiency">Proficiency</option>
                        <option value="Cleanliness">Cleanliness</option>
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
                                    defaultChecked={
                                        data.rating === rating.toString()
                                    }
                                    onChange={(e) => onHandleChange(e)}
                                />
                            ))}
                        </div>
                    </div>
                    {/* give the Comment */}
                    {/* lg */}
                    <textarea
                        name="message"
                        value={data.message}
                        onChange={(e) => onHandleChange(e)}
                        placeholder="Bio"
                        className="textarea textarea-bordered textarea-lg w-full h-40 mt-3 "
                    ></textarea>
                    {/* button submit */}
                    <div className="w-full  b mt-5 flex ">
                        <button
                            type="submit"
                            className="btn mx-auto text-white bg-[#1279FF]"
                        >
                            Submit
                        </button>
                    </div>

                    {/* pesan error */}
                    {Object.values(form.errors).length > 0 &&
                        Object.values(form.errors)[0]}

                    {/* pesan success */}
                    {flashMessage?.message && <h1>{flashMessage.message}</h1>}
                </form>
            </div>
        </>
    );
}

export default Form_Guess;
