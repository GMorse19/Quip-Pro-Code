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
  store.quip = data.quip
  const showQuipsHtml = showQuipsTemplate({ quips: data })
  $('.content').append(showQuipsHtml)
  successMessage('Wonderful Quote!')
}

const onCreateQuipFailure = function () {
  failureMessage('Sorry, something went wrong. Please try again.')
}

const onGetQuipSuccess = function (data) {
  store.quips = data.quips
  if (data.quips < 1) {
    failureMessage('Sorry, try adding a quote first')
  } else {
    const showQuipsHtml = showQuipsTemplate({ quips: data.quips })
    successMessage('Here are your quotes ' + store.user.email)
    $('.content').empty()
    $('.content').append(showQuipsHtml)
  }
}

const onGetQuipFailure = function () {
  failureMessage('Sorry, something went wrong. Please try again.')
}

const onUpdateSuccess = function (data) {
  $('#update-quip').trigger('reset')
  $('#update-quip').hide()
  const showQuipsHtml = showQuipsTemplate({ quips: data })
  successMessage('Your quote has been updated!')
  $('.content').empty()
  $('.content').append(showQuipsHtml)
}

const onUpdateFailure = function () {
  failureMessage('Sorry, something went wrong. Please try again.')
}

const onShowQuipSuccess = function (data) {
  $('.content').empty()
  $('#show-quip').hide()
  $('#update-quip').hide()
  $('#delete-quip').hide()
  $('#option-barTwo').show()
  $('#show-quip').trigger('reset')
  const showQuipsHtml = showQuipsTemplate({ quips: data })
  $('.content').append(showQuipsHtml)
  successMessage('What a stupendous quote!')
}

const onShowQuipFailure = function () {
  $('.content').empty()
  $('#update-quip').hide()
  $('#delete-quip').hide()
  $('#show-quip').trigger('reset')
  failureMessage('Sorry, something went wrong. Please try again.')
}

const onDestroyQuipSuccess = function () {
  $('.content').empty()
  $('#delete-quip').trigger('reset')
  successMessage('Your quote with Id: ' + store.quote_id + ' was destroyed.')
}

const onDestroyQuipFailure = function () {
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
