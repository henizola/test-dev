// const API_URL = `https://api.bgiethiopia.com/api`;
// const API_URL = `http://127.0.0.1:7891/api`;
const API_URL = `http://68.183.219.229:7891/api`;
// const PROXY_URL = "http://localhost:8080";

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

//Vacancy Lisiting
fetch(`${API_URL}/admin/vacancies?limit=100&offset=0`, {
  method: "GET",
})
  .then((res) => {
    res.json().then((data) => {
      console.log("Vacancy List", data.result);
      const idFromURL = getParameterByName("id", window.location.href);
      const filteredData = data.result.filter(
        (res) => res.id.toString() === idFromURL.toString()
      );

      const html = filteredData
        .map((res) => {
          return ` 
                    

          <div class="flex-container">
          <div class="twelve-columns column-50-100 padding-top-1">

              <h1 class="headline text-color-black text-center">${res.name}</h1>
              <br><br>
          </div>

          <div class="flex-container" style='width:100%;margin-bottom:10px'>
          <div class="twelve-columns  column-50-100 padding-top-1 text-center">
              <br><br>
              <p class="body-text-l text-color-black "
                  style="text-align: left; background: rgba(166,162,176,0.3); padding:10px;">
                  <span style="font-size: 20px; font-weight:400; ">1. Job Summary </span>
                  <br>
              </p>

          </div>

      </div>
              <p class="body-text-l text-color-black " style="text-align: left; ">
                  <span style="font-size: 18px;  line-height: 34px;   padding-left: 0px;">${
                    res.description
                  }</span>
              </p>
              ${
                res.responsibilities.length &&
                `  <div class="flex-container" style='width:100%;margin-bottom:10px'>
              <div class="twelve-columns  column-50-100 padding-top-1 text-center">
                  <br><br>
                  <p class="body-text-l text-color-black "
                      style="text-align: left; background: rgba(166,162,176,0.3); padding:10px;">
                      <span style="font-size: 20px; font-weight:400; ">2. Main Duties and Responsibilities </span>
                      <br>
                  </p>

              </div>`
              }

          </div>
              <ul class='desc_list'>
              ${res.responsibilities
                .map(
                  (responsibility) => `<li>
                <p class="body-text-l text-color-black " style="text-align: left; ">
                <span style="font-size: 18px;  line-height: 34px;   padding-left: 0px;"> ${responsibility.value}</span>
            </p>
               </li>`
                )
                .join("")}
            </ul>


           ${
             res.requirements.length &&
             ` <div class="flex-container" style='width:100%;margin-bottom:10px'>
            <div class="twelve-columns  column-50-100 padding-top-1 text-center">
                <br><br>
                <p class="body-text-l text-color-black "
                    style="text-align: left; background: rgba(166,162,176,0.3); padding:10px;">
                    <span style="font-size: 20px; font-weight:400; ">3. Job Requirements</span>
                    <br>
                </p>

            </div>`
           }

        </div>
            <ul class='desc_list'>
            ${res.requirements
              .map(
                (responsibility) => `<li>
              <p class="body-text-l text-color-black " style="text-align: left; ">
              <span style="font-size: 18px;  line-height: 34px;   padding-left: 0px;"> ${responsibility.value}</span>
          </p>
             </li>`
              )
              .join("")}
          </ul>


          ${
            res.educations.length &&
            `  <div class="flex-container" style='width:100%;margin-bottom:10px'>
          <div class="twelve-columns  column-50-100 padding-top-1 text-center">
              <br><br>
              <p class="body-text-l text-color-black "
                  style="text-align: left; background: rgba(166,162,176,0.3); padding:10px;">
                  <span style="font-size: 20px; font-weight:400; "> 3.1 Education</span>
                  <br>
              </p>

          </div>

      </div>
          <ul class='desc_list'>
          ${res.educations
            .map(
              (
                educations
              ) => `<li> <p class="body-text-l text-color-black " style="text-align: left; ">
            <span style="font-size: 18px;  line-height: 34px;   padding-left: 0px;"> ${educations.value}</span>
        </p></li>`
            )
            .join("")}
        </ul>`
          }

      ${
        res.experiences.length &&
        `  <div class="flex-container" style='width:100%;margin-bottom:10px'>
        <div class="twelve-columns  column-50-100 padding-top-1 text-center">
            <br><br>
            <p class="body-text-l text-color-black "
                style="text-align: left; background: rgba(166,162,176,0.3); padding:10px;">
                <span style="font-size: 20px; font-weight:400; ">3.2 Experience</span>
                <br>
            </p>

        </div>

    </div>
        <ul class='desc_list'>
        ${res.experiences
          .map(
            (
              experiences
            ) => `<li><p class="body-text-l text-color-black " style="text-align: left; ">
          <span style="font-size: 18px;  line-height: 34px;   padding-left: 0px;">${experiences.value}</span>
      </p></li>`
          )
          .join("")}
      </ul>`
      }
      ${
        res.competencies.length &&
        `   <div class="flex-container" style='width:100%;margin-bottom:10px'>
      <div class="twelve-columns  column-50-100 padding-top-1 text-center">
          <br><br>
          <p class="body-text-l text-color-black "
              style="text-align: left; background: rgba(166,162,176,0.3); padding:10px;">
              <span style="font-size: 20px; font-weight:400; ">3.3 General Competencies</span>
              <br>
          </p>

      </div>

  </div>
      <ul class='desc_list'>
      ${res.competencies
        .map(
          (
            competencies
          ) => `<li><p class="body-text-l text-color-black " style="text-align: left; ">
        <span style="font-size: 18px;  line-height: 34px;   padding-left: 0px;">${competencies.value}</span>
    </p></li>`
        )
        .join("")}
    </ul>

       `
      }
      ${
        res.language_req &&
        `   <div class="flex-container" style='width:100%;margin-bottom:10px'>
      <div class="twelve-columns  column-50-100 padding-top-1 text-center">
          <br><br>
          <p class="body-text-l text-color-black "
              style="text-align: left; background: rgba(166,162,176,0.3); padding:10px;">
              <span style="font-size: 20px; font-weight:400; ">3.4 Language</span>
              <br>
          </p>

      </div>

  </div>
      <ul class='desc_list'>
     <li><p class="body-text-l text-color-black " style="text-align: left; ">
        <span style="font-size: 18px;  line-height: 34px;   padding-left: 0px;">${res.language_req}</span>
    </p></li>
      
    </ul>`
      }



    

         
      </div>
      <div style="width:100%;margin-top:30px;">
      <a  href="./cv_submit.html?id=${
        res.id
      }" class=" js-pointer-large js-animsition-link"style="color:#fff;cursor: pointer;background-color: #d10020;bordeR:2px solid white;margin-left:45%;padding:10px 20px">
        <span class="border-btn__inner text-color-white">Apply</span>
        <span class="border-btn__lines-1"></span>
        <span class="border-btn__lines-2"></span>
    </a>          
            </div>
               




            `;
        })
        .join("");

      function convertDateFormat(dateString) {
        const date = new Date(dateString);
        const day = String(date.getUTCDate()).padStart(2, "0");
        const month = String(date.getUTCMonth() + 1).padStart(2, "0");
        const year = date.getUTCFullYear();
        return `${day}-${month}-${year}`;
      }
      document.getElementById("cv_form").innerHTML = html;
      triggerAccordion();
      var message = document.getElementById("message");

      var container = document.getElementById("jobs-avail");

      data.result.length && message.classList.add("display-none");

      data.result.length && container.classList.remove("padding-top-bottom-90");

      data.result.length && container.classList.add("padding-top-bottom-60");
    });
  })
  .catch(console.log);

//Vacancies BOX
fetch(`${API_URL}/admin/vacancies?is_active=1`, {
  method: "GET",
})
  .then((res) => {
    res.json().then((data) => {
      console.log("Vacancy List", data.result);
      const html = data.result
        .map((vacancy) => {
          return ` 
                    <div class="three-columns column-50-100 padding-top-1 text-center ">
                        <a class="text-color-black jobpost" href="${vacancy.redirect_url}">${vacancy.name}<br>(${vacancy.position} open Positions)</a>
                    </div>
                    `;
        })
        .join("");
      document
        .getElementById("vacancies")
        .insertAdjacentHTML("afterbegin", html);
      triggerAccordion();
    });
  })
  .catch(console.log);

//newsletter
var form = document.getElementById("newsletterform");

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
    // console.log(res)
    res.json().then((res) => {
      const data = res.result;
      // console.log(res)
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

function triggerAccordion() {
  $(
    ".js-accordion-first-active .js-accordion-tab:first-child .js-accordion-btn"
  )
    .addClass("js-accordion-active")
    .next()
    .slideDown();

  $(".js-accordion-btn").on("click", function (j) {
    var dropDown = $(this)
      .closest(".js-accordion-tab")
      .find(".js-accordion-content");

    $(this)
      .closest(".js-accordion")
      .find(".js-accordion-content")
      .not(dropDown)
      .slideUp();

    if ($(this).hasClass("js-accordion-active")) {
      $(this).removeClass("js-accordion-active");
    } else {
      $(this)
        .closest(".js-accordion")
        .find(".js-accordion-btn.js-accordion-active")
        .removeClass("js-accordion-active");
      $(this).addClass("js-accordion-active");
    }

    dropDown.stop(false, true).slideToggle();

    j.preventDefault();
  });
}
