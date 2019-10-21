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

const onCreateQuipSuccess = function (data) {
  $('#new-quip').hide()
  $('#new-quip').trigger('reset')
  $('.content').empty()
  // console.log(data.quip.content)
  store.quip = data.quip
  // console.log('onCreateQuipSuccess ' + store.quip.id)
  const showQuipsHtml = showQuipsTemplate({ quips: data })
  $('.content').append(showQuipsHtml)
  successMessage('Wonderful Quote!')
}

const onCreateQuipFailure = function () {
  console.log('onCreateGameFailure')
  failureMessage('Sorry, something went wrong. Please try again.')
}

const onGetQuipSuccess = function (data) {
  store.quips = data.quips
  console.log(store.quips)
  console.log(data)
  if (data.quips < 1) {
    failureMessage('Sorry, try adding a quote first')
  } else {
  // console.log('onGetQuipSuccess ' + data.quips[0].content)
  const showQuipsHtml = showQuipsTemplate({ quips: data.quips })
  successMessage('Here are your quotes ' + store.user.email)
  $('.content').empty()
  $('.content').append(showQuipsHtml)
}
}

const onGetQuipFailure = function () {
  // console.log('onGetGameFailure')
  failureMessage('Sorry, something went wrong. Please try again.')
}

const onUpdateSuccess = function (data) {
  $('#update-quip').trigger('reset')
  console.log(data)
  // console.log('onUpdateQuipSuccess')
  const showQuipsHtml = showQuipsTemplate({ quips: data })
  successMessage('Your quote has been updated!')
  $('.content').empty()
  $('.content').append(showQuipsHtml)
}

const onUpdateFailure = function () {
  // console.log('onUpdateQuipFailure')
  failureMessage('Sorry, something went wrong. Please try again.')
}

const onShowQuipSuccess = function (data) {
  $('.content').empty()
  $('#option-barTwo').show()
  $('#show-quip').trigger('reset')
  const showQuipsHtml = showQuipsTemplate({ quips: data })
  $('.content').append(showQuipsHtml)
  // console.log(data)
  // console.log('onShowQuipSuccess' + data)
  successMessage('Is this what you were looking for?')
}

const onShowQuipFailure = function () {
  $('.content').empty()
  $('#show-quip').trigger('reset')
  failureMessage('Sorry, something went wrong. Please try again.')
}

const onDestroyQuipSuccess = function () {
  $('.content').empty()
  $('#delete-quip').trigger('reset')
  // console.log('onDestroyQuipSuccess')
  successMessage('Your quote with Id: ' + store.quote_id + ' was destroyed.')
}

const onDestroyQuipFailure = function () {
  // console.log('onDestroyQuipFailure')
  failureMessage('Sorry, something went wrong. Please try again.')
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
