'use strict'
const authEvents = require('./auth/events.js')
const quipEvents = require('./quip/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#new-quip').on('click', quipEvents.onCreateQuip)
  $('#get-quip').on('click', quipEvents.onGetQuip)
})
