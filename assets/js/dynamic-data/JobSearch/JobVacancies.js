const API_URL = "http://68.183.219.229:7891/api";
// const PROXY_URL = "http://localhost:8080";

console.log("JobVacancies");
fetch(`${API_URL}/admin/vacancy_categories`, {
  method: "GET",
  headers: {
    authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MzBmZTFiYi02NzQzLTQ4MTItYTJhOC04MGY0OWE1YWUxYjciLCJqdGkiOiJjMjc4NTAzMWZkYTk4YjFjODM2OWYzMmYyODBhYTBmN2NiN2Q4YTQ1NjAwYTAzYmIxY2E5ZTMzMzA3ZDY3MDg5ZWU4MDExNTEwZWQzNTc3MSIsImlhdCI6MTYxNjk2NjIwOSwibmJmIjoxNjE2OTY2MjA5LCJleHAiOjE2NDg1MDIyMDksInN1YiI6IjIiLCJzY29wZXMiOltdfQ.DrzDvmpG5lIygLjjoUIzXbeCFtBNCMjBFB3LXTqYo61h_oVbzaYvgWC1wEap2A5xOgodCmV1Vr2kdDX06lTgSFT-JWmehdShFmIvvGDTL4GGO4zaSFFooJDi3gUj0QjhvrHu0omQxu4IltL3iuHjY1QqPr_ph0hYQgSlgRCIPsUqNMATOf-fcOhJ2SD__29LKXDhx0CHN_bovytmTeS_2N3__TcKF27oSWxexeaSGnl3j1_0SmmCdHmMShjEgyRtIpDg3sgk8AoSBDCo_rRe7yOFjEqBLxLKvcmXsnvHlyl9nmYjSq3x5VULqTjRXCPQdQ8qlR-0H0wDeVOWEQyf307O7b0F-uoUWDdPwGiEgnvTd3_A3Labqr9d-CrBAFHzw-c7JFa7lgJ9JNbjlsZDE3SZ-41CI6KUfmMcbjU23AWiMIv_bjWp8iNOJlT1xjCJUkHUeX-9Cmjq18V8Ydk37ExpkC1lwGthksgFySxkr7woSshiSHFtKk2fb5yIgOMXCupnkF6VBB7rqkrjMJgCVk0xXKUMUIvyzvPKIsu7JQVvA-4GHlgzWUC0aFOMMIa-gJOLno0RPnM-KID5RgnhxD3S1TG8AJ0hDONv1M_EAIwa-1AUbqRzUxrwVurOCkYSas0FWzNncwxnlVJOv4JldxHZarsPleGgIRyudx_uk2U",
  },
})
  .then((res) => {
    res.json().then((data) => {
      const html = data.result
        .sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at);
        })
        .map((res) => {
          return `
                    <option value="${res.id}">${res.name}</option>      
                `;
        })
        .join("");

      var lists = document.getElementById("category_container");
      const htmlSection = `<select id="vacancy_category" class="form-input form-input_border black js-pointer-small" readonly name="department">
      <option value="-1">All</option> 
      ${html}</select>`;
      lists.insertAdjacentHTML("afterbegin", htmlSection);

      $(function () {
        $("select").selectize({});
      });
    });
  })
  .catch(console.log);

// search jobs
var form = document.getElementById("job_search");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var jobName = document.getElementById("job_name");
  var vacancyCategory = document.getElementById("vacancy_category");
  console.log(jobName.value, vacancyCategory.value);
  fetch(`${API_URL}/admin/vacancies?limit=100&offset=0`, {
    method: "GET",
  }).then((res) => {
    res.json().then((data) => {
      const vacancyItemsHtml =
        vacancyCategory.value.toString() === "-1"
          ? data.result
              .sort((a, b) => {
                return new Date(b.created_at) - new Date(a.created_at);
              })
              .filter((job) => job.vacancy_type !== "intern")
              .map((item) => {
                return `
          <div id="vacancy_lists" class="accordion accordion_underline js-accordion" style="padding-bottom: 10px;">
          <div class="flex-container" style="text-align: center;justify-content: space-between;display:grid;grid-template-columns:1fr 1fr 1fr">
            <div class="text-color-black">
              <h6 class="headline-xxxs margin-top-20 text-color-black" style="margin-bottom: 5px;font-weight: 300;text-align:left">
                ${item.name}
              </h6>
            </div>
            <div class="text-color-black">
              <h6 class="headline-xxxs margin-top-20 text-color-black" style="margin-bottom: 5px; font-weight: 300;text-align:center">
                ${convertDateFormat(item.expire_date)}
              </h6>
            </div>
            <a href="./jobdescription.html?id=${
              item.id
            }" class="border-btn js-pointer-large js-animsition-link" style="height: fit-content;width: fit-content;justify-self: flex-end;margin-top:10px">
              <span class="border-btn__inner text-color-black">Detail </span>
              <span class="border-btn__lines-1"></span>
              <span class="border-btn__lines-2"></span>
            </a>
          </div>
        </div> 
                    `;
              })
              .join("")
          : data.result
              .sort((a, b) => {
                return new Date(b.created_at) - new Date(a.created_at);
              })
              .filter(
                (vacancy) =>
                  vacancy.vacancy_category_id.toString() ===
                  vacancyCategory.value.toString()
              )
              .filter((job) => job.vacancy_type !== "intern")
              .map((item) => {
                return `
          <div id="vacancy_lists" class="accordion accordion_underline js-accordion" style="padding-bottom: 10px;">
          <div class="flex-container" style="text-align: center;justify-content: space-between;display:grid;grid-template-columns:1fr 1fr 1fr">
            <div class="text-color-black">
              <h6 class="headline-xxxs margin-top-20 text-color-black" style="margin-bottom: 5px;font-weight: 300;text-align:left">
                ${item.name}
              </h6>
            </div>
            <div class="text-color-black">
              <h6 class="headline-xxxs margin-top-20 text-color-black" style="margin-bottom: 5px; font-weight: 300;text-align:center">
                ${convertDateFormat(item.expire_date)}
              </h6>
            </div>
            <a href="./jobdescription.html?id=${
              item.id
            }" class="border-btn js-pointer-large js-animsition-link" style="height: fit-content;width: fit-content;justify-self: flex-end;margin-top:10px">
              <span class="border-btn__inner text-color-black">Detail</span>
              <span class="border-btn__lines-1"></span>
              <span class="border-btn__lines-2"></span>
            </a>
          </div>
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

      document.getElementById("job_list").innerHTML = `${
        vacancyItemsHtml
          ? `<div class="accordion accordion_underline js-accordion"> ${vacancyItemsHtml}</div>`
          : `<div class="accordion accordion_underline js-accordion"> No available Vacancy try another position</div>`
      }`;
      triggerAccordion();
    });
  });
});

//Vacancy Listing
fetch(`${API_URL}/admin/vacancies?limit=100&offset=0`, {
  method: "GET",
})
  .then((res) => {
    res.json().then((data) => {
      console.log("Vacancy List", data.result);
      const html = data.result
        .sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at);
        })
        .filter((job) => job.vacancy_type !== "intern")
        .map((res) => {
          return `
              <div id="vacancy_lists" class="accordion accordion_underline js-accordion" style="padding-bottom: 10px;">
                <div class="flex-container" style="text-align: center;justify-content: space-between;display:grid;grid-template-columns:1fr 1fr 1fr">
                  <div class="text-color-black">
                    <h6 class="headline-xxxs margin-top-20 text-color-black" style="margin-bottom: 5px;font-weight: 300;text-align:left">
                      ${res.name}
                    </h6>
                  </div>
                  <div class="text-color-black">
                    <h6 class="headline-xxxs margin-top-20 text-color-black" style="margin-bottom: 5px; font-weight: 300;text-align:center">
                      ${convertDateFormat(res.expire_date)}
                    </h6>
                  </div>
                  <a href="./jobdescription.html?id=${
                    res.id
                  }" class="border-btn js-pointer-large js-animsition-link" style="height: fit-content;width: fit-content;justify-self: flex-end;margin-top:10px">
                    <span class="border-btn__inner text-color-black">Detail</span>
                    <span class="border-btn__lines-1"></span>
                    <span class="border-btn__lines-2"></span>
                  </a>
                </div>
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
      document.getElementById("job_list").innerHTML = html;
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
        .sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at);
        })
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
    body: JSON.stringify({ email: email }),
    headers: {
      "Content-Type": "application/json; charset= UTF-8",
      authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MzBmZTFiYi02NzQzLTQ4MTItYTJhOC04MGY0OWE1YWUxYjciLCJqdGkiOiJjMjc4NTAzMWZkYTk4YjFjODM2OWYzMmYyODBhYTBmN2NiN2Q4YTQ1NjAwYTAzYmIxY2E5ZTMzMzA3ZDY3MDg5ZWU4MDExNTEwZWQzNTc3MSIsImlhdCI6MTYxNjk2NjIwOSwibmJmIjoxNjE2OTY2MjA5LCJleHAiOjE2NDg1MDIyMDksInN1YiI6IjIiLCJzY29wZXMiOltdfQ.DrzDvmpG5lIygLjjoUIzXbeCFtBNCMjBFB3LXTqYo61h_oVbzaYvgWC1wEap2A5xOgodCmV1Vr2kdDX06lTgSFT-JWmehdShFmIvvGDTL4GGO4zaSFFooJDi3gUj0QjhvrHu0omQxu4IltL3iuHjY1QqPr_ph0hYQgSlgRCIPsUqNMATOf-fcOhJ2SD__29LKXDhx0CHN_bovytmTeS_2N3__TcKF27oSWxexeaSGnl3j1_0SmmCdHmMShjEgyRtIpDg3sgk8AoSBDCo_rRe7yOFjEqBLxLKvcmXsnvHlyl9nmYjSq3x5VULqTjRXCPQdQ8qlR-0H0wDeVOWEQyf307O7b0F-uoUWDdPwGiEgnvTd3_A3Labqr9d-CrBAFHzw-c7JFa7lgJ9JNbjlsZDE3SZ-41CI6KUfmMcbjU23AWiMIv_bjWp8iNOJlT1xjCJUkHUeX-9Cmjq18V8Ydk37ExpkC1lwGthksgFySxkr7woSshiSHFtKk2fb5yIgOMXCupnkF6VBB7rqkrjMJgCVk0xXKUMUIvyzvPKIsu7JQVvA-4GHlgzWUC0aFOMMIa-gJOLno0RPnM-KID5RgnhxD3S1TG8AJ0hDONv1M_EAIwa-1AUbqRzUxrwVurOCkYSas0FWzNncwxnlVJOv4JldxHZarsPleGgIRyudx_uk2U",
    },
  }).then((res) => {
    res.json().then((res) => {
      const data = res.result;
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
