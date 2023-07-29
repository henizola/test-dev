const API_URL = `https://api.bgiethiopia.com/api`;
// const API_URL = `http://127.0.0.1:7891/api`;
const params = new URL(window.location.href).searchParams;

const iframe = document.getElementById('brand_yt_iframe')
fetch(`${API_URL}/admin/brand?id=${params.get('id')}&:brand_articles=1&:brand_images=1`, {
        method: 'GET',
        headers: {
            authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MmZjMzk0NS0zNGJmLTQyZDItOWIyYi1hZjVlZjg5MWExMTUiLCJqdGkiOiJlYjc2ZmNjZjFmNDVmZTI4NmYzY2FjYWRmMGY2MDQxNDUzOTEwOGIwNzUwY2NmNDgwMWFiNDk2ZDc0ZmMzZGNhMmU2Njg1NjY0N2ZkZjk5ZiIsImlhdCI6MTYxNjEzODAyMywibmJmIjoxNjE2MTM4MDIzLCJleHAiOjE2NDc2NzQwMjMsInN1YiI6IjIiLCJzY29wZXMiOltdfQ.UFMLPHsmo-SwOTyiR-lg7nk5iTSIPeaAQtjCJyiygtJL302jIM_tC6a_adwC6KEL6sHD6im5VEAaPkTMUIWKYs39na8KJOlDZYg1Ey3EEbOIBgvrYGHowpJDN0IlCk0oNa0GFxZOR2E8_ePNRvl2b4aOnsX6cY0yDodh6xYlwekTdvbc3jWuY6rCpAc3vaO3Ms0ZYbcnieC_uuGytVWQC3nF8boVXi0KRJE5-7osdXn5dPmp-aEkHR6_gplKVreAla_qt-fNRThfN7jI_jPWwi23Z0tV2EDAbIQ45gYphtskM1wKrMRe786ANmmJ6HTCgUXG1msdKmVgDQY83_utoRkWlE3JE84CPMSMHd2fcQ25-Y7N-zUtyHvXXUY4vOxnny8fw1xgLWEO8MhV59PlldF0g8A6V5t_T6fzDLWxA87i9ad-T8TptB7CKtcYE18XRMQQSk8sfYw9xCl5S6vaQu4Qhdgl3jSF-wcC3vvwKRK8UZyP4Lm2_XZMABOdeq8E5LRUPX2o0pLOerWnaewJIBquzmTbblF9ZaF3BAki2bV4cmNpjGoJzGHiCdfJ3QwCjOKM0kHTvNo3H8G04MemziXgiMshaOL0U6G4Laj5WdjOT2uBqxu7zTfNNu1r4dbHtX5lJW4Eb8YR8bKOpn7jZd-vs_dfyka_pivZWNeAQqg',
        }
    })
    .then((res) => {
        res.json()
            .then((res) => {
                const data = res.result

                document.getElementById('up').style.backgroundImage = `url(${data.hero_image_url})`
                document.getElementById('brand_title_h2').innerText = data.title
                document.getElementById('brand_subtitle').innerText = data.sub_title

                console.log("data.youtube_url", data.youtube_url)
                if (data.youtube_url === null) {
                    iframe.src = data.youtube_url
                } else {
                    iframe.style.display = 'none';
                }
                const html = data.brand_articles.map(res => {

                    return `
            <p class="body-text-s text-color-black margin-top-20" style="text-align: justify; text-align-last: center; font-size: 20px;">
            ${res.article}
               </p> 
            `
                }).join('');

                document.getElementById('brand_article_container').insertAdjacentHTML('beforeend', html)



                const imgHtml = data.brand_images.map(res => {

                    return `
            <div class="swiper-slide">
            <div class="margin-left-right-20 anim-img-scale">
              <img class="anim-img-scale__inner" src="${res.image_url}" alt="${res.title? res.title:"brand slider item"}">
            </div>
          </div><!-- swiper-slide end -->
            `
                }).join('')

                document.getElementById('brand_slider_container').insertAdjacentHTML('afterbegin', imgHtml)

                //init swiper after dynamic data is inserted
                var view2Swiper = new Swiper('.js-2-view-slider', {
                    slidesPerView: 1,
                    centeredSlides: true,
                    speed: 1400,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        dynamicBullets: true
                    },
                    breakpoints: {
                        1000: {
                            slidesPerView: 2
                        }
                    },
                    onInit: function(swiper) {
                        swiperAnimateCache(swiper);
                        swiperAnimate(swiper);
                    },
                    onSlideChangeEnd: function(swiper) {
                        swiperAnimate(swiper);
                    }
                });

            })
    })
    .catch(console.log);


//Search Menu
var form = document.getElementById('menu_search');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    var searchWord = document.getElementById('search_word').value;
    console.log('Search Menu', e);
    location.href = '/bgi_search.html?search_word=' + searchWord;
});

function onSearch() {
    var searchWord = document.getElementById('search_word').value;
    console.log('Search Menu', searchWord);
    if (searchWord) {
        location.href = '/bgi_search.html?search_word=' + searchWord;
    }
}