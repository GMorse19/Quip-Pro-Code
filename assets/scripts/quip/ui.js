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
  successMessage('Create worked')
}

const onCreateQuipFailure = function () {
  console.log('onCreateGameFailure')
  failureMessage('WRONG!')
}

const onGetQuipSuccess = function (data) {
  // store.quips = responseData.quips
  console.log(data)
  console.log('onGetQuipSuccess ' + data.quips[0].author)
  successMessage('It worked')
}

const onGetQuipFailure = function () {
  console.log('onGetGameFailure')
  failureMessage('WRONG!')
}

const onUpdateQuipSuccess = function () {
  console.log('onUpdateQuipSuccess')
  successMessage('onUpdateQuip worked!')
}

const onUpdateQuipFailure = function () {
  console.log('onUpdateQuipFailure')
  failureMessage('WRONG!')
}

const onShowQuipSuccess = function (data) {
  console.log(data)
  console.log('onShowQuipSuccess' + data)
}

const onShowQuipFailure = function () {
  console.log('onShowQuipFailure')
}

module.exports = {
  onCreateQuipSuccess,
  onCreateQuipFailure,
  onGetQuipSuccess,
  onGetQuipFailure,
  onUpdateQuipSuccess,
  onUpdateQuipFailure,
  onShowQuipSuccess,
  onShowQuipFailure
}
