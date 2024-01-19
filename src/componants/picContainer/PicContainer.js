import React from "react";
import "./PicContainer.css";
import PicCard from "../picCard/PicCard";

const PicContainer = ({ pictures }) => {
    return (
        <div className="pic-container-wrapper">
            <div className="pic-container-inner">
                {pictures.map((pic, index) => (
            <PicCard pic={pic}/>
            ))}
            </div>
        </div>
    );
};

export default PicContainer;