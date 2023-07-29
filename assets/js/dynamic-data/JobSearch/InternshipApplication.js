// const API_URL = `https://api.bgiethiopia.com/api`;
// const API_URL = `http://127.0.0.1:7891/api`;
const API_URL = `http://68.183.219.229:7891/api`;
// const PROXY_URL = "http://localhost:8080";
const params = new URL(window.location.href).searchParams;

//Cv Submit
var form = document.getElementById("intern_form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var full_name = document.getElementById("full_name").value;
  var gender = document.getElementById("gender").value;
  var date_of_birth = document.getElementById("date_of_birth").value;
  var location = document.getElementById("location").value;
  var phone = document.getElementById("phone").value;
  var phone_secondary = document.getElementById("phone_secondary").value;
  var email = document.getElementById("email").value;
  var email_secondary = document.getElementById("email_secondary").value;
  var field_of_study = document.getElementById("field_of_study").value;
  var coverLetter = document.getElementById("cover_letter").files[0];

  // Create a new FormData object
  var formData = new FormData();

  // Append each field and its value to the FormData object
  formData.append("vacancy_id", "4");
  formData.append("full_name", full_name);
  formData.append("gender", gender);
  formData.append("date_of_birth", date_of_birth);
  formData.append("location", location);
  formData.append("phone", phone);
  formData.append("phone_secondary", phone_secondary);
  formData.append("email", email);
  formData.append("email_secondary", email_secondary);
  formData.append("cover_letter_file", coverLetter);

  formData.append(`question_answers[0][question]`, "Where did you study?");
  formData.append(`question_answers[0][answer]`, field_of_study);

  fetch(`${API_URL}/admin/job_applicant`, {
    method: "POST",
    body: formData,
    headers: {
      authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MzBmZTFiYi02NzQzLTQ4MTItYTJhOC04MGY0OWE1YWUxYjciLCJqdGkiOiJjMjc4NTAzMWZkYTk4YjFjODM2OWYzMmYyODBhYTBmN2NiN2Q4YTQ1NjAwYTAzYmIxY2E5ZTMzMzA3ZDY3MDg5ZWU4MDExNTEwZWQzNTc3MSIsImlhdCI6MTYxNjk2NjIwOSwibmJmIjoxNjE2OTY2MjA5LCJleHAiOjE2NDg1MDIyMDksInN1YiI6IjIiLCJzY29wZXMiOltdfQ.DrzDvmpG5lIygLjjoUIzXbeCFtBNCMjBFB3LXTqYo61h_oVbzaYvgWC1wEap2A5xOgodCmV1Vr2kdDX06lTgSFT-JWmehdShFmIvvGDTL4GGO4zaSFFooJDi3gUj0QjhvrHu0omQxu4IltL3iuHjY1QqPr_ph0hYQgSlgRCIPsUqNMATOf-fcOhJ2SD__29LKXDhx0CHN_bovytmTeS_2N3__TcKF27oSWxexeaSGnl3j1_0SmmCdHmMShjEgyRtIpDg3sgk8AoSBDCo_rRe7yOFjEqBLxLKvcmXsnvHlyl9nmYjSq3x5VULqTjRXCPQdQ8qlR-0H0wDeVOWEQyf307O7b0F-uoUWDdPwGiEgnvTd3_A3Labqr9d-CrBAFHzw-c7JFa7lgJ9JNbjlsZDE3SZ-41CI6KUfmMcbjU23AWiMIv_bjWp8iNOJlT1xjCJUkHUeX-9Cmjq18V8Ydk37ExpkC1lwGthksgFySxkr7woSshiSHFtKk2fb5yIgOMXCupnkF6VBB7rqkrjMJgCVk0xXKUMUIvyzvPKIsu7JQVvA-4GHlgzWUC0aFOMMIa-gJOLno0RPnM-KID5RgnhxD3S1TG8AJ0hDONv1M_EAIwa-1AUbqRzUxrwVurOCkYSas0FWzNncwxnlVJOv4JldxHZarsPleGgIRyudx_uk2U",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data && data.status) {
        document.getElementById("successMessage").innerHTML = `
        <p class="body-text-l text-color-black " style="text-align: left; ">
        <span style="line-height: 34px; font-size:22px;color:green ">Your application was successful. Thank you.</span>
    </p>`;
        const form = document.getElementById("cv_form");
        const inputFields = form.querySelectorAll("input");

        inputFields.forEach((input) => {
          input.value = ""; // Set the input value to an empty string
        });
      } else {
        alert(data.message);
        console.log(data);
      }
    });
});
form = document.getElementById("newsletterform");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var email = document.getElementById("email").value;
  fetch(`${API_URL}/admin/subscribe?:limit=1&offset=0`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
    }),

    headers: {
      "Content-Type": "application/json; charset= UTF-8",
      authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MzBmZTFiYi02NzQzLTQ4MTItYTJhOC04MGY0OWE1YWUxYjciLCJqdGkiOiJjMjc4NTAzMWZkYTk4YjFjODM2OWYzMmYyODBhYTBmN2NiN2Q4YTQ1NjAwYTAzYmIxY2E5ZTMzMzA3ZDY3MDg5ZWU4MDExNTEwZWQzNTc3MSIsImlhdCI6MTYxNjk2NjIwOSwibmJmIjoxNjE2OTY2MjA5LCJleHAiOjE2NDg1MDIyMDksInN1YiI6IjIiLCJzY29wZXMiOltdfQ.DrzDvmpG5lIygLjjoUIzXbeCFtBNCMjBFB3LXTqYo61h_oVbzaYvgWC1wEap2A5xOgodCmV1Vr2kdDX06lTgSFT-JWmehdShFmIvvGDTL4GGO4zaSFFooJDi3gUj0QjhvrHu0omQxu4IltL3iuHjY1QqPr_ph0hYQgSlgRCIPsUqNMATOf-fcOhJ2SD__29LKXDhx0CHN_bovytmTeS_2N3__TcKF27oSWxexeaSGnl3j1_0SmmCdHmMShjEgyRtIpDg3sgk8AoSBDCo_rRe7yOFjEqBLxLKvcmXsnvHlyl9nmYjSq3x5VULqTjRXCPQdQ8qlR-0H0wDeVOWEQyf307O7b0F-uoUWDdPwGiEgnvTd3_A3Labqr9d-CrBAFHzw-c7JFa7lgJ9JNbjlsZDE3SZ-41CI6KUfmMcbjU23AWiMIv_bjWp8iNOJlT1xjCJUkHUeX-9Cmjq18V8Ydk37ExpkC1lwGthksgFySxkr7woSshiSHFtKk2fb5yIgOMXCupnkF6VBB7rqkrjMJgCVk0xXKUMUIvyzvPKIsu7JQVvA-4GHlgzWUC0aFOMMIa-gJOLno0RPnM-KID5RgnhxD3S1TG8AJ0hDONv1M_EAIwa-1AUbqRzUxrwVurOCkYSas0FWzNncwxnlVJOv4JldxHZarsPleGgIRyudx_uk2U",
    },
  }).then((res) => {
    res.json().then((res) => {
      const data = res.result;
      console.log(res);
      if (data && res.status) {
        const message = document.getElementById("message");
        message.append(res.message);
      } else {
        const message = document.getElementById("message");
        message.append(res.message);
      }
    });
  });
});
