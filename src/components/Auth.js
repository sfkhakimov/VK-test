export default class Auth {
  constructor() {
    this._token = localStorage.getItem("token");
    this._term = localStorage.getItem("expires_in");
  }

  getToken() {
    if (
      this._token === null ||
      this._token === "" ||
      Date.now() > +this._term
    ) {
      const url = window.location.hash;
      const newUrl = url.match(/access_token=[a-z0-9]*/);
      if (newUrl === null) {
        localStorage.setItem("token", "");
        return (this._token = localStorage.getItem("token"));
      } else {
        const expiresIn = url.match(/expires_in=\d*/).join("");
        const milliseconds = expiresIn.match(/\d/g).join("");
        const date = Date.now() + +milliseconds;
        localStorage.setItem("token", newUrl.join(""));
        localStorage.setItem("expires_in", date);
        return (this._token = localStorage.getItem("token"));
      }
    } else {
      return (this._token = localStorage.getItem("token"));
    }
  }
}
