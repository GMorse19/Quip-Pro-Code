'use strict'

const store = require('../store')
const showQuipsTemplate = require('../templates/find.handlebars')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignUpSuccess = function (data) {
  store.user = data.user
  $('#show-signin-forms').hide()
  $('#show-signup-forms').show()
  $('.hide-signUp').hide()
  $('#sign-in').show()
  successMessage('Signed up successfully! ' + data.user.email)
}

const onSignUpFailure = function () {
  $('.content').empty()
  $('#sign-up').trigger('reset')
  failureMessage('⚠️Bad Request! Unable to sign up! ⚠️')
}

const onSignInSuccess = function (data) {
  store.user = data.user
  $('#option-bar').show()
  $('.content').empty()
  $('#sign-in').trigger('reset')
  $('.hide-signUp').hide()
  $('.hide-signIn').hide()
  $('.show-signOut').show()
  $('#show-password').show()
  $('#change-password').hide()
  successMessage('Welcome ' + data.user.email + '!')
  const starterQuote = {
    'quote': {
      'content': 'Have no fear of perfection, You will never achieve it.',
      'author': 'Salvador Dali',
      'mood': 'Surreal'
    }
  }
  const quotes = starterQuote
  const showQuipsHtml = showQuipsTemplate({ quotes: quotes })
  $('.content').append(showQuipsHtml)
}

const onSignInFailure = function () {
  $('.content').empty()
  $('#sign-in').trigger('reset')
  failureMessage('⚠️You failed to sign in! ⚠️')
}

const onChangePasswordSuccess = function () {
  $('.content').empty()
  $('#change-password').trigger('reset')
  successMessage('Changed Password successfully!')
}

const onChangePasswordFailure = function () {
  $('.content').empty()
  $('#change-password').trigger('reset')
  failureMessage('🔥🔥PassWord Change Failed 🔥🔥')
}

const onSignOutSuccess = function () {
  $('.show-signOut').hide()
  $('#option-barTwo').hide()
  $('#option-bar').hide()
  $('#delete-quip').hide()
  $('#new-quip').hide()
  $('#update-quip').hide()
  $('#show-quip').hide()
  $('.hide-signIn').show()
  $('.content').empty()
  $('#sign-up').trigger('reset')
  $('#change-password').trigger('reset')
  successMessage('Thanks for visiting! Come back soon.')
}

const onSignOutFailure = function () {
  failureMessage('⚠️You did not sign out successfully!⚠️')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
