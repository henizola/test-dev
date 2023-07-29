let monthValue;
let yearValue;
let monthInput = document.getElementById("month-input");
let yearInput = document.getElementById("year-input");

monthInput.addEventListener("change", () => {
  monthValue = monthInput.value;
});

yearInput.addEventListener("change", () => {
  yearValue = yearInput.value;
});

function checkAgeAndRedirect() {
  const age = getAge(new Date(`01/${monthValue}/${yearValue}`));
  if (age >= 21) {
    location.pathname = location.pathname.replace(
      /(.*)\/[^/]*/,
      "$1/" + "/home.html"
    );
    monthInput.value = undefined;
    yearInput.value = undefined;
    // window.location.pathname = "/home.html"
  } else {
    if (monthValue && yearValue) {
      location = "https://www.youtube.com/watch?v=5ZCgbGgA-_8";
    }
  }
}

function getAge(bd) {
  var today = new Date();
  var birthDate = bd;
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
