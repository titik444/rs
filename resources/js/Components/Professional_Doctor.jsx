import React from "react";
import DoctorCard from "./items_LandingPAge/DoctorCard";
import DocterPhoto1 from "@/images/dokter1.png";
import DocterPhoto3 from "@/images/dokter2.png";
import DocterPhoto2 from "@/images/dokter3.png";
function Professional_Doctor() {
    //  Variable Doctor profile
    return (
        <>
            <div className="flex flex-col justify-center bg-base-color items-center p-3 mt-2">
                {/* PROFILE TOP DOCTOR ....*/}
                <h1 className="text-lg font-bold p-2 text-center">
                    Professional Doctor
                </h1>
                {/* doctor Card */}
                {/* dokter profile 1 */}
                <DoctorCard
                    photo={DocterPhoto1}
                    name="Dr. Michael Smith"
                    text="Lorem Ipsum is simply dummy 
                    text of the printing"
                />
                {/* dokter profile 2 */}
                <DoctorCard
                    photo={DocterPhoto2}
                    name="Dr. Emily Davis"
                    text="Lorem Ipsum is simply dummy 
                    text of the printing"
                />
                {/* dokter profile 3 */}
                <DoctorCard
                    photo={DocterPhoto3}
                    name="Dr. Christopher Anderson"
                    text="Lorem Ipsum is simply dummy 
                text of the printing"
                />
            </div>
        </>
    );
}

export default Professional_Doctor;
