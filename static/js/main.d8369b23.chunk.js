(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{11:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),c=a.n(o),i=(a(16),a(10)),s=a(1),l=a(7),u=a.n(l);var m=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{src:u.a,className:"header__logo",alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f"}))};var p=function(e){var t=e.card.owner._id===e.currentUser._id,a="element__trash ".concat(t?"":"element__trash_active"),n=e.card.likes.some((function(t){return t._id===e.currentUser._id})),o="element__like ".concat(n?"element__like_active":"");return r.a.createElement("div",{className:"element"},r.a.createElement("img",{className:"element__image",src:e.card.link,alt:e.card.name,onClick:function(){e.onClick(e.card)}}),r.a.createElement("button",{className:a,type:"button",onClick:function(){e.onDeleteButton(e.card)}}),r.a.createElement("div",{className:"element__text"},r.a.createElement("h2",{className:"element__title"},e.card.name),r.a.createElement("button",{className:o,onClick:function(){e.cardLike(e.card)},type:"button"}),r.a.createElement("div",{className:"element__like_count"},e.card.likes.length)))},d=r.a.createContext();var f=function(e){var t=r.a.useContext(d);return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"profile"},r.a.createElement("img",{className:"profile__image",src:t.avatar,name:"avatar",alt:"\u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u0416\u0430\u043a-\u0418\u0432 \u041a\u0443\u0441\u0442\u043e"}),r.a.createElement("div",{className:"profile__pen",onClick:e.onEditAvatar}," "),r.a.createElement("div",{className:"profile__info"},r.a.createElement("h1",{className:"profile__title"},t.name),r.a.createElement("p",{className:"profile__subtitle"},t.about)),r.a.createElement("button",{className:"profile__edit",type:"button",onClick:e.onEditProfile}),r.a.createElement("button",{className:"profile__add-button",type:"button",onClick:e.onAddPlace})),r.a.createElement("section",{className:"elements"},r.a.createElement(d.Provider,{value:t},e.cards.map((function(a){return r.a.createElement(p,{key:a._id,card:a,onDeleteButton:e.onDeleteButton,currentUser:t,onClick:e.onCardClick,cardLike:e.cardLike})})))))};var h=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__text"}," \xa9 2020 Mesto Russia"))};var _=function(e){return r.a.createElement("section",{className:"popup popup_opacity  ".concat(e.isOpen?"popup_opened":""," ")},r.a.createElement("div",{className:"popup__zoomed"},r.a.createElement("button",{className:"popup__close popup__close-zoom",type:"button",onClick:e.onClose}),r.a.createElement("img",{className:"popup__image",src:e.card.link,alt:e.card.name}),r.a.createElement("p",{className:"popup__caption"},e.card.name)))},v=a(8),E=a(9),b=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(v.a)(this,e),this.baseUrl=a,this.headers=n}return Object(E.a)(e,[{key:"getInfo",value:function(){return fetch(this.baseUrl,{method:"GET",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-12/cards",{method:"GET",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u043d\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u044b: ".concat(e.status))}))}},{key:"editProfile",value:function(e,t){return fetch(this.baseUrl,{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"addNewCard",value:function(e,t){return fetch("https://mesto.nomoreparties.co/v1/cohort-12/cards",{method:"POST",headers:this.headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"changeLikeCardStatus",value:function(e,t){return t?fetch("https://mesto.nomoreparties.co/v1/cohort-12/cards/likes/".concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})):fetch("https://mesto.nomoreparties.co/v1/cohort-12/cards/likes/".concat(e),{method:"PUT",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-12/cards/".concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"changeAvatar",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-12/users/me/avatar",{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-12/users/me",headers:{authorization:"8eaaf06a-2ca4-4be0-bedd-db145fddf3b1","Content-Type":"application/json"}}),k=a(2);var N=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"popup popup_opacity-normal popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""," ")},r.a.createElement("form",{className:"popup__container popup__container_".concat(e.avatar),name:"form",id:"form-info",onSubmit:e.onSubmit},r.a.createElement("button",{className:"popup__close",onClick:e.onClose,type:"reset"}),r.a.createElement("h2",{className:"popup__title"},e.title),e.children,r.a.createElement("button",{className:"popup__button popup__button_active ",type:"submit",id:"button-info"},e.btnTitle))))};var g=function(e){var t,a=r.a.useContext(d),n=r.a.useState(""),o=Object(s.a)(n,2),c=o[0],i=o[1],l=r.a.useState(""),u=Object(s.a)(l,2),m=u[0],p=u[1];return r.a.useEffect((function(){i(a.name),p(a.about)}),[a]),r.a.createElement(N,{name:"info",onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:m})},isOpen:e.isOpen,onClose:e.onClose,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",btnTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:r.a.createElement(r.a.Fragment,null,r.a.createElement("input",(t={type:"text",className:"popup__input",id:"author",name:"author"},Object(k.a)(t,"id","popup__name"),Object(k.a)(t,"minLength","2"),Object(k.a)(t,"maxLength","40"),Object(k.a)(t,"required",!0),Object(k.a)(t,"pattern","[A-Za-z\u0410-\u042f\u0401\u0430-\u044f\u0451 -]{1,}"),Object(k.a)(t,"defaultValue",c),Object(k.a)(t,"onChange",(function(e){i(e.target.value)})),t)),r.a.createElement("span",{className:"popup__input-error",id:"popup__name-error"}),r.a.createElement("input",{type:"text",className:"popup__input",name:"about",id:"popup__info",minLength:"2",maxLength:"200",required:!0,defaultValue:m,onChange:function(e){p(e.target.value)}}),r.a.createElement("span",{className:"popup__input-error",id:"popup__info-error"}))})};var C=function(e){var t=r.a.useRef();return r.a.createElement(N,{name:"avatar",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(a){a.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",btnTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",avatar:"avatar",children:r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"url",className:"popup__input",name:"avatar",id:"avatar__url",ref:t,required:!0}),r.a.createElement("span",{className:"popup__input-error",id:"avatar__url-error"}," "))})};var O=function(e){var t=r.a.useRef(),a=r.a.useRef();return r.a.createElement(N,{name:"locations",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onAddPlace({name:t.current.value,link:a.current.value})},title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",btnTitle:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",children:r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",className:"popup__input",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",id:"cards__name",minLength:"1",maxLength:"30",ref:t,required:!0}),r.a.createElement("span",{className:"popup__input-error",id:"cards__name-error"}),r.a.createElement("input",{type:"url",className:"popup__input",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",id:"cards__info",ref:a,required:!0}),r.a.createElement("span",{className:"popup__input-error",id:"cards__info-error"}))})};var j=function(e){return r.a.createElement(N,{name:"trash",isOpen:e.isOpen,onClose:e.onClose,title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",avatar:"delete",btnTitle:"\u0414\u0430",onSubmit:function(t){t.preventDefault(),e.onSubmit()}})};var y=function(){var e=r.a.useState(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],o=r.a.useState(!1),c=Object(s.a)(o,2),l=c[0],u=c[1],p=r.a.useState(!1),v=Object(s.a)(p,2),E=v[0],k=v[1],N=r.a.useState(!1),y=Object(s.a)(N,2),S=y[0],P=y[1],U=r.a.useState(!1),A=Object(s.a)(U,2),L=A[0],T=A[1],x=r.a.useState([]),w=Object(s.a)(x,2),D=w[0],B=w[1],q=r.a.useState([]),F=Object(s.a)(q,2),I=F[0],J=F[1],z=r.a.useState([]),R=Object(s.a)(z,2),G=R[0],H=R[1],M=r.a.useState([]),V=Object(s.a)(M,2),W=V[0],Z=V[1];function $(){n(!1),u(!1),k(!1),T(!1),P(!1)}return r.a.useEffect((function(){b.getInfo().then((function(e){J(e)})).catch((function(e){console.log(e)}))}),[]),r.a.useEffect((function(){b.getInitialCards().then((function(e){H(e)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"page"},r.a.createElement(d.Provider,{value:I},r.a.createElement(g,{isOpen:a,onClose:$,onUpdateUser:function(e){var t=e.name,a=e.about;b.editProfile(t,a).then((function(e){J(e),$()}))}}),r.a.createElement(O,{isOpen:l,onClose:$,onAddPlace:function(e){var t=e.name,a=e.link;b.addNewCard(t,a).then((function(e){H([e].concat(Object(i.a)(G)))})),$()}}),r.a.createElement(C,{isOpen:E,onClose:$,onUpdateAvatar:function(e){var t=e.avatar;b.changeAvatar(t).then((function(e){J(e),$()}))}}),r.a.createElement(j,{isOpen:S,onClose:$,onSubmit:function(){b.deleteCard(W._id).then((function(){var e=G.filter((function(e){return e._id!==W._id}));H(e),$()}))}}),r.a.createElement(_,{card:D,isOpen:L,onClose:$}),r.a.createElement(m,null),r.a.createElement("section",{className:"elements"}),r.a.createElement(f,{onEditAvatar:function(){k(!0)},cards:G,cardLike:function(e){var t=e.likes.some((function(e){return e._id===I._id}));b.changeLikeCardStatus("".concat(e._id),t).then((function(t){var a=G.map((function(a){return a._id===e._id?t:a}));H(a)}))},onEditProfile:function(){n(!0)},onAddPlace:function(){u(!0)},onDeleteButton:function(e){Z(e),P(!0)},onCardClick:function(e){T(!0),B(e)}}),r.a.createElement(h,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a.p+"static/media/logo.c6f11019.svg"}},[[11,1,2]]]);
//# sourceMappingURL=main.d8369b23.chunk.js.map