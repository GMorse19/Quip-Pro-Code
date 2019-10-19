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
  $('#new-quip').trigger('reset')
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
  $('.content').empty()
  $('.content').append(showQuipsHtml)
}

const onGetQuipFailure = function () {
  console.log('onGetGameFailure')
  failureMessage('WRONG!')
}

const onUpdateSuccess = function (data) {
  $('#update-quip').trigger('reset')
  // $('#quip-id').trigger('reset')
  // $('#quip-author').trigger('reset')
  console.log(data)
  console.log('onUpdateQuipSuccess')
  successMessage('onUpdateQuip worked!')
}

const onUpdateFailure = function () {
  console.log('onUpdateQuipFailure')
  failureMessage('WRONG!')
}

const onShowQuipSuccess = function (data) {
  $('.content').empty()
  $('#show-quip').trigger('reset')
  const showQuipsHtml = showQuipsTemplate({ quips: data })
  $('.content').append(showQuipsHtml)
  console.log(data)
  console.log('onShowQuipSuccess' + data)
}

const onShowQuipFailure = function () {
  console.log('onShowQuipFailure')
}

const onDestroyQuipSuccess = function () {
  $('#delete-quip').trigger('reset')
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
  onUpdateSuccess,
  onUpdateFailure,
  onShowQuipSuccess,
  onShowQuipFailure,
  onDestroyQuipSuccess,
  onDestroyQuipFailure
}
