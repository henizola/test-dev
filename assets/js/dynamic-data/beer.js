const API_URL = `https://api.bgiethiopia.com/api`;
// const API_URL = `http://127.0.0.1:7891/api/`;

fetch(
  `${API_URL}/admin/brands?!%3Dbrand_category_id=2&:brand_articles=1&:brand_images=1&is_published=1`,
  {
    method: "GET",
  }
).then((res) => {
  res
    .json()
    .then((res) => {
      const data = res.result;
      console.log("Swiper Data", data);
      const mobileView = data
        .map((brand) => {
          return `
                <div class="swiper-slide flex-min-height-100vh mobbeerslide_height" style="background: ${
                  brand.mobile_background_color
                };">
                    <div class="js-parallax-slide-bg"></div>
                    <div class="flex-min-height-100vh__inner lines-container no-lines mobile-background" data-swiper-parallax-x="" style="background: url(${
                      brand.hero_image_url
                    }) no-repeat; background-size: contain;">
                        <div class="container padding-top-bottom-30">
                        <div class="flex-container padding-top-bottom-120 ">
                            <div class="twelve-columns column-50-100">
                                    <img src="${
                                      brand.hero_image_url
                                    }" style="opacity: 0">
                            </div>
                            <div class="twelve-columns column-50-100  padding-bottom-30">
                                <h2 class="headline-xl headline-xl-mob text-center" style="font-size: 45px; line-height: 45px;">
                                    <span class="">
                                        <span class="text-color-black" style="color:${
                                          brand.text_color
                                        }">${brand.title}</span>
                                    </span>
                                    </h2>
                                ${brand.brand_articles.map((article) => {
                                  return `<p class="body-text-s text-color-black margin-top-20" style="text-align: justify; background: ${
                                    brand.background_color != null
                                      ? brand.background_color
                                      : "#00000000"
                                  }; color: ${
                                    brand.text_color != null
                                      ? brand.text_color
                                      : "#FFFFFFFF"
                                  };padding: 10px">${article.article}</p>`;
                                })}

                            </div>

                            <div class="twelve-columns column-50-100 text-center four-offset" style="overflow: hidden;">
                            <div class="owl-carousel-black owl-theme  owl-carousel">
                                ${brand.social_feeds
                                  .map((social_feed) => {
                                    return `
                                    <article>
                                        <div class="anim-img-scale noanimated">
                                            <a href="https://www.facebook.com/st.georgeethiopia/photos/a.904362729611906/3562487950466024" class="d-block hover-box js-animsition-link js-pointer-large">
                                            <div class=" noanimated feedheight" style="background: url('${
                                              social_feed.full_picture
                                            }') no-repeat center;background-size: contain;background-color:rgba(0,0,0,0); "> </div>
                                            <h3 class="headline-xxxs" style="width:80%; left: 50%; position: relative; margin-left: -40%; margin-top: 25px; text-align: center;">
                                                <span class="">
                                                <span class="anim-slide amfont noanimated" style="color: ${
                                                  brand.text_color != null
                                                    ? brand.text_color
                                                    : "#FFFFFFFF"
                                                };">${
                                      social_feed.message
                                    }</span>
                                                </span>
                                            </h3>
                                            </a>
                                        </div>
                                    </article>
                                    `;
                                  })
                                  .join("")}
                            </div>
                            <br><br><br>
                        </div>
                    </div>
                </div>
            </div>
          </div>`;
        })
        .join("");

      const desktopView = data
        .map((brand) => {
          return `
                    <!-- swiper-slide start -->
                    <div class="swiper-slide flex-min-height-100vh">
                        <!-- slide-bg -->
                        <div class="js-parallax-slide-bg bg-img-cover desktop-back" style="background-image: url(${
                          brand.hero_image_url
                        }); background-position:top;"></div>


                        
                                  <!-- header-social start -->
        <div class="header-social-beer after-preloader-anim js-midnight-color">
            <ul class="list list_center list_margin-20px hidden-box">
                <li class="list__item">
                    <div class="hidden-box d-inline-block">
                        <a href="https://${
                          brand.facebook_share_link
                        } " target="_blank"  sclass=" js-pointer-small">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                    </div>
                </li>
                <li class="list__item">
                    <div class="hidden-box d-inline-block">
                        <a href="https://${
                          brand.instagram_share_link
                        } " target="_blank" class="  js-pointer-small">
                            <i class=""><svg aria-hidden="true" width="12.25" height="14.7" focusable="false" data-prefix="fab" data-icon="instagram" class="svg-inline--fa fa-instagram fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></i>
                        </a>
                    </div> 
                </li>

                <li class="list__item">
                    <div class="hidden-box d-inline-block">
                        <a href="https://${brand.tiktok_share_link}"
                        target="_blank"
                            class=" tr-delay-10 js-pointer-small">
                            <i class=""><svg aria-hidden="true" width="12.25" height="14.7" focusable="false" data-prefix="fab" data-icon="tiktok" class="svg-inline--fa fa-tiktok fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path></svg></i>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
        <!-- header-social end -->




                        <!-- content start -->
                        <div class="flex-min-height-100vh__inner lines-container no-lines" data-swiper-parallax-x="">
                            <div class="container padding-top-bottom-30">
                                <div class="flex-container padding-top-bottom-120 ">
                                    <div class="four-columns column-50-100  padding-top-bottom-120" style="padding-left: 40px;">
                                        <br><br><br><br><br><br><br>
                                        <h2 class="headline-xl headline-xl-mob" style="font-size: 41px; line-height: 45px;">
                                            <span class="text-color-black" style="color: ${
                                              brand.text_color != null
                                                ? brand.text_color
                                                : "#FFFFFFFF"
                                            };">${
            brand.title
          }</span>                           
                                        </h2>
                                        ${brand.brand_articles.map(
                                          (article) => {
                                            return `<p class="body-text-s text-color-black margin-top-20" style="text-align: justify; background: ${
                                              brand.background_color != null
                                                ? brand.background_color
                                                : "#00000000"
                                            }; color: ${
                                              brand.text_color != null
                                                ? brand.text_color
                                                : "#FFFFFFFF"
                                            };padding: 10px">${
                                              article.article
                                            }</p>`;
                                          }
                                        )}
                                
                                    </div>
                                    <div class="four-columns column-50-100 text-center four-offset" style="overflow: hidden;">
                                    <br><br><br><br><br><br><br><br><br><br><br>
                                        <div class="owl-carousel-black owl-theme  owl-carousel">
                                            ${brand.social_feeds
                                              .map((social_feed) => {
                                                return `
                                                <article>
                                                    <div class="anim-img-scale noanimated">
                                                        <a href="https://www.facebook.com/st.georgeethiopia/photos/a.904362729611906/3562487950466024" class="d-block hover-box js-animsition-link js-pointer-large">

                                                        <div class=" noanimated feedheight" style="background: url('${
                                                          social_feed.full_picture
                                                        }') no-repeat center;background-size: contain;background-color:rgba(0,0,0,0); ">
                                                        </div>
                                                        <h3 class="headline-xxxs" style="width:80%; left: 50%; position: relative; margin-left: -40%; margin-top: 25px; text-align: center;">
                                                            <span class="">
                                                            <span class="anim-slide amfont noanimated " style="color: ${
                                                              brand.text_color !=
                                                              null
                                                                ? brand.text_color
                                                                : "#FFFFFFFF"
                                                            };">${
                                                  social_feed.message != null
                                                    ? social_feed.message
                                                    : ""
                                                }</span>
                                                            </span>
                                                        </h3>
                                                        </a>
                                                    </div>
                                                </article>
                                                `;
                                              })
                                              .join("")}
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <!-- content end -->
                    </div>
                    <!-- swiper-slide end -->
                    `;
        })
        .join("");
      document.getElementById("mobile_view").innerHTML = mobileView;
      document.getElementById("desktop_view").innerHTML = desktopView;

      $(".owl-carousel-black").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        dots: true,
        nav: true,
        navText: [
          "<div class='nav-btn prev-slide'></div>",
          "<div class='nav-btn next-slide'></div>",
        ],
      });

      $(".owl-carousel-white").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        dots: true,
        nav: true,
        navText: [
          "<div class='nav-btn-white prev-slide-white'></div>",
          "<div class='nav-btn-white next-slide-white'></div>",
        ],
      });
    })
    .join("");
  document.getElementById("mobile_view").innerHTML = mobileView;
  document.getElementById("desktop_view").innerHTML = desktopView;

  $(".owl-carousel-black").owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    dots: false,
    nav: true,
    navText: [
      "<div class='nav-btn prev-slide'></div>",
      "<div class='nav-btn next-slide'></div>",
    ],
  });

  $(".owl-carousel-white").owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    dots: false,
    nav: true,
    navText: [
      "<div class='nav-btn-white prev-slide-white'></div>",
      "<div class='nav-btn-white next-slide-white'></div>",
    ],
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

//newsletter
var searchForm = document.getElementById("newsletterform");
searchForm.addEventListener("submit", function (e) {});

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
