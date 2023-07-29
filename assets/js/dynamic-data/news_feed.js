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

const filterNews = () => {
    console.log(state, 'called');
};

// Pass News feed category Id to this function on button click
function onNewsFeedTypeChanged(id) {
    document.getElementById(
        'news_list_stories'
    ).innerHTML = '';
    getNews(id);
}

fetch(
        `${API_URL}/admin/news_feed_categories?limit=${DEFAULT_LIMIT}&offset=0&is_published=1&order=DESC`, {
            method: 'GET',
        }
    )
    .then((res) => {
        res.json().then((data) => {
            const html = data.result
                .map((res) => {
                    if (res.name != 'Press Release') {
                        return ` 
                    <button onclick="onNewsFeedTypeChanged(${res.id})" class="list__item js-filter-button anim-fade tr-delay-01 js-pointer-small newscat" data-filter=".crp">
                        <span class="flip-btn text-color-black" data-text="${res.name}">${res.name}</span>
                    </button>
                    `;
                    }
                })
                .join('');
            document
                .getElementById('types')
                .insertAdjacentHTML('beforeend', html);
            setTimeout(function() {
                document
                    .getElementById('main_btn')
                    .click();
                console.log('executed');
            }, 5000);
        });
    })
    .catch(console.log);

// Recive Id from button click and send api request
function getNews(id) {
    //featured news
    const url =
        id != null ?
        `${API_URL}/admin/news_feeds?news_feed_category_id=${id}&:news_feed_category=1&limit=${DEFAULT_LIMIT}&offset=0&is_published=1` :
        `${API_URL}/admin/news_feeds?_id=${id}&:news_feed_category=1&limit=${DEFAULT_LIMIT}&offset=0&is_published=1`;
    fetch(url, {
            method: 'GET',
        })
        .then((res) => {
            res.json().then((data) => {
                state.querySet = data.result;
                state.reload = true;
                state.page = 1;
                const html = data.result
                    .map((res) => {
                        return ` 
                    <article class="padding-top-40 grid-item-33-50-100 js-isotope-filter-grid-item brands">
                    <div class="grid-margin-box hover-box pos-rel js-touch-hover-scroll">
                      <a href="story/detail/home_news_feed.html?id=${
                        res.id
                      }"
                        class="d-block pos-rel hidden-box content-bg-dark-1 js-pointer-large js-animsition-link">
                        <img class="  brands"  src="${res.hero_image_url}" alt="${res.title}">
                        <div class="bg-overlay-black"></div>
                          <h3 class="pos-abs pos-left-bottom headline-xxxs1 ">${res.title.substr(0,50)}</h3>
                        </a>
                    </div>
                  </article>`
                    })
                    .join('');
                document
                    .getElementById('news_list_stories')
                    .insertAdjacentHTML('afterbegin', html);
            });
        })

    .catch(console.log);
}

//featured news
fetch(
        `${API_URL}/admin/news_feeds?!%3Dnews_feed_category_id=4&:news_feed_category=1&limit=${DEFAULT_LIMIT}&offset=0&is_published=1`, {
            method: 'GET',
        }
    )
    .then((res) => {
        res.json().then((data) => {
            const html = data.result
                .map((res) => {
                    return ` 
                    <article class="padding-top-40 grid-item-33-50-100 js-isotope-filter-grid-item brands">
                        <div class="grid-margin-box hover-box pos-rel js-touch-hover-scroll">
                            <a href="newsFeeds/news_feeds_detail.html?id=${
                              res.id
                            }"
                                class="d-block pos-rel hidden-box content-bg-dark-1 js-pointer-large js-animsition-link">
                                <img class="  brands"  src="${
                                  res.hero_image_url
                                }" alt="${
            res.title
          }">
                                <div class="bg-overlay-black"></div>
                                <h3 class="pos-abs pos-left-bottom headline-xxxs1 ">${res.title.substr(
                                  0,
                                  50
                                )}
                                </h3>
                            </a>
                        </div>
                    </article>          
            `;
                })
                .join('');
            document
                .getElementById('news_list_stories')
                .insertAdjacentHTML('afterbegin', html);
        });
    })

.catch(console.log);

//press release
fetch(
        `${API_URL}/admin/news_feeds?news_feed_category_id=4&:news_feed_category=1&limit=${DEFAULT_LIMIT}&offset=0&is_published=1`, {
            method: 'GET',
        }
    )
    .then((res) => {
        res.json().then((data) => {
            const html = data.result
                .map((res) => {
                    return ` 
                        <article class="padding-top-40 grid-item-33-50-100 js-isotope-filter-grid-item press">
                            <div class="grid-margin-box hover-box pos-rel js-touch-hover-scroll">
                                <a  href="${res.press_release_url}"  target="_blank" class="d-block pos-rel hidden-box content-bg-dark-1 js-pointer-large js-animsition-link">
                                    <img class="  social" src="${res.hero_image_url}" alt="The">
                                    <div class="bg-overlay-black"></div>
                                    <h3 class="pos-abs pos-left-bottom headline-xxxs1 ">${res.title}</h3>
                                </a>
                            </div>
                        </article>
                    `;
                })
                .join('');
            document
                .getElementById('press-release-materials')
                .insertAdjacentHTML('afterbegin', html);
        });
    })
    .catch(console.log);

//Search Menu
var form = document.getElementById('menu_search');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    var searchWord = document.getElementById(
        'search_word'
    ).value;
    console.log('Search Menu', e);
    location.href =
        '/bgi_search.html?search_word=' + searchWord;
});
// search
function onSearch() {
    var searchWord = document.getElementById(
        'search_word'
    ).value;
    console.log('Search Menu', searchWord);
    if (searchWord) {
        location.href =
            '/bgi_search.html?search_word=' +
            searchWord;
    }
}

// if (state.page === state.querySet.length) {
//   document
//     .getElementById('next')
//     .classList.add('display-none');
// }

// trim the data and return number of pages requierd and trimmed data

const paggination = (querySet, page, rows) => {
    var trimStart = (page - 1) * rows;
    var trimEnd = trimStart + rows;
    const trimmedData = querySet.slice(
        trimStart,
        trimEnd
    );
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
    var wraper = document.getElementById(
        'pagination-wraper'
    );

    wraper.innerHTML = '';
    for (var page = 1; page <= pages; page++) {
        wraper.innerHTML += `<button value=${page} class="page-link page-item page" style='border:${
      state.page === page ? '1px solid red' : ''
    }'>${page}</button>`;
    }
    $('.page').on('click', function() {
        $('#news_list_stories').empty();
        console.log(state, 'before');

        state.page = parseInt($(this).val());
        console.log(state, 'after');
        filter();
    });
}

// filter the news when ever the page is first loaded

setInterval(function() {
    //code goes here that will be run every 5 seconds.
    if (state.reload) {
        state.querySet && filter();
        if (state.querySet) {
            document
                .getElementById('height')
                .classList.add('h-f');

            state.reload = false;
        }
    }

    if (state.page === 1) {
        document
            .getElementById('previous')
            .classList.add('display-none');
    } else {
        document
            .getElementById('previous')
            .classList.remove('display-none');
    }
    if (
        state.page ===
        Math.ceil(state.querySet.length / state.rows)
    ) {
        document
            .getElementById('next')
            .classList.add('display-none');
    } else {
        document
            .getElementById('next')
            .classList.remove('display-none');
    }
}, 1);
// when the next button is clicked move to next filterd dataa
$('#next').on('click', function() {
    $('#news_list_stories').empty();
    state.page = state.page + 1;
    filter();
});

// when the next previous is clicked move to previous filterd dataa
$('#previous').on('click', function() {
    $('#news_list_stories').empty();
    state.page = state.page - 1;
    filter();
});

function filter() {
    const data = paggination(
        state.querySet,
        state.page,
        state.rows
    );

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    const container = document.querySelector(
        '#news_list_stories'
    );
    removeAllChildNodes(container);
    const html = data.querySet
        .map((res) => {
            return ` 
                    <article class="padding-top-40 grid-item-33-50-100 js-isotope-filter-grid-item brands">
                        <div class="grid-margin-box hover-box pos-rel js-touch-hover-scroll">
                            <a href="newsFeeds/news_feeds_detail.html?id=${res.id}" class="d-block pos-rel hidden-box content-bg-dark-1 js-pointer-large js-animsition-link">
                                <img class="  brands"  src="${res.hero_image_url}" alt="${res.title}">
                                <div class="bg-overlay-black"></div>
                                <h3 class="pos-abs pos-left-bottom headline-xxxs1 ">${res.title.substr(0,50)}</h3>
                            </a>
                        </div>
                    </article>          
            `;
        })
        .join('');
    document
        .getElementById('news_list_stories')
        .insertAdjacentHTML('afterbegin', html);
    pageButtons(data.pages);
}