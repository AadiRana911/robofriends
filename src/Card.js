import React from 'react';

const Card = () => {
    return(
        <div className = 'bg-light-green dib br3 pa3 ma2 grow'>
            <h1>Robofriends</h1>
            <img alt = 'Robots' src = 'https://robohash.org/test'/>
            <div>
                <h2>Jane Doe</h2>
                <p> JaneDoe@gmail.com</p>
            </div>
        </div>
    )
}

export default Card;