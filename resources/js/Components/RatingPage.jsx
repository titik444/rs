import React from "react";
import RatingCard from "./items_LandingPAge/RatingCard";
import people1 from "@/images/ratingPeople.png";
import people2 from "@/images/ratingPeople2.png";
import people3 from "@/images/ratingPeople3.png";

export default function RatingPage() {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <RatingCard
                    image={people1}
                    nama={"Lorem Ipsum is"}
                    text="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
                <RatingCard
                    image={people2}
                    nama={"Lorem Ipsum is"}
                    text="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
                <RatingCard
                    image={people3}
                    nama={"Lorem Ipsum is"}
                    text="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
            </div>
        </>
    );
}
