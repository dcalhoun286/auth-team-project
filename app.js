const base64 = require('base-64')

$('#sign-up-button').on('click', () => {
    $.ajax(`http://localhost:3000/signup`)
    .send()
    .then(data => {
      $('#output-box').text(data)
      // data
      });
})

function afterClick(){
  let __ENDPOINT__ = $(this).value()
  let userinfo = base64.encode(`${username}:${password}`)
  $.ajax(`http://localhost:3000/signin${__ENDPOINT__}`)
  .set('authorization', `Basic ${userinfo}`)
  .then(data => {
    $('#output-box').text(data)
    // data
    });
}

function afterClick(){
  let __ENDPOINT__ = $(this).value()
  $.ajax(`http://localhost:3000/read${__ENDPOINT__}`)
  .auth(`Bearer ${token}`)
  .then(data => {
    $('#output-box').text(data)
    // returns own users data
    });
}

function afterClick(){
  let __ENDPOINT__ = $(this).value()
  $.ajax(`http://localhost:3000/delete${__ENDPOINT__}`, ajaxSetting)
  .auth(`Bearer ${token}`)
  .then(data => {
    $('#output-box').text(data)
    });
}


// const ajaxSettings = {
//   method: 'GET'
// };