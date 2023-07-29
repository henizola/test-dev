const API_URL = `https://api.bgiethiopia.com/api`;
// const API_URL = `http://127.0.0.1:7891/api`;
const DEFAULT_LIMIT = 6;

//fHistories
fetch(
  `${API_URL}/admin/histories?:limit=${DEFAULT_LIMIT}&offset=0&is_published=1`,
  {
    method: "GET",
    headers: {
      authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MzBmZTFiYi02NzQzLTQ4MTItYTJhOC04MGY0OWE1YWUxYjciLCJqdGkiOiJjMjc4NTAzMWZkYTk4YjFjODM2OWYzMmYyODBhYTBmN2NiN2Q4YTQ1NjAwYTAzYmIxY2E5ZTMzMzA3ZDY3MDg5ZWU4MDExNTEwZWQzNTc3MSIsImlhdCI6MTYxNjk2NjIwOSwibmJmIjoxNjE2OTY2MjA5LCJleHAiOjE2NDg1MDIyMDksInN1YiI6IjIiLCJzY29wZXMiOltdfQ.DrzDvmpG5lIygLjjoUIzXbeCFtBNCMjBFB3LXTqYo61h_oVbzaYvgWC1wEap2A5xOgodCmV1Vr2kdDX06lTgSFT-JWmehdShFmIvvGDTL4GGO4zaSFFooJDi3gUj0QjhvrHu0omQxu4IltL3iuHjY1QqPr_ph0hYQgSlgRCIPsUqNMATOf-fcOhJ2SD__29LKXDhx0CHN_bovytmTeS_2N3__TcKF27oSWxexeaSGnl3j1_0SmmCdHmMShjEgyRtIpDg3sgk8AoSBDCo_rRe7yOFjEqBLxLKvcmXsnvHlyl9nmYjSq3x5VULqTjRXCPQdQ8qlR-0H0wDeVOWEQyf307O7b0F-uoUWDdPwGiEgnvTd3_A3Labqr9d-CrBAFHzw-c7JFa7lgJ9JNbjlsZDE3SZ-41CI6KUfmMcbjU23AWiMIv_bjWp8iNOJlT1xjCJUkHUeX-9Cmjq18V8Ydk37ExpkC1lwGthksgFySxkr7woSshiSHFtKk2fb5yIgOMXCupnkF6VBB7rqkrjMJgCVk0xXKUMUIvyzvPKIsu7JQVvA-4GHlgzWUC0aFOMMIa-gJOLno0RPnM-KID5RgnhxD3S1TG8AJ0hDONv1M_EAIwa-1AUbqRzUxrwVurOCkYSas0FWzNncwxnlVJOv4JldxHZarsPleGgIRyudx_uk2U",
    },
  }
)
  .then((res) => {
    res.json().then((data) => {
      const html = data.result
        .map((res) => {
          return `
                    <section class="lines-section bg-img-cover padding-top-bottom-120" id="h${
                      res.id
                    }" load="myFunction(${res.id})"
                    style="background-image:url(${
                      res.hero_wide_image_url
                    }); background-color: #e51910;">
                    <div class="bg-overlay-black"></div>

                    <div class="lines-container ">
                    <div class="container padding-top-bottom-120">
                        <div class="text-center js-scrollanim">

                        <h2 class="headline-l">
                            <span class="d-block hidden-box">
                            <span class="">${new Date(
                              res.start_date
                            ).toLocaleString("en-US", {
                              year: "numeric",
                            })} - ${new Date(res.end_date).toLocaleString(
            "en-US",
            { year: "numeric" }
          )}<br> ${res.title}</span>
                            </span>

                        </h2>

                        </div>
                    </div>
                    </div>
                    </section>
                <section class="lines-section section-bg-dark-1">
                <div class="lines-container no-lines">
                <div class="container padding-top-bottom-60hs">
                    <div class="flex-container ">
                    <div class="two-offset eight-columns" style="text-align: justify; text-align-last: center;">
                        <p class="body-text-m  js-scrollanim">${
                          res.description
                        }.
                        </p>           
                    </div>
                    </div>
                </div>
                </div>
                </section>                                  
                    `;
        })
        .join("");

      document
        .getElementById("histories-list-container")
        .insertAdjacentHTML("afterbegin", html);
    });
  })
  .catch(console.log);

let limit = DEFAULT_LIMIT;

function myFunction(id) {
  var elmnt = document.getElementById("history" + id);
  elmnt.scrollIntoView();
}

//newsletter
var form = document.getElementById("newsletterform");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var email = document.getElementById("email").value;
  fetch(`${API_URL}/admin/subscribe?:limit=${DEFAULT_LIMIT}&offset=0`, {
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
        console.log(res);
        message.innerHTML = res.message;
      } else {
        const message = document.getElementById("message");
        message.innerHTML = "You have alredy subscribed !";
      }
    });
  });
});
//Search Menu
var form = document.getElementById("menu_search");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var searchWord = document.getElementById("search_word").value;
  console.log("Search Menu", e);
  location.href = "/bgi_search.html?search_word=" + searchWord;
});

function onSearch() {
  var searchWord = document.getElementById("search_word").value;
  console.log("Search Menu", searchWord);
  if (searchWord) {
    location.href = "/bgi_search.html?search_word=" + searchWord;
  }
}
