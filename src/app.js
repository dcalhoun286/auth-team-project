const base64 = require('base-64')

    // $('#sign-up-form').submit(function (event) {
    //   event.preventDefault();
    //   $('#output-box').text('HELLO WORLD');
    // })

//   event.preventDefault();
//   const ajaxSettings = {
//     method: 'POST'
//   };
//   let username = $('#sign-up > .username').val()
//   let password = $('#sign-up > .password').val()
//   let bio = $('#sign-up > .content').val()
//   let user = {
//     username: username,
//     password: password,
//     bio: bio
//   }
//   $.ajax(`http://localhost:3000/signup`, ajaxSettings)
//     .send(user)
//     .then(data => {
//       $('#output-box').text(data)
//       // data
//     });
// })


// $('#sign-up-form').submit(function (event) {
//     event.preventDefault();
//   $('#output-box').text('HELLO WORLD');
// })

// bring it info from form: username and password

// function afterClick() {
//   let __ENDPOINT__ = $(this).value()
//   let userinfo = base64.encode(`${username}:${password}`)
//   $.ajax(`http://localhost:3000/signin`)
//     .set('authorization', `Basic ${userinfo}`)
//     .then(data => {
//       $('#output-box').text(data)
//       // data
//     });
// }

// function afterClick() {
//   let __ENDPOINT__ = $(this).value()
//   $.ajax(`http://localhost:3000/read${__ENDPOINT__}`)
//     .auth(`Bearer ${token}`)
//     .then(data => {
//       $('#output-box').text(data)
//       // returns own users data
//     });
// }

// function afterClick() {
//   let __ENDPOINT__ = $(this).value()
//   $.ajax(`http://localhost:3000/delete${__ENDPOINT__}`, ajaxSetting)
//     .auth(`Bearer ${token}`)
//     .then(data => {
//       $('#output-box').text(data)
//     });
// }


// const ajaxSettings = {
//   method: 'GET'
// };