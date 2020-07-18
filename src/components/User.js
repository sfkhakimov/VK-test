export default class Api {
  constructor(data) {
    this.data = data;
  }

  render() {
    document.querySelector("#auth").insertAdjacentHTML(
      "beforeend",
      `
      <div class="user">
        <img src="${this.data.photo_200_orig}" class="user__img" alt="Фото">
        <div class="user__container">
          <h2 class="user__name">${this.data.first_name} ${this.data.last_name}</h2>
        </div>
      </div>
      <p class="user__friends">Друзья</p>
      `
    );
  }
}
