window.addEventListener("DOMContentLoaded", () => {
  const atpAnchor = document.getElementById("atp");
  const horrorAnchor = document.getElementById("horror");
  const atpAudio = document.getElementById("atp-audio");
  const horrorAudio = document.getElementById("horror-audio");

  const dialog = document.querySelector("#dialog");
  const button = document.querySelector("button");

  const data = JSON.parse(localStorage.getItem("data"));

  const birth = new Date(data.birth);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const month = today.getMonth() - birth.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  if (age < 16) {
    window.location.href = "./tales/tales-stories-selection.html";
  }

  dialog.showModal();

  button.addEventListener("click", () => {
    let cycles = 2;
    button.innerText = `Cerrando en ${cycles + 1}...`;
    const interval = setInterval(() => {
      if (cycles === 0) {
        dialog.close();
        clearInterval(interval);
        return;
      }
      button.innerText = `Cerrando en ${cycles}...`;
      cycles--;
    }, 1000);
  });

  atpAnchor.addEventListener("mouseover", () => {
    atpAudio.currentTime = 0;
    atpAudio.play();
  });

  atpAnchor.addEventListener("mouseout", () => {
    atpAudio.pause();
  });

  horrorAnchor.addEventListener("mouseout", () => {
    horrorAudio.pause();
  });

  horrorAnchor.addEventListener("mouseover", () => {
    horrorAudio.currentTime = 0;
    horrorAudio.play();
  });
});
