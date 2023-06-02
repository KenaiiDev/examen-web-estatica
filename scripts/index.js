document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  //get data from local storage
  const prevData = JSON.parse(localStorage.getItem("data"));
  if (prevData) {
    window.location.href = "categories.html";
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const errorSpan = document.querySelector(".error");
    let error = false;
    const data = {
      name: formData.get("name"),
      birth: formData.get("birth"),
    };
    if (data.name === "") {
      errorSpan.textContent = "Name is required";
      error = true;
    }

    const hasNumber = /\d/;
    if (hasNumber.test(data.name)) {
      errorSpan.textContent = "Name cannot contain numbers";
      error = true;
    }

    if (!error) {
      localStorage.setItem("data", JSON.stringify(data));
      window.location.href = "categories.html";
    }
  });
});
