import React from 'react';
//rsc
const Card = ({c}) => {
    console.log(c);
    return (
        <div className='card'>
            <div className="img-container">
                <img src={c.flags.png} alt="" />
            </div>
            <div className="info-container">
                <span>{c.translations.fra.common}</span>
                <span>{c.capital}</span>
                <span>Population : {c.population}</span>
            </div>
        </div>
    );
};

export default Card;