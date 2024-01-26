import React from "react";
import "./PicCard.css"
import { addUserFav } from "../../utils/fetch";
const PicCard = ({ pic }) => {
    const handleClick = async (e, pic, setUserFav) => {
        console.log("Hello From PicCard", pic.id)
        e.preventDefault();
        console.log("id_photo: ", favPic.id);
        console.log("url: ", favPic.url);
        const data = await addUserFav(favPic.id, favPic.url);
        console.log(data);
        setUserFav(data.img);
    };

        return (

            <div className="PicCard" onClick={(e) => handleClick (e, pic,)}>
                <div className="PicCard-Img-Container">
                    <img className="PicCard-Img" src={pic.pics.small}/>
                </div>
            </div>
        )
};
export default PicCard;