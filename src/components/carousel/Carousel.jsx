import React, { useState } from "react";
import Cards from "../cards/Cards";

const cardData = [
    {
        title: "Custom brokerage",
        image: "../src/assets/Vector(1).png",
        description: "Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis perspiciatis.",
    },
    {
        title: "Express transport",
        image: "../src/assets/Vector(2).png",
        description: "Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis perspiciatis.",
    },
    {
        title: "Freight shipping",
        image: "../src/assets/Vector(3).png",
        description: "Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis perspiciatis.",
    },
    {
        title: "Auction Pickup",
        image: "../src/assets/Vector(1).png",
        description: "Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis perspiciatis.",
    },
    {
        title: "Custom Clearance",
        image: "../src/assets/Vector(2).png",
        description: "Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis perspiciatis.",
    },

];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = 3;

    const next = () => {
        if (currentIndex + visibleCards < cardData.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="w-full max-w-6xl mx-auto">


            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
                >
                    {cardData.map((data, idx) => (
                        <div key={idx} className="w-1/3 flex-shrink-0 px-3">
                            <Cards {...data} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center items-center mt-4 ">
                
                <div  onClick={prev} style={{height:"3rem",width:"3rem",border:"1px solid white"}} className="flex items-center justify-center mx-2">
                    <img src="../src/assets/VectorArrow2.png"/>
                </div>
                <div   onClick={next} style={{height:"3rem",width:"3rem",border:"1px solid white"}} className="flex items-center justify-center mx-2">
                    <img src="../src/assets/VectorArrow.png"/>
                </div>
            </div>

        </div>
    );
};

export default Carousel;
