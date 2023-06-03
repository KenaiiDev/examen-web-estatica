window.addEventListener("DOMContentLoaded", () => {
  const logoutButton = document.querySelector("#logout");

  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("data");
    window.location.href = "../../index.html";
  });
});
