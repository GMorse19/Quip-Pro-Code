'use strict'

const store = require('../store')

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
const signUpSuccessMessage = function (newText) {
  $('.content').empty()
  $('#sign-in-message').text(newText)
  $('#sign-in-message').removeClass('success')
  $('#sign-in-message').addClass('failure')
}

const signUpFailureMessage = function (newText) {
  $('.content').empty()
  $('#sign-in-message').text(newText)
  $('#sign-in-message').removeClass('success')
  $('#sign-in-message').addClass('failure')
}

const onSignInFailureMessage = function (newText) {
  $('.content').empty()
  $('#sign-in-message').text(newText)
  $('#sign-in-message').removeClass('success')
  $('#sign-in-message').addClass('failure')
}

const onSignUpSuccess = function () {
  $('.content').empty()
  $('#sign-up').trigger('reset')
  // $('.hide-signUp').hide()
  signUpSuccessMessage('Signed up successfully!')
}

const onSignUpFailure = function () {
  $('.content').empty()
  $('#sign-up').trigger('reset')
  signUpFailureMessage('⚠️You failed to sign up! ⚠️')
}

const onSignInSuccess = function (responseData) {
  $('#option-bar').show()
  // $('#forms').show()
  $('.content').empty()
  $('#sign-in').trigger('reset')
  $('.hide-signUp').hide()
  $('.hide-signIn').hide()
  $('.show-signOut').show()
  signUpFailureMessage('')
  store.user = responseData.user
  console.log(store.user)
  successMessage('You are now signed in! ' + store.user.email)
}

const onSignInFailure = function () {
  $('.content').empty()
  $('#sign-in').trigger('reset')
  onSignInFailureMessage('⚠️You failed to sign in! ⚠️')
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
  $('#option-bar').hide()
  $('#delete-quip').hide()
  $('#new-quip').hide()
  $('#update-quip').hide()
  $('#show-quip').hide()
  $('.content').empty()
  $('.hide-signUp').show()
  $('.hide-signIn').show()
  // $('#change-password').hide()
  $('#sign-up').trigger('reset')
  $('#change-password').trigger('reset')
  successMessage('You have signed out. Thanks for playing!')
  $('.show-signOut').hide()
}

const onSignOutFailure = function () {
  failureMessage('⚠️You did not sign out successfully!⚠️')
  // $('#counter').hide()
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
