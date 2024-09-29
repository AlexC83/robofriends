//import React from 'react'
import 'tachyons'

const Card = ({ name, email, id}) => {
    return (
        <div className="tc black bg-light-green dib br3 pa3 ma2 grow bw2 shadow5">
            <img src={`https://robohash.org/${id}}?200x200`} alt="photo"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;