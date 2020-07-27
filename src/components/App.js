import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isDeletePopupOpen, setDeletePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);
  const [bigPopup, setBigPopup] = React.useState([]);

   function handleCardClick(props) {
    setSelectedCard(true);
    setBigPopup(props);
   }
  function handleEditProfile() {
    setEditProfilePopupOpen(true);
  }
  
  function handleCardDelete(){
    setDeletePopupOpen(true);
  }

  function handleAddPlace() {
    setAddPlacePopupOpen(true);
  }
  function handleEditAvatar() {
    setEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(false);
    setDeletePopupOpen(false);
  }

  return (
    <div className="App">
      <div className="page">    
        <ImagePopup card={bigPopup} isOpen={selectedCard} onClose={closeAllPopups}/>
        <Header/>
        <PopupWithForm name="info" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} title="Редактировать профиль" btnTitle="Сохранить" children={
          <> 
          <input type="text" className="popup__input" name="name" id="popup__name" minLength="2" maxLength="40" required pattern="[A-Za-zА-ЯЁа-яё -]{1,}" defaultValue="Жак-Ив Кусто" />  
          <span className="popup__input-error" id="popup__name-error"></span> 
          <input type="text" className="popup__input" name="about" defaultValue="Исследователь океана" id="popup__info" minLength="2" maxLength="200" required /> 
          <span className="popup__input-error" id="popup__info-error"></span>  
          </>
        }/>
        <PopupWithForm name="locations" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} title="Новое место" btnTitle="Создать" children={
          <>
         <input type="text" className="popup__input" name="name" placeholder="Название" id="cards__name" minLength="1" maxLength="30" required />  
         <span className="popup__input-error" id="cards__name-error"></span> 
         <input type="url" className="popup__input" name="link" placeholder="Ссылка на картинку" id="cards__info" required /> 
         <span className="popup__input-error" id="cards__info-error"></span>  
          </>
        }/>
        <PopupWithForm name="avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} title="Обновить аватар" btnTitle="Сохранить" avatar="avatar" children={
          <>
          <input type="url" className="popup__input" name="avatar" id="avatar__url" required /> 
          <span className ="popup__input-error" id="avatar__url-error"> </span> 
          </>
        }/>
    
        <PopupWithForm name="trash" isOpen={isDeletePopupOpen} onClose={closeAllPopups} title="Вы уверены?" avatar="delete" btnTitle="Да" />

  
        <section className="elements">  
        
        </section>  

        <Main onEditAvatar={handleEditAvatar} onEditProfile={handleEditProfile} onAddPlace={handleAddPlace} onDeleteClick={handleCardDelete} onCardClick={handleCardClick} />
        <Footer />
  
      </div>  
    </div>
  );
}

export default App;
