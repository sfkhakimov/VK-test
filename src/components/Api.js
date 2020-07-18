import fetchJsonp from "fetch-jsonp";

export default class Api {
  constructor(url) {
    this.url = url;
    this.auth = this.auth.bind(this);
    this.getFriends = this.getFriends.bind(this);
  }

  auth() {
    window.location.replace(
      `https://oauth.vk.com/authorize?client_id=7542238&redirect_uri=${this.url}&response_type=token`
    );
  }

  getFriends(token) {
    return fetchJsonp(
      `https://api.vk.com/method/friends.get?v=5.120&${token}&order=random&count=5&fields=nickname,photo_200_orig`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((res) => res)
      .catch((err) => err);
  }
  getUser(token) {
    return fetchJsonp(
      `https://api.vk.com/method/users.get?v=5.120&${token}&fields=nickname,photo_200_orig`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((res) => res)
      .catch((err) => err);
  }
}
