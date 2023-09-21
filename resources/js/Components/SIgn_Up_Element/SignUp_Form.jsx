import logo from "@/images/Rumah Sakit 2.png";
import { Link } from "@inertiajs/react";

function SignUp_Form({ data, errors, submit, handleChange, processing }) {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                {/*  logo BeHospital ..... */}
                <a className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="logo navbar" />
                    <div className="text-[15px]">
                        BEHOS<span className="text-[#1279FF]">PITAL</span>
                    </div>
                </a>
                {/* akhir logo beHospital ...  */}
                <div className=" bg-white rounded-lg shadow md:mt-0 xl:p-0 w-[90%] h-auto mt-5">
                    <div className="p-4 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center p-2">
                            Register and Create
                        </h1>
                        <form
                            className="space-y-4 md:space-y-6"
                            onSubmit={submit}
                        >
                            <div>
                                {/* Name ...... */}
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-bold text-gray-900 after:content-['*']
                                    after:text-pink-500 after:ml-0.5"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) => handleChange(e)}
                                    id="name "
                                    className={`g-gray-50 border text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 ${
                                        errors.name
                                            ? "border-pink-500 focus:border-pink-500 focus:ring-pink-500"
                                            : "border-gray-300 focus:ring-primary-600 focus:border-primary-600"
                                    }`}
                                    placeholder="name ......"
                                />

                                {errors.name && (
                                    <p className="mt-1 text-pink-600 text-xs">
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                            <div>
                                {/* akhir username  */}

                                {/* your email ....... */}
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-bold text-gray-900  after:content-['*']
                                    after:text-pink-500 after:ml-0.5"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) => handleChange(e)}
                                    id="email"
                                    placeholder="your email ......"
                                    className={`bg-gray-50 border text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 ${
                                        errors.email
                                            ? "border-pink-500 focus:border-pink-500 focus:ring-pink-500"
                                            : "border-gray-300 focus:ring-primary-600 focus:border-primary-600"
                                    }`}
                                />

                                {errors.email && (
                                    <p className="mt-1 text-pink-600 text-xs">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                            {/* akhir email ...... */}

                            {/* NIK  .......... */}
                            <div>
                                <label
                                    htmlFor="NIK"
                                    className="block mb-2 text-sm font-bold text-gray-900 after:content-['*']
                                    after:text-pink-500 after:ml-0.5"
                                >
                                    NIK
                                </label>
                                <input
                                    type="text"
                                    name="nik"
                                    value={data.nik}
                                    onChange={(e) => handleChange(e)}
                                    id="NIK"
                                    placeholder="nik number ......."
                                    className={`bg-gray-50 border text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 ${
                                        errors.nik
                                            ? "border-pink-500 focus:border-pink-500 focus:ring-pink-500"
                                            : "border-gray-300 focus:ring-primary-600 focus:border-primary-600"
                                    }`}
                                />

                                {errors.nik && (
                                    <p className="mt-1 text-pink-600 text-xs">
                                        {errors.nik}
                                    </p>
                                )}
                            </div>
                            {/* akhir NIK ....... */}
                            {/* NO hp ...... */}
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block mb-2 text-sm font-bold text-gray-900 after:text-pink-500 after:content-['*'] after:ml-0.5"
                                >
                                    Number Phone
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={data.phone}
                                    onChange={(e) => handleChange(e)}
                                    id="phone"
                                    placeholder=" no.telephone ....."
                                    className={`bg-gray-50 border text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 ${
                                        errors.phone
                                            ? "border-pink-500 focus:border-pink-500 focus:ring-pink-500"
                                            : "border-gray-300 focus:ring-primary-600 focus:border-primary-600"
                                    }`}
                                />

                                {errors.phone && (
                                    <p className="mt-1 text-pink-600 text-xs">
                                        {errors.phone}
                                    </p>
                                )}
                            </div>
                            {/* akhir NO Hp ...... */}

                            {/* create password */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 after:text-pink-500 after:content-['*'] after:ml-0.5"
                                >
                                    Create Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    onChange={(e) => handleChange(e)}
                                    id="password"
                                    placeholder="new password ....."
                                    className={`bg-gray-50 border text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 ${
                                        errors.password
                                            ? "border-pink-500 focus:border-pink-500 focus:ring-pink-500"
                                            : "border-gray-300 focus:ring-primary-600 focus:border-primary-600"
                                    }`}
                                />

                                {errors.password && (
                                    <p className="mt-1 text-pink-600 text-xs">
                                        {errors.password}
                                    </p>
                                )}
                            </div>
                            {/* akhir password  */}
                            {/* veririfkasi password  */}
                            <div>
                                <label
                                    htmlFor="password_confirmation"
                                    className="block mb-2 text-sm font-medium text-gray-900 after:text-pink-500 after:content-['*'] after:ml-0.5 "
                                >
                                    Password Confirmation
                                </label>
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    onChange={(e) => handleChange(e)}
                                    id="password_confirmation"
                                    placeholder="password confirmation ....."
                                    className={`bg-gray-50 border text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 ${
                                        errors.password_confirmation
                                            ? "border-pink-500 focus:border-pink-500 focus:ring-pink-500"
                                            : "border-gray-300 focus:ring-primary-600 focus:border-primary-600"
                                    }`}
                                />

                                {errors.password_confirmation && (
                                    <p className="mt-1 text-pink-600 text-xs">
                                        {errors.password_confirmation}
                                    </p>
                                )}
                            </div>

                            {/* akhir verifikasi password */}

                            {/* cek box aggreement ....... */}
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        required
                                        id="terms"
                                        aria-describedby="terms"
                                        type="checkbox"
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label
                                        htmlFor="terms"
                                        className="font-light text-gray-500 dark:text-gray-300"
                                    >
                                        I accept the{" "}
                                        <a
                                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                            href="#"
                                        >
                                            Terms and Conditions
                                        </a>
                                    </label>
                                </div>
                            </div>
                            <div className="w-full flex justify-center">
                                <button
                                    type="submit"
                                    className="w-30 text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#1279FF] "
                                    disabled={processing}
                                >
                                    Create an account
                                </button>
                            </div>

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account?{" "}
                                <Link
                                    href={"/"}
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Login here
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp_Form;
