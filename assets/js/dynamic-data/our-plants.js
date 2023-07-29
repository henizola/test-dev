const API_URL = `https://api.bgiethiopia.com/api`;
// const API_URL = `http://127.0.0.1:7891/api`;
const DEFAULT_LIMIT = 6;

//featured news
fetch(
  `${API_URL}/admin/plants?:limit=${DEFAULT_LIMIT}&offset=0&is_published=1`,
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
        .map((res, index) => {
          if (index % 2 == 0) {
            return ` <section id="" class="lines-section bg-img-cover " style="background-image:url(${
              res.hero_image_url
            })" >       
                    <div class="bg-overlay-black"></div>   
                    <div class="lines-container ">
                      <div class="container padding-top-bottom-120">
                        <div class="text-center js-scrollanim">           
                          <h2 class="headline-l mob-nopadding">
                            <span class="d-block hidden-box">
                              <span class="headline-l mob-nopadding" style="">${res.title
                                .substr(0, 75)
                                .toUpperCase()}</span>
                            </span>
                        </h2>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section class="lines-section section-bg-dark-1">
                  <div class="lines-container no-lines">
                    <div class="container padding-top-bottom-30">
                      <div class="flex-container padding-top-30">
                        <div class="two-offset eight-columns" style="text-align: justify; text-align-last: center;">
                          <p class="body-text-m   js-scrollanim">${
                            res.description
                          }
                            <br><br>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                  
                  `;
          } else {
            return ` <section id="" class="lines-section bg-img-cover" style="background-image:url(${
              res.hero_image_url
            })">
          <div class="bg-overlay-black"></div>
          <div class="lines-container">
            <div class="container padding-top-bottom-120">
              <div class="text-center js-scrollanim">
                <h2 class="headline-l mob-nopadding">
                  <span class="d-block hidden-box">
                    <span class="headline-l mob-nopadding" style="text-transform: uppercase;">${res.title
                      .substr(0, 75)
                      .toUpperCase()}</span>
                  </span>       
                </h2>
                
              </div>
            </div>
          </div>
        </section>
        <section class="lines-section section-bg-dark-1" style="background: #f6b801;">
          <div class="lines-container no-lines" >
            <div class="container padding-top-bottom-30">
              <div class="flex-container">
                <div class="two-offset eight-columns" style="text-align: justify; text-align-last: center;">
        
                  <p class="body-text-m   js-scrollanim"  style="color: #000;">${
                    res.description
                  }
        <br class="nobr"><br class="nobr">
        </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        `;
          }
        })
        .join("");

      document
        .getElementById("plants-list-container-plants")
        .insertAdjacentHTML("afterbegin", html);
    });
  })
  .catch(console.log);

//featured History
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
                    <div class="swiper-slide">
                      <a href="history.html#h${
                        res.id
                      }" class="anim-img-scale d-block">
                        <img class="anim-img-scale__inner" src="${
                          res.hero_image_url
                        }" alt="foundation image"  >
                      </a>
                      <div class="margin-top-20  text-center">
                        <h3 class="d-inline-block hidden-box">
                          <span class="headline-xxxs anim-reveal red tr-delay-01">${
                            res.title
                          }</span>
                        </h3><br>
                        <span class="d-inline-block hidden-box">
                          <span class="subhead-xxs text-color-b0b0b0 anim-reveal tr-delay-03" style="color: #e4022b;">${new Date(
                            res.start_date
                          ).toLocaleString("en-US", {
                            year: "numeric",
                          })} - ${new Date(res.end_date).toLocaleString(
            "en-US",
            {
              year: "numeric",
            }
          )}</span>
                        </span>
                      </div>
                    </div>
          `;
        })
        .join("");

      document.getElementById("history-list-container").innerHTML = html;
      var view3Swiper = new Swiper(".js-3-view-slider", {
        slidesPerView: 3,
        centeredSlides: true,
        centeredSlidesBounds: true,
        Loop: true,
        speed: 1400,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
        },
      });

      setTimeout(function () {
        document.getElementById("history-list-container").innerHTML = html;
        var view3Swiper = new Swiper(".js-3-view-slider", {
          slidesPerView: 3,
          centeredSlides: true,
          centeredSlidesBounds: true,
          Loop: true,
          speed: 1400,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
          },
          breakpoints: {
            768: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
          },
        });
        console.log("executed ---");
      }, 5000);
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
