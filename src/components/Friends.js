export default class Friends {
  constructor(data) {
    this.data = data;
  }

  render() {
    this.data.forEach((friend) => {
      document.querySelector("#auth").insertAdjacentHTML(
        "beforeend",
        `
          <div class="user">
          <img src="${friend.photo_200_orig}" class="user__img" alt="Фото">
          <div class="user__container">
            <h2 class="user__name">${friend.first_name} ${friend.last_name}</h2>
          </div>
        </div>
          `
      );
    });
  }
}
