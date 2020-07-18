import "./style.css";
import Api from "./components/Api";
import Auth from "./components/Auth";
import User from "./components/User";
import Friends from "./components/Friends";

document.addEventListener("DOMContentLoaded", () => {
  const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080/"
      : "https://sfkhakimov.github.io/VK-test/";
  const api = new Api(url);
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
      const user = new User(data.response[0]);
      user.render();
      api.getFriends(token).then((data) => {
        const friends = new Friends(data.response.items);
        friends.render();
      });
    });
  }
});
