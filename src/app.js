// const base64 = require('base-64')

// $('#sign-up-form').submit(function (event) {
//     event.preventDefault();
//     console.log('hello world')
//     $('#output-box').text('Hello World')
//   })

// $('#sign-up-form').submit(function (event) {
//     event.preventDefault();
//     let username = $('#sign-up-username').val()
//     let password = $('#sign-up-password').val()
//     let bio = $('#sign-up-bio').val()
//     let user = {
//       username: username,
//       password: password,
//       bio: bio
//     }
//     console.log('====================================')
//     const ajaxSettings = {
//       method: 'POST',
//        data: user   // GETS PASSED IN AS REQ.BODY          
//     };

//     $.ajax(`/signup`, ajaxSettings)
//       .then(data => {
//         $('#output-box').text(JSON.stringify(data))
//       });
//   })

//   $('#sign-in-form').submit(function (event) {
//     event.preventDefault();
    
//     let username = $('#sign-in-username').val()
//     let password = $('#sign-in-password').val()
    // let userinfo = base64.encode(`${username}:${password}`)
    
//     const ajaxSettings = {
//       method: 'POST',
//       headers: {
//         'authorization': `Basic ${userinfo}`
//       }   
//     };

//     $.ajax(`/signin`, ajaxSettings)
//       .then(data => {
//         $('#output-box').text(JSON.stringify(data))
//       });
//   })

//   $('#read-form').submit(function (event) {
//     event.preventDefault();
    
//     let token = $('#token').val()
//     $('#output-box').text(token)
    
//     const ajaxSettings = {
//       method: 'GET',
//       headers: {
//         'authorization': `Bearer ${token}`
//       }   
//     };

//     $.ajax(`/read`, ajaxSettings)
//       .then(data => {
//         $('#output-box').text(JSON.stringify(data))
//       });
//   })