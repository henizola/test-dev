const API_URL = `https://api.bgiethiopia.com/api`;
// const API_URL = `http://127.0.0.1:7891/api`;
const DEFAULT_LIMIT = 6;

//home slider
fetch(`${API_URL}/admin/stories?:news_feed_images=1&is_published=1`, {
	method: "GET",
})
	.then((res) => {
		res.json().then((res) => {
			const data = res.result;
			const html = data
				.map((brand) => {
					return ` 
                    <div class="swiper-slide flex-min-height-100vh">
                      <div class="js-parallax-slide-bg bg-img-cover" style="background-image:url(${brand.hero_image_url})"></div>
                      <div class="flex-min-height-100vh__inner lines-container no-lines" data-swiper-parallax-x="30%">
                        <div class="container small padding-top-bottom-120">
                          <h2 class="headline-xl headline-xl-mob mobleft30">
                            <span class="hidden-box d-block">
                              <span class=" tr-delay-02" style="text-transform: capitalize;">${brand.title} </span>
                            </span>
                          </h2>
                          <div class="margin-top-30 ">
                            <a href="story/home_stories_detail.html?id=${brand.id}" class="border-btn js-pointer-large mobleftmargin30">
                              <span class="border-btn__inner">Read more</span>
                              <span class="border-btn__lines-1"></span>
                              <span class="border-btn__lines-2"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    `;
				})
				.join("");
			document
				.getElementById("home_slider")
				.insertAdjacentHTML("afterbegin", html);
		});
	})
	.catch(console.log);

//featured news
fetch(
	`${API_URL}/admin/news_feeds?!%3Dnews_feed_category_id=4&:news_feed_category=1&:news_feed_articles=1&limit=6&offset=0&is_published=1`,
	{
		method: "GET",
	}
)
	.then((res) => {
		res.json().then((data) => {
			console.log(data);
			const html = data.result
				.map((res) => {
					var options = {
						year: "numeric",
						month: "long",
						day: "numeric",
					};

					const date = new Date(res.created_at);
					return ` 
                    <div class="padding-top-60   grid-item-33-50-100 js-isotope-filter-grid-item marketing">
                      <a href="/newsFeeds/news_feeds_detail.html?id=${
												res.id
											}" class="grid-margin-box newsbox  js-animsition-link js-pointer-large">
                        <div class="anim-img-scale anim-img-scale_hover"  style="background:url('${
													res.hero_image_url
												}') no-repeat; background-size:cover">
                          <img src="${res.hero_image_url}" alt="${
						res.title
					}" alt="project" style="opacity:0; height:315px;">
                        </div>
                        <div class="js-scrollanim newsbody">
                          <span class="hidden-box d-block">
                            <span class="subhead-xxs text-color-red subheadnews">${
															res.news_feed_category.name
														}</span>
                          </span>
                          <h3 class="hidden-box">
                            <span class="headline-xxxs_news_home text-color-black tr-delay-02" style="text-transform: capitalize;">${res.title.substr(
															0,
															38
														)}${res.title.length > 37 ? "..." : ""}</span>
                          </h3>
                          <p class="newsdisc" style='padding-bottom:40px;'>${
														res.news_feed_articles.length > 0
															? res.news_feed_articles[0].article.substr(0, 104)
															: ""
													}...</p>
                          
                        </div>
                      </a>
                    </div>
                    `;
				})
				.join("");
			// document.getElementById('news-list-home').innerHTML = html;
			document.getElementById("news-list-home").innerHTML = html;
			console.log("Data Enjected");
			setTimeout(function () {
				// location.reload();
				document.getElementById("news-list-home").innerHTML = html;
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
