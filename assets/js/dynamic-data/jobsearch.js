// const API_URL = `https://api.bgiethiopia.com/api`;
// const API_URL = `http://127.0.0.1:7891/api`;



// //Vacancy Categories 
// fetch(`${API_URL}/admin/vacancy_categories?`, {
//     method: 'GET',
//     headers: {
//         authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MzBmZTFiYi02NzQzLTQ4MTItYTJhOC04MGY0OWE1YWUxYjciLCJqdGkiOiJjMjc4NTAzMWZkYTk4YjFjODM2OWYzMmYyODBhYTBmN2NiN2Q4YTQ1NjAwYTAzYmIxY2E5ZTMzMzA3ZDY3MDg5ZWU4MDExNTEwZWQzNTc3MSIsImlhdCI6MTYxNjk2NjIwOSwibmJmIjoxNjE2OTY2MjA5LCJleHAiOjE2NDg1MDIyMDksInN1YiI6IjIiLCJzY29wZXMiOltdfQ.DrzDvmpG5lIygLjjoUIzXbeCFtBNCMjBFB3LXTqYo61h_oVbzaYvgWC1wEap2A5xOgodCmV1Vr2kdDX06lTgSFT-JWmehdShFmIvvGDTL4GGO4zaSFFooJDi3gUj0QjhvrHu0omQxu4IltL3iuHjY1QqPr_ph0hYQgSlgRCIPsUqNMATOf-fcOhJ2SD__29LKXDhx0CHN_bovytmTeS_2N3__TcKF27oSWxexeaSGnl3j1_0SmmCdHmMShjEgyRtIpDg3sgk8AoSBDCo_rRe7yOFjEqBLxLKvcmXsnvHlyl9nmYjSq3x5VULqTjRXCPQdQ8qlR-0H0wDeVOWEQyf307O7b0F-uoUWDdPwGiEgnvTd3_A3Labqr9d-CrBAFHzw-c7JFa7lgJ9JNbjlsZDE3SZ-41CI6KUfmMcbjU23AWiMIv_bjWp8iNOJlT1xjCJUkHUeX-9Cmjq18V8Ydk37ExpkC1lwGthksgFySxkr7woSshiSHFtKk2fb5yIgOMXCupnkF6VBB7rqkrjMJgCVk0xXKUMUIvyzvPKIsu7JQVvA-4GHlgzWUC0aFOMMIa-gJOLno0RPnM-KID5RgnhxD3S1TG8AJ0hDONv1M_EAIwa-1AUbqRzUxrwVurOCkYSas0FWzNncwxnlVJOv4JldxHZarsPleGgIRyudx_uk2U',
//     }
// })
//     .then((res) => {
//         res.json()
//             .then((data) => {
//                 const html = data.result.map(res => {

//                     return ` 
//                     <option value="Marketing">${res.name}</option>        
//             `
//                 }).join('')

//                 var lists = document.getElementById('vacancy_categories');
//                 // lists.options[lists.options.selectedIndex].selected = true;
//                 lists.insertAdjacentHTML('afterbegin', html)


//             })
//     })
//     .catch(console.log)






// //Vacancy Lisiting  
// fetch(`${API_URL}/admin/vacancies?`, {
//     method: 'GET',
//     headers: {
//         authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MzBmZTFiYi02NzQzLTQ4MTItYTJhOC04MGY0OWE1YWUxYjciLCJqdGkiOiJjMjc4NTAzMWZkYTk4YjFjODM2OWYzMmYyODBhYTBmN2NiN2Q4YTQ1NjAwYTAzYmIxY2E5ZTMzMzA3ZDY3MDg5ZWU4MDExNTEwZWQzNTc3MSIsImlhdCI6MTYxNjk2NjIwOSwibmJmIjoxNjE2OTY2MjA5LCJleHAiOjE2NDg1MDIyMDksInN1YiI6IjIiLCJzY29wZXMiOltdfQ.DrzDvmpG5lIygLjjoUIzXbeCFtBNCMjBFB3LXTqYo61h_oVbzaYvgWC1wEap2A5xOgodCmV1Vr2kdDX06lTgSFT-JWmehdShFmIvvGDTL4GGO4zaSFFooJDi3gUj0QjhvrHu0omQxu4IltL3iuHjY1QqPr_ph0hYQgSlgRCIPsUqNMATOf-fcOhJ2SD__29LKXDhx0CHN_bovytmTeS_2N3__TcKF27oSWxexeaSGnl3j1_0SmmCdHmMShjEgyRtIpDg3sgk8AoSBDCo_rRe7yOFjEqBLxLKvcmXsnvHlyl9nmYjSq3x5VULqTjRXCPQdQ8qlR-0H0wDeVOWEQyf307O7b0F-uoUWDdPwGiEgnvTd3_A3Labqr9d-CrBAFHzw-c7JFa7lgJ9JNbjlsZDE3SZ-41CI6KUfmMcbjU23AWiMIv_bjWp8iNOJlT1xjCJUkHUeX-9Cmjq18V8Ydk37ExpkC1lwGthksgFySxkr7woSshiSHFtKk2fb5yIgOMXCupnkF6VBB7rqkrjMJgCVk0xXKUMUIvyzvPKIsu7JQVvA-4GHlgzWUC0aFOMMIa-gJOLno0RPnM-KID5RgnhxD3S1TG8AJ0hDONv1M_EAIwa-1AUbqRzUxrwVurOCkYSas0FWzNncwxnlVJOv4JldxHZarsPleGgIRyudx_uk2U',
//     }
// })
//     .then((res) => {
//         res.json()
//             .then((data) => {
//                 const html = data.result.map(res => {

//                     return ` 
//                     <div class="accordion__tab js-accordion-tab" style="text-align: center;">
//                     <div class="accordion__btn js-accordion-btn js-pointer-large">
//                       <h6 class="accordion__btn-title headline-xxxs margin-top-bottom-20 text-color-black">Job Title
//                       </h6>
//                     </div>
//                     <div class="accordion__content js-accordion-content text-color-black">
//                       <p class="body-text-s">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//                         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
//                         exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
//                         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
//                       <br><br>
//                       <a href="cv_submit.html" class="border-btn js-pointer-large js-animsition-link">
//                         <span class="border-btn__inner text-color-black">Submit CV</span>
//                         <span class="border-btn__lines-1"></span>
//                         <span class="border-btn__lines-2"></span>
//                       </a>
//                     </div>
//                   </div>
//             `
//                 }).join('')

//                 var lists = document.getElementById('job_list');
//                 lists.insertAdjacentHTML('afterbegin', html)


//             })
//     })
//     .catch(console.log)









// //newsletter
// var form = document.getElementById('newsletterform');

// form.addEventListener('submit', function (e) {

//     e.preventDefault()

//     var email = document.getElementById('email').value

//     fetch(`${API_URL}/admin/subscribe?:limit=1&offset=0`, {
//         method: 'POST',
//         body: JSON.stringify({
//             email: email,
//         }),

//         headers: {
//             "Content-Type": "application/json; charset= UTF-8",
//             authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MzBmZTFiYi02NzQzLTQ4MTItYTJhOC04MGY0OWE1YWUxYjciLCJqdGkiOiJjMjc4NTAzMWZkYTk4YjFjODM2OWYzMmYyODBhYTBmN2NiN2Q4YTQ1NjAwYTAzYmIxY2E5ZTMzMzA3ZDY3MDg5ZWU4MDExNTEwZWQzNTc3MSIsImlhdCI6MTYxNjk2NjIwOSwibmJmIjoxNjE2OTY2MjA5LCJleHAiOjE2NDg1MDIyMDksInN1YiI6IjIiLCJzY29wZXMiOltdfQ.DrzDvmpG5lIygLjjoUIzXbeCFtBNCMjBFB3LXTqYo61h_oVbzaYvgWC1wEap2A5xOgodCmV1Vr2kdDX06lTgSFT-JWmehdShFmIvvGDTL4GGO4zaSFFooJDi3gUj0QjhvrHu0omQxu4IltL3iuHjY1QqPr_ph0hYQgSlgRCIPsUqNMATOf-fcOhJ2SD__29LKXDhx0CHN_bovytmTeS_2N3__TcKF27oSWxexeaSGnl3j1_0SmmCdHmMShjEgyRtIpDg3sgk8AoSBDCo_rRe7yOFjEqBLxLKvcmXsnvHlyl9nmYjSq3x5VULqTjRXCPQdQ8qlR-0H0wDeVOWEQyf307O7b0F-uoUWDdPwGiEgnvTd3_A3Labqr9d-CrBAFHzw-c7JFa7lgJ9JNbjlsZDE3SZ-41CI6KUfmMcbjU23AWiMIv_bjWp8iNOJlT1xjCJUkHUeX-9Cmjq18V8Ydk37ExpkC1lwGthksgFySxkr7woSshiSHFtKk2fb5yIgOMXCupnkF6VBB7rqkrjMJgCVk0xXKUMUIvyzvPKIsu7JQVvA-4GHlgzWUC0aFOMMIa-gJOLno0RPnM-KID5RgnhxD3S1TG8AJ0hDONv1M_EAIwa-1AUbqRzUxrwVurOCkYSas0FWzNncwxnlVJOv4JldxHZarsPleGgIRyudx_uk2U',
//         }

//     })
//         .then((res) => {
//             // console.log(res)
//             res.json()
//                 .then((res) => {
//                     const data = res.result
//                     // console.log(res)
//                     if (data && res.status) {
//                         const message = document.getElementById('message');
//                         message.append(res.message);

//                     } else {
//                         const message = document.getElementById('message');
//                         message.append(res.message);
//                     }
//                 }

//                 )
//         }

//         )
// })

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