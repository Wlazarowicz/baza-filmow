import React, {useState} from "react";
import {useParams} from "react-router-dom";

const Details = () => {
    let {id} = useParams();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");

    fetch("https://pr-movies.herokuapp.com/api/movies/" + id)
        .then((res) => res.json())
        .then((json) => {
            console.log(id)
            setTitle(json.title);
            setImage(json.image);
            setContent(json.content);
        });
    return (<div className="movieCardDetails">
            <img className="moviePosterDetails" src={image} alt="image"/>
            <div className="movieContainerDetails">
                <div className="movieTitleDetails">{title}</div>
                <br/>
                <div className="movieDescriptionDetails"> {content}</div>
            </div>
        </div>

    );
}
export default Details;

