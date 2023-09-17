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
                                    required
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) => handleChange(e)}
                                    id="name "
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  invalid:border-pink-500 invalid:focus:ring-pink-500 invalid:text-pink-500 peer"
                                    placeholder="username ......"
                                    minLength={3}
                                />
                                <p class="mt-1 invisible peer-invalid:visible text-pink-600 text-xs">
                                    please fill more then 3 character ...
                                </p>
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
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 invalid:border-pink-500 invalid:focus:ring-pink-500 invalid:text-pink-500 peer "
                                    required
                                />
                                <p class="mt-1 invisible peer-invalid:visible text-pink-600 text-xs">
                                    Please provide a valid email address.
                                </p>
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
                                    required
                                    minlength={16}
                                    placeholder="nik number ......."
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 invalid:border-pink-500 invalid:focus:ring-pink-500 invalid:text-pink-500 peer "
                                />
                                <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                                    number must on the 16 digit's
                                </p>
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
                                    required
                                    type="text"
                                    name="phone"
                                    value={data.phone}
                                    onChange={(e) => handleChange(e)}
                                    id="phone"
                                    minLength={12}
                                    placeholder=" no.telephone ....."
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 invalid:border-pink-500 invalid:focus:ring-pink-500 invalid:text-pink-500 peer"
                                />
                                <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                                    fill must in 12 character
                                </p>
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
                                    required
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    onChange={(e) => handleChange(e)}
                                    id="password"
                                    minLength={5}
                                    placeholder="new password ....."
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 invalid:border-pink-500 invalid:focus:ring-pink-500 invalid:text-pink-500 peer"
                                />
                                <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                                    Password must more then 5 character
                                </p>
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
                                    required
                                    type="password"
                                    minLength={5}
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    onChange={(e) => handleChange(e)}
                                    id="password_confirmation"
                                    placeholder="password confirmation ....."
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 invalid:border-pink-500 invalid:focus:ring-pink-500 invalid:text-pink-500 peer "
                                />
                                <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                                    Password must more then 5 character
                                </p>
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

                            {Object.values(errors).length > 0 &&
                                Object.values(errors)[0]}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp_Form;
