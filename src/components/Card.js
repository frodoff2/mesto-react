import React from 'react';

function Card(props) {

  function handleClick() {
    props.onClick(props.card)
  }
  
    return(
      <div className="element">   
        <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />   
        <button className="element__trash" type="button" onClick={props.onDelete}></button>  
        <div className="element__text">  
          <h2 className="element__title">{props.card.name}</h2>  
          <button className="element__like" type="button"></button>  
    <div className="element__like_count">{props.card.likes.length}</div> 
        </div>  
      </div>  
    );
  }

export default Card;