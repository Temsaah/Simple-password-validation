let input = document.getElementById("pass");
let allLis = document.querySelectorAll("#list li");
let viewPass = document.getElementById("viewpass");

viewPass.addEventListener("click", function () {
  if (input.type === "password") {
    input.setAttribute("type", "text");
    viewPass.className = `${viewPass.className}-slash`;
  } else {
    input.setAttribute("type", "password");
    viewPass.className = `fa-solid fa-eye`;
  }
});

input.onkeydown = function (e) {
  if (e.keyCode === 32) {
    return false;
  }
};

const rules = [
  { regex: /.{8,}/ },
  { regex: /[0-9]/ },
  { regex: /[a-z]/ },
  { regex: /[A-Z]/ },
  { regex: /[^\w]/ },
];

input.onkeyup = function (e) {
  rules.forEach(function (ele, index) {
    const isValid = ele.regex.test(input.value);
    const listItem = allLis[index];
    if (isValid) {
      listItem.firstElementChild.className = "fa-solid fa-check fa-lg";
      listItem.classList.add("valid");
    } else {
      listItem.firstElementChild.className = "fa-solid fa-circle";
      listItem.classList.remove("valid");
    }
  });
};
