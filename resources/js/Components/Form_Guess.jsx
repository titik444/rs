import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

function Form_Guess() {
    const form = useForm({
        name: "",
        email: "",
        category: "",
        message: "",
        rating: 5,
    });

    const errors = form.errors;

    const { flashMessage } = usePage().props;

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
                    {flashMessage?.message && (
                        <div className="alert alert-success w-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current shrink-0 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>{flashMessage.message}</span>
                        </div>
                    )}

                    {/* input your name ...... */}
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={(e) => onHandleChange(e)}
                        placeholder="Your name ......"
                        className={`input input-ghost bg-white w-full h-10 mt-3 ${
                            errors.name
                                ? "border-pink-500 focus:border-pink-500 focus:ring-pink-500"
                                : "border-gray-300 focus:ring-primary-600 focus:border-primary-600"
                        }`}
                    />
                    {/* input your email ...... */}

                    {errors.name && (
                        <p class="mt-1 text-pink-600 text-xs">{errors.name}</p>
                    )}

                    <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={(e) => onHandleChange(e)}
                        placeholder="Your Email ......"
                        className={`input input-ghost bg-white w-full h-10 mt-3 ${
                            errors.email
                                ? "border-pink-500 focus:border-pink-500 focus:ring-pink-500"
                                : "border-gray-300 focus:ring-primary-600 focus:border-primary-600"
                        }`}
                    />
                    {/* input category comment */}

                    {errors.email && (
                        <p class="mt-1 text-pink-600 text-xs">{errors.email}</p>
                    )}

                    <select
                        name="category"
                        value={data.category}
                        onChange={(e) => onHandleChange(e)}
                        className={`select select-ghost bg-white w-full h-10 mt-3 ${
                            errors.category
                                ? "border-pink-500 focus:border-pink-500 focus:ring-pink-500"
                                : "border-gray-300 focus:ring-primary-600 focus:border-primary-600"
                        }`}
                        defaultValue={"default"}
                    >
                        <option value="default" disabled>
                            Choose an option
                        </option>
                        <option value="Service">Service</option>
                        <option value="Proficiency">Proficiency</option>
                        <option value="Cleanliness">Cleanliness</option>
                    </select>

                    {errors.category && (
                        <p class="mt-1 text-pink-600 text-xs">
                            {errors.category}
                        </p>
                    )}

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
                        placeholder="Message ......"
                        className={`textarea textarea-bordered textarea-lg w-full h-40 mt-3 ${
                            errors.message
                                ? "border-pink-500 focus:border-pink-500 focus:ring-pink-500"
                                : "border-gray-300 focus:ring-primary-600 focus:border-primary-600"
                        }`}
                    />

                    {errors.message && (
                        <p class="mt-1 text-pink-600 text-xs">
                            {errors.message}
                        </p>
                    )}

                    {/* button submit */}
                    <div className="w-full  b mt-5 flex ">
                        <button
                            type="submit"
                            className="btn mx-auto text-white bg-[#1279FF]"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Form_Guess;
