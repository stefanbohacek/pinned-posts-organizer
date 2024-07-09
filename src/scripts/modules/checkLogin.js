export default () => {
  const instance = localStorage.getItem("instance");
  const token = localStorage.getItem("token");

  if (!instance || !token) {
    window.location.href = "/";
  }
};
