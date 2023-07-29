const API_URL = `https://api.bgiethiopia.com/api`;
const params = new URL(window.location.href).searchParams;
if (params.get("search_word")) {
  var searchWord = (document.getElementById("search_word_value").value =
    params.get("search_word"));
  fetch(`${API_URL}/admin/search?search=${params.get("search_word")}`, {
    method: "GET",
  }).then((res) => {
    // console.log(res)
    res.json().then((res) => {
      const data = res.result;
      const html = data
        .map((res) => {
          return ` 
                <div class="card-box">
                <a href="${
                  res.type == "NewsFeed"
                    ? "story/detail/newsfeed_detail.html?id=" + res.id
                    : res.type == "Events"
                    ? "story/detail/event_detail.html?id=" + res.id
                    : "story/home_stories_detail.html?id=" + res.id
                }">
                        <p class="body-text-l text-color-black" style="font-size:20px;">${
                          res.title
                        }</p>
                        <p class="body-text-l text-color-black card-date">${new Date(
                          res.created_at
                        ).toLocaleString("en-US", {
                          month: "long",
                          day: "2-digit",
                          year: "numeric",
                        })}</p>
                    </a>
                </div>
      `;
        })
        .join("");
      document.getElementById(
        "search_result_count"
      ).innerText = `${data.length} Results`;
      document.getElementById("search_results").innerHTML = html;
      console.log("Search Result", data);
    });
  });
}

//Search Form
var searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var searchWord = document.getElementById("search_word_value").value;
  var searchWordType = document.getElementById("search_word_type").value;
  fetch(
    `${API_URL}/admin/search?search=${searchWord}&search_type=${searchWordType}`,
    {
      method: "GET",
    }
  ).then((res) => {
    // console.log(res)
    res.json().then((res) => {
      const data = res.result;
      const html = data
        .map((res) => {
          return ` 
                    <div class="card-box">
                    <a href="${
                      res.type == "NewsFeed"
                        ? "story/detail/newsfeed_detail.html?id=" + res.id
                        : res.type == "Events"
                        ? "story/detail/event_detail.html?id=" + res.id
                        : "story/home_stories_detail.html?id=" + res.id
                    }">
                            <p class="body-text-l text-color-black" style="font-size:20px;">${
                              res.title
                            }</p>
                            <p class="body-text-l text-color-black card-date">${new Date(
                              res.created_at
                            ).toLocaleString("en-US", {
                              month: "long",
                              day: "2-digit",
                              year: "numeric",
                            })}</p>
                        </a>
                    </div>
          `;
        })
        .join("");
      document.getElementById(
        "search_result_count"
      ).innerText = `${data.length} Results`;
      document.getElementById("search_results").innerHTML = html;
      console.log("Search Result", data);
    });
  });
});

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
