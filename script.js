document.addEventListener("DOMContentLoaded", (event) => {
  const checkboxes = document.querySelectorAll(".check-item");
  const resetButton = document.getElementById("reset-button");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      checkbox.parentElement.classList.toggle("completed", checkbox.checked);
    });
  });

  resetButton.addEventListener("click", () => {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
      checkbox.parentElement.classList.remove("completed");
    });
  });
});
