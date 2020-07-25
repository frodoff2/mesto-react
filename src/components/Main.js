import React from 'react';
import api from '../utils/API.js';
import Card from './Card.js';

function Main(props) {

  const [userName, setuserName ] = React.useState([]);
  const [userDescription, setUserDescription] = React.useState([]);
  const [userAvatar, setUserAvatar ] = React.useState([]);
  const [cards, setCards] = React.useState([]);
  
  React.useEffect(() => {
    api.getInitialCards().then(data => {
      setCards(data); 
    })
    .catch(err => { 
      console.log(err)  
    }) 
  }, []);

  React.useEffect(() => {
   api.getInfo().then(res => {
     setuserName(res.name);
     setUserDescription(res.about);
     setUserAvatar(res.avatar);
   })
   .catch(err => { 
    console.log(err)  
  }) 
  }, [])
  return(
    <>
    <section className="profile">  
      <img className="profile__image"  src={userAvatar} name="avatar" alt="фотография Жак-Ив Кусто" />  
      <div className="profile__pen" onClick={props.onEditAvatar}> </div> 
      <div className="profile__info">   
      <h1 className="profile__title">{userName}</h1>  
      <p className="profile__subtitle">{userDescription}</p>  
      </div>  
      <button className="profile__edit" type="button" onClick={props.onEditProfile}></button>  
      <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>  
    </section> 
    <section className="elements">
      {cards.map((card) =>  <Card key={card._id} card={card} onClick={props.onCardClick}/>)}
    </section> 
   </>
    );
  }
  
  export default Main;