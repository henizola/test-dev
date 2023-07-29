const API_URL = `https://api.bgiethiopia.com/api`;
// const API_URL = `http://127.0.0.1:7891/api`;
const DEFAULT_LIMIT = 30;

let state = {
  querySet: null,

  page: 1,
  rows: 6,
  window: 5,
  reload: true,
};

//featured news
fetch(
  `${API_URL}/admin/events?:limit=${DEFAULT_LIMIT}&offset=0&is_published=1&date=DESC`,
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
          state.querySet = data.result;
          state.reload = true;
          state.page = 1;
          console.log(data);
          return ` 
                    <article class="padding-top-40 grid-item-33-50-100 js-isotope-filter-grid-item">
                        <div class="grid-margin-box hover-box pos-rel js-touch-hover-scroll">
                            <a href="story/detail/event_detail.html?id=${
                              res.id
                            }" class="d-block pos-rel hidden-box content-bg-dark-1 js-pointer-large js-animsition-link">
                                <img class="  brands" src="${
                                  res.hero_image_url
                                }" alt="">
                                <div class="bg-overlay-black"></div>
                                <h3 class="pos-abs pos-left-bottom pos-left-bottom2 headline-xxxs1">${
                                  res.title
                                }</h3>
                                <h4 class="pos-abs eventdate">${new Date(
                                  res.start_date
                                ).toLocaleString("en-US", {
                                  month: "long",
                                  day: "2-digit",
                                  year: "numeric",
                                })}</h4>
                            </a>
                        </div>
                    </article> 
          `;
        })
        .join("");

      document
        .getElementById("events-list")
        .insertAdjacentHTML("afterbegin", html);
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

const paggination = (querySet, page, rows) => {
  var trimStart = (page - 1) * rows;
  var trimEnd = trimStart + rows;
  const trimmedData = querySet.slice(trimStart, trimEnd);
  // console.log();
  var pages = Math.ceil(querySet.length / rows);
  return {
    querySet: trimmedData,
    pages: pages,
  };
};

//  clears out the pagination wraper and inject buttons based on the number of pages requierd
// chages the value of page number and call teh filter function
function pageButtons(pages) {
  var wraper = document.getElementById("pagination-wraper");

  wraper.innerHTML = "";
  for (var page = 1; page <= pages; page++) {
    wraper.innerHTML += `<button value=${page} class="page-link page-item page" style='border:${
      state.page === page ? "1px solid red" : ""
    }'>${page}</button>`;
  }
  $(".page").on("click", function () {
    $("#events-list").empty();
    console.log(state, "before");

    state.page = parseInt($(this).val());
    console.log(state, "after");
    filter();
  });
}

// filter the news when ever the page is first loaded

setInterval(function () {
  //code goes here that will be run every 5 seconds.
  if (state.reload) {
    state.querySet && filter();
    if (state.querySet) {
      state.reload = false;
    }
  }

  if (state.page === 1) {
    document.getElementById("previous").classList.add("display-none");
  } else {
    document.getElementById("previous").classList.remove("display-none");
  }
  if (state.page === Math.ceil(state.querySet.length / state.rows)) {
    document.getElementById("next").classList.add("display-none");
  } else {
    document.getElementById("next").classList.remove("display-none");
  }
}, 1);
// when the next button is clicked move to next filterd dataa
$("#next").on("click", function () {
  $("#events-list").empty();
  state.page = state.page + 1;
  filter();
});

// when the next previous is clicked move to previous filterd dataa
$("#previous").on("click", function () {
  $("#events-list").empty();
  state.page = state.page - 1;
  filter();
});
function filter() {
  const data = paggination(state.querySet, state.page, state.rows);
  document.querySelector("#events-list").innerHTML = "";

  const html = data.querySet
    .map((res) => {
      return ` 
        <article class="padding-top-40 grid-item-33-50-100 js-isotope-filter-grid-item">
        <div class="grid-margin-box hover-box pos-rel js-touch-hover-scroll">
            <a href="story/detail/event_detail.html?id=${
              res.id
            }" class="d-block pos-rel hidden-box content-bg-dark-1 js-pointer-large js-animsition-link">
                <img class="  brands" src="${res.hero_image_url}" alt="">
                <div class="bg-overlay-black"></div>
                <h3 class="pos-abs pos-left-bottom pos-left-bottom2 headline-xxxs1">${
                  res.title
                }</h3>
                <h4 class="pos-abs eventdate">${new Date(
                  res.start_date
                ).toLocaleString("en-US", {
                  month: "long",
                  day: "2-digit",
                  year: "numeric",
                })}</h4>
            </a>
        </div>
    </article>        
              `;
    })
    .join("");
  document.getElementById("events-list").insertAdjacentHTML("afterbegin", html);
  pageButtons(data.pages);
}
