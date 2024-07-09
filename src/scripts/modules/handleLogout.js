export default () => {
  const logOutBtn = document.getElementById("log-out");
  const appLinkBtn = document.getElementById("app-link");
  const instance = localStorage.getItem("instance");
  const token = localStorage.getItem("token");

  if (instance && token) {
    logOutBtn.parentElement.classList.remove("d-none");
    appLinkBtn.classList.remove("d-none");

    logOutBtn.addEventListener("click", (ev) => {
      ev.preventDefault();
      localStorage.removeItem("token");
      localStorage.removeItem("user_id");
      window.location.href = "/";
    });
  }
};
