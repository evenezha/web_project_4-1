class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _openPreview(popupElement) {
    popupElement.classList.add("popup_open");
  }

  _handleLikeButton = (evt) => {
    evt.target.classList.toggle("card__place-favorite_active");
  };

  _handleDeleteButton = () => {
    this._cardElement.remove();
    this._cardElement = null;
  };

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__place-favorite")
      .addEventListener("click", this._handleLikeButton);

    const deleteButton = this._cardElement.querySelector(".card__trash");
    deleteButton.addEventListener("click", () => {
      this._handleDeleteButton(this._cardElement);
    });

    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._showPreviewImage();
      });
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.firstElementChild.cloneNode(true); ///_getTemplate
  }

  getView() {
    this._cardElement = this._getTemplate();
    this._cardElement.querySelector(".card__place-name").textContent =
      this._name;
    const imageElement = this._cardElement.querySelector(".card__image");
    imageElement.src = this._link;
    imageElement.alt = this._name;
    this._setEventListeners();
    return this._cardElement;
  }

  _showPreviewImage() {
    this._openPreview(document.querySelector("#view__image"));
    const imageElement = document.querySelector(".popup__image-preview");

    imageElement.src = this._link;
    imageElement.alt = this._name;
    document.querySelector(".popup__preview-name").textContent = this._name;
  }
}

export default Card;
