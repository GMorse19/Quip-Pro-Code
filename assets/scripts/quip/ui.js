const store = require('../store')
const showQuipsTemplate = require('../templates/quip.handlebars')

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
  console.log('onGetQuipSuccess ' + data.quips[0].content)
  const showQuipsHtml = showQuipsTemplate({ quips: data.quips })
  successMessage('It worked')
  $('.content').append(showQuipsHtml)
}

const onGetQuipFailure = function () {
  console.log('onGetGameFailure')
  failureMessage('WRONG!')
}

const onUpdateQuipSuccess = function (data) {
  console.log(data)
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

const onDestroyQuipSuccess = function () {
  console.log('onDestroyQuipSuccess')
}

const onDestroyQuipFailure = function () {
  console.log('onDestroyQuipFailure')
}

module.exports = {
  onCreateQuipSuccess,
  onCreateQuipFailure,
  onGetQuipSuccess,
  onGetQuipFailure,
  onUpdateQuipSuccess,
  onUpdateQuipFailure,
  onShowQuipSuccess,
  onShowQuipFailure,
  onDestroyQuipSuccess,
  onDestroyQuipFailure
}
