import React from "react";
import "tachyons";

const Card = ({name,id,email}) =>{
    
    return(
        
        <div className ="tc bg-light-green pa3 br3 dib ma2 grow bw2 shadow-5">
            <img alt="Robot" src={`https://robohash.org//${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>

    );
}

export default Card;