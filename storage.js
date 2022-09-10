document.getElementById("add-btn").addEventListener("click", function () {
  const namefield = document.getElementById("name-field");
  const nameValue = namefield.value;
  localStorage.setItem("name", nameValue);
});

document.getElementById("remove-btn").addEventListener("click", function () {
  localStorage.removeItem("name");
});

document.getElementById("add-age-btn").addEventListener("click", function () {
  const ageField = document.getElementById("age-field");
  const ageValue = ageField.value;
  localStorage.setItem("age", ageValue);
});

document
  .getElementById("remove-age-btn")
  .addEventListener("click", function () {
    localStorage.removeItem("age");
  });

document.getElementById("clear-btn").addEventListener("click", function () {
  localStorage.clear();
});
