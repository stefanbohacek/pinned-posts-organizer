import onReady from "./modules/onReady.js";
import backToTop from "./modules/backToTop.js";
import getUrlParams from "./modules/getUrlParams.js";
import handleLogin from "./modules/handleLogin.js";
import handleLogout from "./modules/handleLogout.js";

onReady(() => {
  backToTop();
  handleLogin();
  handleLogout();

  const urlParams = getUrlParams("instance", "token");

  if (urlParams && urlParams.instance && urlParams.token) {
    localStorage.setItem("instance", urlParams.instance);
    localStorage.setItem("token", urlParams.token);
    window.location.href = `/app/`;
  }
});
