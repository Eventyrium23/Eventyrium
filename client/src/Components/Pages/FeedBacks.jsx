import React from "react";
import { Rating, rating } from "@material-tailwind/react";


function RatingStars() {
    return (
        <Rating value={4} />
    )
}



const FeedBacks = () => {
    // if (window.localStorage.getItem("Token")){

    // }
    return (
        <div className="relative py-30">
            <div className="flex justify-center items-center gap-10 font-bold">
                <div> Our Services {RatingStars()}</div>
                <div>Quality {RatingStars()}</div>
                <div>Experience {RatingStars()} </div>
            </div>
            <label color="gray">
                Feel Free
            </label>
            <div className="flex justify-center items-center">
                <textarea name="" placeholder="Describe Your Experience" cols="60" rows="5"></textarea>
            </div>
        </div>
    )
}

export default FeedBacks;