// const API_URL = `https://api.bgiethiopia.com/api`;
// const API_URL = `http://127.0.0.1:7891/api`;





// //Cv Submit
// var form = document.getElementById('cv_form');

// form.addEventListener('submit', function (e) {
//     console.log(form)

//     e.preventDefault()
//     var vacancy_id = document.getElementById('vacancy_id').value
//     var full_name = document.getElementById('full_name').value
//     var date_of_birth = document.getElementById('date_of_birth').value
//     var country = document.getElementById('country').value
//     var phone = document.getElementById('date_of_birth').value
//     var language_ability = document.querySelector("input[name=lang]:checked").value
//     var educations = [{
//         //    Post Graduate 
//         job_applicant_education_category_id: 1,
//         qualification: document.getElementById('qualification').value,
//         field_of_study: document.getElementById('field_of_study').value,
//         name_of_university: document.getElementById('name_of_university').value,
//         country: document.getElementById('country').value,
//         attend_start_date: document.getElementById('attend_start_date').value,
//         attend_end_date: document.getElementById('attend_end_date').value,
//     },
//     {
//         // Under Graduate
//         job_applicant_education_category_id: 2,
//         qualification: document.getElementById('qualification2').value,
//         field_of_study: document.getElementById('field_of_study2').value,
//         name_of_university: document.getElementById('name_of_university2').value,
//         country: document.getElementById('country2').value,
//         attend_start_date: document.getElementById('attend_start_date2').value,
//         attend_end_date: document.getElementById('attend_end_date2').value,
//     },
//     {
//         // Vocational And Other
//         job_applicant_education_category_id: 3,
//         qualification: document.getElementById('qualification3').value,
//         field_of_study: document.getElementById('field_of_study3').value,
//         name_of_university: document.getElementById('name_of_university3').value,
//         country: document.getElementById('country3').value,
//         attend_start_date: document.getElementById('attend_start_date3').value,
//         attend_end_date: document.getElementById('attend_end_date3').value,
//     },
//     {
//         // HighSchool
//         job_applicant_education_category_id: 4,
//         country: document.getElementById('country4').value,
//         attend_start_date: document.getElementById('attend_start_date4').value,
//         attend_end_date: document.getElementById('attend_end_date4').value,
//     },

//     ]
//     // var licences = [{
//     //     name: document.getElementById('licence_name').value,
//     //     description: document.getElementById('description').value,
//     // },
//     // {
//     //     name: document.getElementById('licence_name2').value,
//     //     description: document.getElementById('description').value,
//     // },
//     // {
//     //     name: document.getElementById('licence_name3').value,
//     //     description: document.getElementById('description').value,
//     // },
//     // {
//     //     name: document.getElementById('licence_name4').value,
//     //     description: document.getElementById('description').value,
//     // },
//     // {
//     //     name: document.getElementById('licence_name5').value,
//     //     description: document.getElementById('description').value,
//     // },
//     // ]
//     var experiences = [{
//         job_title: document.getElementById('job_title').value,
//         job_start_date: document.getElementById('job_start_date').value,
//         job_end_date: document.getElementById('job_end_date').value,
//         employer: document.getElementById('employer').value,
//         country: document.getElementById('job_country').value,
//         responsibilities: document.getElementById('responsibilities').value,
//     },
//     {
//         job_title: document.getElementById('job_title2').value,
//         job_start_date: document.getElementById('job_start_date2').value,
//         job_end_date: document.getElementById('job_end_date2').value,
//         employer: document.getElementById('employer2').value,
//         country: document.getElementById('job_country2').value,
//         responsibilities: document.getElementById('responsibilities2').value,
//     },
//     {
//         job_title: document.getElementById('job_title3').value,
//         job_start_date: document.getElementById('job_start_date3').value,
//         job_end_date: document.getElementById('job_end_date3').value,
//         employer: document.getElementById('employer3').value,
//         country: document.getElementById('job_country3').value,
//         responsibilities: document.getElementById('responsibilities3').value,
//         reason_for_leaving: document.getElementById('reason_for_leaving').value,
//     }
//     ]


//     // console.log(language_ability)
//     fetch(`${API_URL}/admin/job_applicant`, {
//         method: 'POST',
//         body: JSON.stringify({
//             vacancy_id: vacancy_id,
//             full_name: full_name,
//             date_of_birth: date_of_birth,
//             country: country,
//             phone: phone,
//             language_ability: language_ability,
//             educations: educations,
//             // licences: licences,
//             experiences: experiences
//         }),

//         headers: {
//             "Content-Type": "application/json; charset= UTF-8",
//             authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MzBmZTFiYi02NzQzLTQ4MTItYTJhOC04MGY0OWE1YWUxYjciLCJqdGkiOiJjMjc4NTAzMWZkYTk4YjFjODM2OWYzMmYyODBhYTBmN2NiN2Q4YTQ1NjAwYTAzYmIxY2E5ZTMzMzA3ZDY3MDg5ZWU4MDExNTEwZWQzNTc3MSIsImlhdCI6MTYxNjk2NjIwOSwibmJmIjoxNjE2OTY2MjA5LCJleHAiOjE2NDg1MDIyMDksInN1YiI6IjIiLCJzY29wZXMiOltdfQ.DrzDvmpG5lIygLjjoUIzXbeCFtBNCMjBFB3LXTqYo61h_oVbzaYvgWC1wEap2A5xOgodCmV1Vr2kdDX06lTgSFT-JWmehdShFmIvvGDTL4GGO4zaSFFooJDi3gUj0QjhvrHu0omQxu4IltL3iuHjY1QqPr_ph0hYQgSlgRCIPsUqNMATOf-fcOhJ2SD__29LKXDhx0CHN_bovytmTeS_2N3__TcKF27oSWxexeaSGnl3j1_0SmmCdHmMShjEgyRtIpDg3sgk8AoSBDCo_rRe7yOFjEqBLxLKvcmXsnvHlyl9nmYjSq3x5VULqTjRXCPQdQ8qlR-0H0wDeVOWEQyf307O7b0F-uoUWDdPwGiEgnvTd3_A3Labqr9d-CrBAFHzw-c7JFa7lgJ9JNbjlsZDE3SZ-41CI6KUfmMcbjU23AWiMIv_bjWp8iNOJlT1xjCJUkHUeX-9Cmjq18V8Ydk37ExpkC1lwGthksgFySxkr7woSshiSHFtKk2fb5yIgOMXCupnkF6VBB7rqkrjMJgCVk0xXKUMUIvyzvPKIsu7JQVvA-4GHlgzWUC0aFOMMIa-gJOLno0RPnM-KID5RgnhxD3S1TG8AJ0hDONv1M_EAIwa-1AUbqRzUxrwVurOCkYSas0FWzNncwxnlVJOv4JldxHZarsPleGgIRyudx_uk2U',
//         }

//     })
//         .then((res) => {
//             console.log(res)
//             res.json()
//                 .then((res) => {
//                     const data = res.result

//                     if (data && res.status) {
//                         alert(res.message)
//                         console.log(res)

//                     } else {
//                         alert(res.message)
//                         console.log(res)
//                     }
//                 }

//                 )
//         }

//         )
// })



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
//             res.json()
//                 .then((res) => {
//                     const data = res.result
//                     console.log(res)
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