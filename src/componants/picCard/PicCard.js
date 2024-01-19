import React from "react";
import "./PicCard.css"

const PicCard = ({ pic }) => {
    const handleClick = (e, pic) => {
        console.log("Hello From PicCard", pic.id)
    }

        return (
            <div className="PicCard" onClick={(e) => handleClick (e, pic)}>
                <div className="PicCard-Img-Container">
                    <img className="PicCard-Img" src={pic.pics.small}/>
                </div>
            </div>
        )
};
export default PicCard;