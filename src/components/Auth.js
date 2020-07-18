export default class Auth {
  constructor() {
    this._token = localStorage.getItem("token");
  }

  getToken() {
    if (this._token === null || this._token === "") {
      const url = window.location.hash;
      const newUrl = url.match(/access_token=[a-z0-9]*/);
      if (newUrl === null) {
        localStorage.setItem("token", "");
        return this._token;
      } else {
        localStorage.setItem("token", newUrl.join(""));
        return (this._token = localStorage.getItem("token"));
      }
    } else {
      return (this._token = localStorage.getItem("token"));
    }
  }
}
