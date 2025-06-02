export default () => {
  const appName = "pinned-posts";
  const appScopes = "read:accounts write:accounts read:statuses";
  const appEnvironment =
    window.location.hostname === "localhost" ? "development" : "production";

  // const authServerURL = "http://localhost:3000/"
  const authServerURL = "https://auth.stefanbohacek.com/";
  const loginForm = document.getElementById("sign-in-form");
  const instanceInputField = document.getElementById("fediverse-server");
  const instance = localStorage.getItem("instance");

  if (loginForm) {
    if (instance) {
      instanceInputField.value = instance;
    }

    loginForm.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const loginURL = `${authServerURL}?method=oauth&instance=${instanceInputField.value}&scope=${appScopes}&app=${appName}&environment=${appEnvironment}`;
      window.location.href = loginURL;
    });
  }
};
