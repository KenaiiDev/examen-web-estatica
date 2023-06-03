const data = JSON.parse(localStorage.getItem("data"));
if (!data) {
  window.location.href = "../../index.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const { name, birth } = data;

  const logoutLink = document.getElementById("logout");

  logoutLink.addEventListener("click", () => {
    localStorage.removeItem("data");
    window.location.href = "../../index.html";
  });

  const audioPlayer = document.getElementById("audio-player");
  const musicButton = document.querySelector(".music-button");

  musicButton.addEventListener("click", () => {
    audioPlayer.classList.toggle("visible");
  });

  const presentation = document.querySelector("#presentation");

  presentation.innerText = `Bienvenido, ${name}!`;
});
