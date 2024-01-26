import React from "react";
import "./favContainer.css";
import { addUserFav } from "../../utils/fetch";

const favContainer = ({id_photo, favPic, url, setUserFav}) => {
    console.log(favPic)

    return (
        <div className="favContainer-wrapper">
            <div className="favContainer-inner">
    <div className="favContainer-detail">
        <h3>
            <p>hello</p>
        </h3>
    </div>
    <div className="favContainer-detail">
        <p className="id_photo">id_photo: {favPic.id_photo}</p>
        <p className="url">url: {favPic.url}</p>
        <p className="UserId">UserId: {favPic.UserId}</p>
    </div>
    </div>
</div>
    );
};

export default favContainer;