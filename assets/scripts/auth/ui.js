'use strict'

const store = require('../store')
// const events = require('./events')

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
// const signUpSuccessMessage = function (newText) {
//   $('.content').empty()
//   $('#message').text(newText)
//   $('#message').removeClass('success')
//   $('#message').addClass('failure')
// }

// const signUpFailureMessage = function (newText) {
//   $('.content').empty()
//   $('#message').text(newText)
//   $('#message').removeClass('success')
//   $('#message').addClass('failure')
// }
//
// const onSignInFailureMessage = function (newText) {
//   $('.content').empty()
//   $('#message').text(newText)
//   $('#message').removeClass('success')
//   $('#message').addClass('failure')
// }

const onSignUpSuccess = function (responseData) {
  // $('#sign-up').trigger('reset')
  // $('#option-bar').show()
  // // $('#forms').show()
  // $('.content').empty()
  // $('#sign-in').trigger('reset')
  // $('.hide-signUp').hide()
  // $('.hide-signIn').hide()
  // $('.show-signOut').show()
  // signUpFailureMessage('')
  // events.onSignIn(responseData)
  console.log(responseData)
  store.user = responseData.user
  console.log(store.user)
  $('#show-signin-forms').hide()
  $('#show-signup-forms').show()
  $('.hide-signUp').hide()
  $('#sign-in').show()
  successMessage('Signed up successfully! ' + store.user.email)
}

const onSignUpFailure = function () {
  $('.content').empty()
  $('#sign-up').trigger('reset')
  failureMessage('⚠️Bad Request! Unable to sign up! ⚠️')
}

const onSignInSuccess = function (responseData) {
  $('#option-bar').show()
  // $('#forms').show()
  $('.content').empty()
  $('#sign-in').trigger('reset')
  $('.hide-signUp').hide()
  $('.hide-signIn').hide()
  $('.show-signOut').show()
  // signUpFailureMessage('')
  store.user = responseData.user
  console.log(store.user)
  successMessage('You are now signed in! ' + store.user.email)
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
  $('#option-barTwo').hide()
  $('#option-bar').hide()
  $('#delete-quip').hide()
  $('#new-quip').hide()
  $('#update-quip').hide()
  $('#show-quip').hide()
  $('.content').empty()
  // $('.hide-signUp').show()
  $('.hide-signIn').show()
  // $('#change-password').hide()
  $('#sign-up').trigger('reset')
  $('#change-password').trigger('reset')
  successMessage('You have signed out. Thanks for visiting! Come back soon.')
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
