const form = document.querySelector(".sign-up");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fomrData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
});
