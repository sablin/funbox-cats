import React from 'react';
import { useState } from 'react';

import './CatCard.scss'

const CatCard = ({card}) => {

    const [selected, setSelected] = useState(false)

    const classes = `card ${selected ? 'select' : ''} ${card.disabled ?  'desabled' : ''}`

    return (
        <div className="card-wrapper">
            
        <div className={classes} onClick={()=> setSelected(!selected)}>

            <span className='description'>{card.descr}</span>
              <h2>{card.title}</h2>
              <h3>{card.subTitle}</h3>
             {card.info.map((info) =>
             <p className='info' key={Math.random(1000)}>{info}</p>
             )}
             <span className="weight">
                {card.mass} <span>кг.</span>
             </span>
             </div>

           {card.disabled ? <p className='buy-button'>Печалька, {card.subTitle} закончился.</p> : ( selected ? <p className='buy-button'>{card.selectedText}</p> : <p className='buy-button'>Чего сидишь? Порадуй котэ, <a  href="#" rel="noreferrer" target="_blank" onClick={(e)=>{e.preventDefault(); setSelected(!selected)}}>купи.</a></p>)}
        </div>
    );
};

export default CatCard;