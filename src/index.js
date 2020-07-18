import "./style.css";
import Api from "./components/Api";
import Auth from "./components/Auth";
import User from "./components/User";
import Friends from "./components/Friends";

document.addEventListener("DOMContentLoaded", () => {
  const api = new Api();
  const auth = new Auth();
  const token = auth.getToken();

  if (token === null || token === "") {
    document.querySelector(".button").classList.add("button_active");
    document.querySelector(".button").addEventListener("click", () => {
      api.auth();
    });
  } else {
    document.querySelector(".button").classList.remove("button_active");
    api.getUser(token).then((data) => {
      console.log(data);
      const user = new User(data.response[0]);
      user.render();
      api.getFriends(token).then((data) => {
        console.log(data);
        const friends = new Friends(data.response.items);
        friends.render();
      });
    });
  }
});
