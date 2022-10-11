class Api {
    constructor({baseUrl, authToken}) {
        this._baseUrl = baseUrl;
        this._authToken = authToken;
    }


// GET https://around.nomoreparties.co/v1/group-12/cards

    getCardList() {
      return fetch(`${this._baseUrl}/cards`, {
  headers: {
    authorization: "099989f7-9742-46ef-99f8-aa8e6872a6c3"
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err); // log the error to the console
  });
}

// GET https://around.nomoreparties.co/v1/group-12/users/me
 getUserInfo() {
  return fetch(`${this._baseUrl}/users/me`, {
    headers: {
      authorization: "099989f7-9742-46ef-99f8-aa8e6872a6c3"
    }
  })
    .then(res => res.json())
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err); // log the error to the console
    });
}


// getAppInfo { }


// POST https://around.nomoreparties.co/v1/group-12/cards
// addCard({name, link}) {

// }


// DELETE https://around.nomoreparties.co/v1/group-12/cards/cardId
// removeCard(cardID) {

// }

// // PUT https://around.nomoreparties.co/v1/group-12/cards/likes/cardId

// // DELETE https://around.nomoreparties.co/v1/group-12/cards/likes/cardId
// changeLikeCardStatus(cardId, like) {}

// // PATCH https://around.nomoreparties.co/v1/group-12/users/me
// setUserInfo() {}

// // PATCH https://around.nomoreparties.co/v1/group-12/users/me/avatar
// setUserAvatargit() {}



};

export default Api;
