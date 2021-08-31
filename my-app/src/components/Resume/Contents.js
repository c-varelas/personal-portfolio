import React from "react";

const Content = (props) => {
    return (
        <div className="content-item">
            <h5 className={props.title ? "exp-title" : "exp-no-title"}>
                {props.title}
            </h5>
            <p>
                <em>{props.date}</em>
            </p>
            <ul>
                {props.content.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
        </div>
    );
}

export default Content;