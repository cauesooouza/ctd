document.addEventListener("DOMContentLoaded", () => {
  const visible = document.getElementById("visibility");
  const visibleConfirm = document.getElementById("visibilityConfirm");
  const password = document.getElementById("password");
  const passwordConfirm = document.getElementById("passwordConfirm");
  visible.addEventListener("click", () => {
    if (password.type === "password") {
      visible.src = "./assets/img/hide.png";
      password.type = "text";
    } else {
      visible.src = "./assets/img/show.png";
      password.type = "password";
    }
  });
  visibleConfirm.addEventListener("click", () => {
    if (passwordConfirm.type === "password") {
      visibleConfirm.src = "./assets/img/hide.png";
      passwordConfirm.type = "text";
    } else {
      visibleConfirm.src = "./assets/img/show.png";
      passwordConfirm.type = "password";
    }
  });
});
