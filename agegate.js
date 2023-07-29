//Birth Date Calculator

// String.prototype.explode = function (separator, limit) {
//     const array = this.split(separator);
//     if (limit !== undefined && array.length >= limit) {
//         array.push(array.splice(limit - 1).join(separator));
//     }
//     return array;
// };

var form = document.getElementById("age-check");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var monthValue = document.getElementById("month-input").value;
  var yearValue = document.getElementById("year-input").value;

  const age = getAge(new Date(`01/${monthValue}/${yearValue}`));
  console.log(age);

  if (age >= 21) {
    document.cookie = `age_verified=${true}`;
    // location.pathname = location.pathname.replace(
    //   /(.*)\/[^/]*/,
    //   "$1/" + "/home.html"
    // );

    $("#exampleModal").modal("hide");

    monthValue = undefined;
    yearValue = undefined;
    // window.location.pathname = "/home.html"
  } else {
    if (monthValue && yearValue) {
      location = "https://www.youtube.com/watch?v=5ZCgbGgA-_8";
    }
  }
});

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
