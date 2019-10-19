'use strict'
const authEvents = require('./auth/events.js')
const quipEvents = require('./quip/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.show-signOut').hide()
  $('#option-bar').hide()
  $('#option-barTwo').hide()
  // $('#forms').hide()
  $('#new-quip').hide()
  $('#show-quip').hide()
  $('#delete-quip').hide()
  $('#update-quip').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#new-quip').on('submit', quipEvents.onCreateQuip)
  $('#get-quip').on('click', quipEvents.onGetQuip)
  $('#update-quip').on('submit', quipEvents.onUpdateQuip)
  $('#show-quip').on('submit', quipEvents.onShowQuip)
  $('#delete-quip').on('submit', quipEvents.onDestroyQuip)
  $('#find-quote').on('click', quipEvents.findQuote)
  $('#update-quote').on('click', quipEvents.updateQuote)
  $('#add-quote').on('click', quipEvents.addQuote)
  $('#destroy-quote').on('click', quipEvents.destroyQuote)
})
