const API_URL = `https://api.bgiethiopia.com/api`;
// const API_URL = `http://127.0.0.1:7891/api`;
const params = new URL(window.location.href).searchParams;

fetch(
  `${API_URL}/admin/news_feed?id=${params.get(
    "id"
  )}&:news_feed_category=1&:news_feed_images=1&:news_feed_articles=1`,
  {
    method: "GET",
  }
)
  .then((res) => {
    res.json().then((res) => {
      const data = res.result;
      console.log(data.sub_title);
      document.getElementById(
        "up"
      ).style.backgroundImage = `url(${data.hero_image_url})`;
      const html = data.news_feed_articles
        .filter(function (article) {
          return article.title == "TOP";
        })
        .map((res) => {
          return `    
                        <h2 class="headline-l padding-top-30">
                        <span class="d-block hidden-box" style="text-align: center;">
                            <span class="" style="color: #000;font-size: 35px; "> ${
                              res.sub_title != null ? res.sub_title : ""
                            } </span>
                        </span>
                        </h2> 
                            <p class="body-text-s text-color-black"
                            style="text-align: justify;text-align-last:center; padding-top: 0px !important;" >
                            ${res.article}
                            </p>
                            `;
        })
        .join("");

      document
        .getElementById("story_article_container_top")
        .insertAdjacentHTML("afterbegin", html);

      const imgHtml = data.news_feed_images
        .map((res) => {
          return `
                        <div class="padding-top-30  grid-item-33-50-100 js-isotope-filter-grid-item marketing">
                        <div class="grid-margin-box anim-img-scale anim-img-scale_hover js-img-scale">
                            <img src="${res.image_url}" alt="Post">
                        </div>
                        </div>
                        `;
        })
        .join("");

      document
        .getElementById("article_image")
        .insertAdjacentHTML("afterbegin", imgHtml);

      const html2 = data.news_feed_articles
        .filter(function (article) {
          return article.title == "BOTTOM";
        })
        .map((res) => {
          return `    
                        <h2 class="headline-l padding-top-30">
                        <span class="d-block hidden-box" style="text-align: center;">
                            <span class="" style="color: #000;font-size: 35px;">${
                              res.sub_title != null ? res.sub_title : ""
                            } </span>
                        </span>
                        
                        </h2> 
                            <p class="body-text-s text-color-black "
                            style="text-align: justify;text-align-last:center; padding-top: 0px !important;" >
                            ${res.article}
                            </p>
                        `;
        })
        .join("");

      document
        .getElementById("story_article_container_bottom")
        .insertAdjacentHTML("afterbegin", html2);
    });
  })
  .catch(console.log);

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
