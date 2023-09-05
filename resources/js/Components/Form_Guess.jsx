function Form_Guess({ form, submit, handleChange, flashMessage }) {
    return (
        <>
            <div className="container bg-base-color w-full h-auto p-5 mt-5">
                <h1 className="text-lg font-bold p-2 text-center mb-3">
                    Feedback Form
                </h1>
                <form onSubmit={submit}>
                    {/* input your name ...... */}
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={(e) => handleChange(e)}
                        placeholder="Your name ......"
                        className="input input-ghost bg-white w-full h-10"
                    />
                    {/* input your email ...... */}
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={(e) => handleChange(e)}
                        placeholder="Your Email ......"
                        className="input input-ghost bg-white w-full h-10 mt-3"
                    />
                    {/* input category comment */}
                    <select
                        name="category"
                        value={form.category}
                        onChange={(e) => handleChange(e)}
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
                                    checked={form.rating === rating.toString()}
                                    onChange={(e) => handleChange(e)}
                                />
                            ))}
                        </div>
                    </div>
                    {/* give the Comment */}
                    {/* lg */}
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={(e) => handleChange(e)}
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
