document.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(localStorage.getItem("data"));

  if (
    window.location.href.includes("horror/") ||
    window.location.href.includes("tales/")
  ) {
    if (!data) {
      window.location.href = "../../index.html";
    }
  } else {
    if (!data) {
      window.location.href = "../index.html";
    }
  }
});
