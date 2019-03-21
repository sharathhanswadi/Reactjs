import React from 'react';


const card = (props) =>{
    return (
        <div className="bg-light-green dib br3 pd3 ma3 grow bw2 shadow-5"
        > 
        <img alt='robots' src ='https://robohash.org/sharath? 200 * 200 '  />        
        <div>
            <h2>{props.name} </h2>
            <p>{props.email}</p>
        </div>
        </div>
    );
}
export default card;