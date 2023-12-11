import React, { useState } from "react";
import { Rating, Textarea, Button, IconButton } from "@material-tailwind/react";
import axios from "axios"
// Stars:
function RatingStars() {
    return (
        <Rating value={4} />
    )
}



// Box Text Area :
function BoxTextarea() {
    const [feed, setFeed] = useState("")
    const [addFeed, setAddfeed] = useState([])

    const newFeed = (feed) => {
        axios.post(`http://localhost:8080/feedback/make`, feed).then((response) => {
            console.log(response.data);
        }).catch((err) => {
            console.log("error happen in post feedback", err);
            alert("Error happen try later")
        })
    }
    return (
        <div className="relative w-[32rem]">
            <Textarea variant="static" placeholder="Describe Your Experience..." rows={8} onChange={(e) => setFeed(e.target.value)} />
            <div className="flex w-full justify-between py-1.5">
                <IconButton variant="text" color="blue-gray" size="sm">
                </IconButton>
                <div className="flex gap-2">
                    <Button size="sm" color="red" variant="text" className="rounded-md">
                        Cancel
                    </Button>
                    <Button size="sm" className="rounded-md" onClick={() => newFeed(feed)}>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
}

const FeedBacks = () => {
    // if (window.localStorage.getItem("Token")){

    // }
    return (
        <div className="relative">
            <h1 className="flex font-bold justify-center items-center p-10">Hope You Enjoy Our Land</h1>
            <div className="flex justify-around items-center py-20 flex-wrap font-bold">
                <div> Our Services {RatingStars()}</div>
                <div>Quality {RatingStars()}</div>
                <div>Experience {RatingStars()} </div>
            </div>
            <div className="flex justify-around items-center py-20 flex-wrap">
                {BoxTextarea()}
            </div>
        </div>
    )
}

export default FeedBacks;