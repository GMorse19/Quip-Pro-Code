const store = require('../store')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onCreateQuipSuccess = function (responseData) {
  console.log(responseData.quip.content)
  store.quip = responseData.quip
  console.log('onCreateQuipSuccess ' + store.quip.content)
  successMessage('It worked')
}

const onCreateQuipFailure = function () {
  console.log('onCreateGameFailure')
  failureMessage('WRONG!')
}

const onGetQuipSuccess = function (responseData) {
  console.log('onGetQuipSuccess ' + store.user.email)
  successMessage('It worked')
}

const onGetQuipFailure = function () {
  console.log('onGetGameFailure')
  failureMessage('WRONG!')
}

module.exports = {
  onCreateQuipSuccess,
  onCreateQuipFailure,
  onGetQuipSuccess,
  onGetQuipFailure
}
