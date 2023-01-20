import React from 'react';
import CatCard from '../CatCard/CatCard';

import './CatCardList.css'

const CatCardList = ({cards}) => {
    return (
      <div className="cardList">
        {cards.map((card)=>
        <CatCard card={card} key={card.id}/>)}
      </div>
    );
};

export default CatCardList;