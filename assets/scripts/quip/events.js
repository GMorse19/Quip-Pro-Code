'use strict'

const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
// const showQuipsTemplate = require('../templates/quip.handlebars')

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

const onCreateQuip = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createQuip(formData)
    .then(ui.onCreateQuipSuccess)
    .catch(ui.onCreateQuipFailure)
}

const onGetQuip = function (event) {
  event.preventDefault()
  $('#show-quip').hide()
  $('#update-quip').hide()
  $('#new-quip').hide()
  $('#delete-quip').hide()
  $('#option-barTwo').show()
  // console.log('onGetQuip')
  api.getQuip()
    .then(ui.onGetQuipSuccess)
    .catch(ui.onGetQuipFailure)
}

const onUpdateQuip = function (event) {
  event.preventDefault()
  const author = $('#quip-author').val()
  const content = $('#quip-content').val()
  const mood = $('#quip-mood').val()
  const id = $('#quip-id').val()
  // console.log(author)
  // console.log(id)
  api.updateQuip(content, author, mood, id)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const onShowQuip = function (event) {
  // console.log('onShowQuip')
  event.preventDefault()
  // $('#option-barTwo').show()
  const id = $('#find-quip').val()
  // console.log(id)
  api.showQuip(id)
    .then(ui.onShowQuipSuccess)
    .catch(ui.onShowQuipFailure)
}

const onDestroyQuip = function (event) {
  // console.log('onDestroyQuip')
  event.preventDefault()
  const id = $('#destroy-quip').val()
  store.quote_id = id
  // console.log(id)
  api.destroyQuip(id)
    .then(ui.onDestroyQuipSuccess)
    .catch(ui.onDestroyQuipFailure)
}

const findQuote = function () {
  successMessage('Selct your qoute.')
  $('#option-barTwo').hide()
  $('.content').empty()
  $('#show-quip').show()
  $('#update-quip').hide()
  $('#delete-quip').hide()
  $('#new-quip').hide()
}

const updateQuote = function () {
  successMessage('Update your quote.')
  $('#update-quip').show()
  $('#show-quip').hide()
  $('#new-quip').hide()
  $('#delete-quip').hide()
}

const addQuote = function () {
  successMessage('Create your quote.')
  $('#option-barTwo').hide()
  $('#new-quip').show()
  $('#update-quip').hide()
  $('#show-quip').hide()
  $('#delete-quip').hide()
  $('.content').empty()
}

const destroyQuote = function () {
  successMessage('Destroy a quote by ID.')
  $('#delete-quip').show()
  $('#new-quip').hide()
  $('#update-quip').hide()
  $('#show-quip').hide()
}

const randomQuote = function () {
  console.log(store.quips)
  if (store.quips.length < 1) {
    return failureMessage('Sorry. You have no quotes.')
  } else {
  const randomChoice = store.quips[Math.floor(Math.random() * store.quips.length)]
  const id = randomChoice.id
  // const showQuipsHtml = showQuipsTemplate({ quips: randomChoice })
  // $('.content').empty()
  // $('.content').append(showQuipsHtml)
  // successMessage('Not a bad choice!')
  // $('#delete-quip').hide()
  // $('#new-quip').hide()
  // $('#update-quip').hide()
  // $('#show-quip').hide()
  api.showQuip(id)
    .then(ui.onShowQuipSuccess)
    .catch(ui.onShowQuipFailure)
  }
}

const showSignup = function () {
  successMessage('Please SIGN UP!')
  $('.hide-signUp').show()
  $('#sign-in').hide()
  $('#show-signup-forms').hide()
  $('#show-signin-forms').show()
}

const showSignin = function () {
  successMessage('Please SIGN in!')
  $('.hide-signUp').hide()
  $('#sign-in').show()
  $('#show-signup-forms').show()
  $('#show-signin-forms').hide()
}

module.exports = {
  onCreateQuip,
  onGetQuip,
  onUpdateQuip,
  onShowQuip,
  onDestroyQuip,
  findQuote,
  updateQuote,
  addQuote,
  destroyQuote,
  randomQuote,
  successMessage,
  failureMessage,
  showSignup,
  showSignin
}
