const API_URL = `https://api.bgiethiopia.com/api`;
// const API_URL = `http://143.198.122.1:7891/api`;
// const API_URL = `http://127.0.0.1:7891/api`;

const params = new URL(window.location.href).searchParams;

fetch(
        `${API_URL}/admin/news_feed?id=${params.get(
		"id"
	)}&:news_feed_category=1&:news_feed_images=1&:news_feed_articles=1`, {
            method: "GET",
            headers: {
                authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MzBmZTFiYi02NzQzLTQ4MTItYTJhOC04MGY0OWE1YWUxYjciLCJqdGkiOiJjMjc4NTAzMWZkYTk4YjFjODM2OWYzMmYyODBhYTBmN2NiN2Q4YTQ1NjAwYTAzYmIxY2E5ZTMzMzA3ZDY3MDg5ZWU4MDExNTEwZWQzNTc3MSIsImlhdCI6MTYxNjk2NjIwOSwibmJmIjoxNjE2OTY2MjA5LCJleHAiOjE2NDg1MDIyMDksInN1YiI6IjIiLCJzY29wZXMiOltdfQ.DrzDvmpG5lIygLjjoUIzXbeCFtBNCMjBFB3LXTqYo61h_oVbzaYvgWC1wEap2A5xOgodCmV1Vr2kdDX06lTgSFT-JWmehdShFmIvvGDTL4GGO4zaSFFooJDi3gUj0QjhvrHu0omQxu4IltL3iuHjY1QqPr_ph0hYQgSlgRCIPsUqNMATOf-fcOhJ2SD__29LKXDhx0CHN_bovytmTeS_2N3__TcKF27oSWxexeaSGnl3j1_0SmmCdHmMShjEgyRtIpDg3sgk8AoSBDCo_rRe7yOFjEqBLxLKvcmXsnvHlyl9nmYjSq3x5VULqTjRXCPQdQ8qlR-0H0wDeVOWEQyf307O7b0F-uoUWDdPwGiEgnvTd3_A3Labqr9d-CrBAFHzw-c7JFa7lgJ9JNbjlsZDE3SZ-41CI6KUfmMcbjU23AWiMIv_bjWp8iNOJlT1xjCJUkHUeX-9Cmjq18V8Ydk37ExpkC1lwGthksgFySxkr7woSshiSHFtKk2fb5yIgOMXCupnkF6VBB7rqkrjMJgCVk0xXKUMUIvyzvPKIsu7JQVvA-4GHlgzWUC0aFOMMIa-gJOLno0RPnM-KID5RgnhxD3S1TG8AJ0hDONv1M_EAIwa-1AUbqRzUxrwVurOCkYSas0FWzNncwxnlVJOv4JldxHZarsPleGgIRyudx_uk2U",
            },
        }
    )
    .then((res) => {
        res.json().then((res) => {
            const data = res.result;
            console.log("this is the data", data);
            console.log(data);
            document.getElementById(
                "up"
            ).style.backgroundImage = `url(${data.hero_image_url})`;
            document.getElementById("news-title").innerText = data.title;
            document.getElementById("subtitle").innerText =
                data.news_feed_category.name;
            document.getElementById("detailTitle").innerText = data.sub_title;
            console.log(new Date(data.date_time_string), "hereee");
            document.getElementById("news_date").innerText = new Date(
                data.date_time_string
            ).toLocaleString("en-US", {
                month: "long",
                day: "2-digit",
                year: "numeric",
            });

            document
                .querySelector('meta[name="title"]')
                .setAttribute("content", data.title);
            document
                .querySelector('meta[name="desc"]')
                .setAttribute("content", data.news_feed_articles[0].article);
            document
                .querySelector('meta[name="link"]')
                .setAttribute("content", window.location.href);
            document
                .querySelector('meta[name="img"]')
                .setAttribute("content", data.hero_image_url);

            const top_news_articles = data.news_feed_articles
                .map((res) => {
                    if (res.title == 'TOP') {
                        return `
					        <p class="body-text-s text-color-black margin-top-20" style="text-align: justify; text-align-last: center;">${res.article}</p> `;
                    }
                })
                .join("");
            const bottom_news_articles = data.news_feed_articles
                .map((res) => {
                    if (res.title == 'BOTTOM') {
                        return `
					        <p class="body-text-s text-color-black margin-top-20" style="text-align: justify; text-align-last: center;">${res.article}</p> `;
                    }
                })
                .join("");

            document
                .getElementById("top_news_feed_article_container")
                .insertAdjacentHTML("afterbegin", top_news_articles);

            document
                .getElementById("bottem_news_feed_article_container")
                .insertAdjacentHTML("afterbegin", bottom_news_articles);
            let news_feed_images = '';
            if (data.news_feed_images.length > 1) {
                news_feed_images = data.news_feed_images
                    .map((res) => {
                        if (res.title == 'YOUTUBE') {
                            return `
							<div class="padding-top-60st  grid-item-33-50-100 js-isotope-filter-grid-item marketing">
								<div class="grid-margin-box anim-img-scale anim-img-scale_hover js-img-scale">
									<iframe width="100%" height="300px" src="${res.image_url}" title="${res.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
								</div>
							</div>
            			`;
                        } else {
                            return `
						<div class="padding-top-60st  grid-item-33-50-100 js-isotope-filter-grid-item marketing">
							<div class="grid-margin-box anim-img-scale anim-img-scale_hover js-img-scale">
								<img class='portfolio_img' src="${res.image_url}" alt="Post">
							</div>
        				</div>
						`;
                        }
                    })
                    .join("");
            } else {
                news_feed_images = data.news_feed_images
                    .map((res) => {
                        if (res.title == 'YOUTUBE') {
                            return `
                            <div class="padding-top-60st  grid-item-33-50-100 js-isotope-filter-grid-item marketing">
                            </div>
							<div class="padding-top-60st  grid-item-33-50-100 js-isotope-filter-grid-item marketing">
								<div class="grid-margin-box anim-img-scale anim-img-scale_hover js-img-scale">
									<iframe width="100%" height="300px" src="${res.image_url}" title="${res.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
								</div>
							</div>
            			`;
                        } else {
                            return `
                            <div class="padding-top-60st  grid-item-33-50-100 js-isotope-filter-grid-item marketing">
                            </div>
                            <div class="padding-top-60st  grid-item-33-50-100 js-isotope-filter-grid-item marketing">
                                <div class="grid-margin-box anim-img-scale anim-img-scale_hover js-img-scale">
                                    <img class='portfolio_img' src="${res.image_url}" alt="Post">
                                </div>
                            </div>
						`;
                        }
                    })
                    .join("");
            }

            document
                .getElementById("portfolio_imgs_container")
                .insertAdjacentHTML("afterbegin", news_feed_images);
        });
    })
    .catch(console.log);

//newsletter
var form = document.getElementById("newsletterform");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    var email = document.getElementById("email").value;
    fetch(`${API_URL}/admin/subscribe?:limit=${DEFAULT_LIMIT}&offset=0`, {
        method: "POST",
        body: JSON.stringify({
            email: email,
        }),

        headers: {
            "Content-Type": "application/json; charset= UTF-8",
            authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MzBmZTFiYi02NzQzLTQ4MTItYTJhOC04MGY0OWE1YWUxYjciLCJqdGkiOiJjMjc4NTAzMWZkYTk4YjFjODM2OWYzMmYyODBhYTBmN2NiN2Q4YTQ1NjAwYTAzYmIxY2E5ZTMzMzA3ZDY3MDg5ZWU4MDExNTEwZWQzNTc3MSIsImlhdCI6MTYxNjk2NjIwOSwibmJmIjoxNjE2OTY2MjA5LCJleHAiOjE2NDg1MDIyMDksInN1YiI6IjIiLCJzY29wZXMiOltdfQ.DrzDvmpG5lIygLjjoUIzXbeCFtBNCMjBFB3LXTqYo61h_oVbzaYvgWC1wEap2A5xOgodCmV1Vr2kdDX06lTgSFT-JWmehdShFmIvvGDTL4GGO4zaSFFooJDi3gUj0QjhvrHu0omQxu4IltL3iuHjY1QqPr_ph0hYQgSlgRCIPsUqNMATOf-fcOhJ2SD__29LKXDhx0CHN_bovytmTeS_2N3__TcKF27oSWxexeaSGnl3j1_0SmmCdHmMShjEgyRtIpDg3sgk8AoSBDCo_rRe7yOFjEqBLxLKvcmXsnvHlyl9nmYjSq3x5VULqTjRXCPQdQ8qlR-0H0wDeVOWEQyf307O7b0F-uoUWDdPwGiEgnvTd3_A3Labqr9d-CrBAFHzw-c7JFa7lgJ9JNbjlsZDE3SZ-41CI6KUfmMcbjU23AWiMIv_bjWp8iNOJlT1xjCJUkHUeX-9Cmjq18V8Ydk37ExpkC1lwGthksgFySxkr7woSshiSHFtKk2fb5yIgOMXCupnkF6VBB7rqkrjMJgCVk0xXKUMUIvyzvPKIsu7JQVvA-4GHlgzWUC0aFOMMIa-gJOLno0RPnM-KID5RgnhxD3S1TG8AJ0hDONv1M_EAIwa-1AUbqRzUxrwVurOCkYSas0FWzNncwxnlVJOv4JldxHZarsPleGgIRyudx_uk2U",
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
form.addEventListener("submit", function(e) {
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