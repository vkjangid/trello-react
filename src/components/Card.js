import React from 'react';
import deleteIcon from "../images/delete-icon.png"

const Card = (props) => {
    return ( 
        <button className="btn btn-light w-100 my-2 p-2 rounded d-flex justify-content-between align-items-center" onClick={(e) => console.log(props.details.id)}>
            {props.details.name}
            <button className="btn btn-light px-1 rounded" onClick={() => props.deleteCard(props.details.id)}>
                <img src={deleteIcon} alt="" />
            </button>
        </button>
    );
}
 
export default Card;