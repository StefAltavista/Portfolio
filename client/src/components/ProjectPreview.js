import React from "react";
import { Link } from "react-router-dom";
export default function ProjectPreview(props) {
    console.log(props);
    return (
        <Link to={`./${props.name}`}>
            <div id="project">
                <p>{props.name}</p>
                <image src="" />
            </div>
        </Link>
    );
}
