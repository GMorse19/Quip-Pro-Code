'use strict'

const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

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
  // $('.box').text('')
}

const onGetQuip = function (event) {
  $('#show-quip').hide()
  $('#update-quip').hide()
  $('#new-quip').hide()
  $('#delete-quip').hide()
  $('#option-barTwo').show()
  console.log('onGetQuip')
  event.preventDefault()
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
  console.log(author)
  console.log(id)
  // const formData = getFormFields(form)
  api.updateQuip(content, author, mood, id)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const onShowQuip = function (event) {
  console.log('onShowQuip')
  event.preventDefault()
  $('#option-barTwo').show()
  const id = $('#find-quip').val()
  console.log(id)
  api.showQuip(id)
    .then(ui.onShowQuipSuccess)
    .catch(ui.onShowQuipFailure)
}

const onDestroyQuip = function (event) {
  console.log('onDestroyQuip')
  event.preventDefault()
  const id = $('#destroy-quip').val()
  store.quote_id = id
  console.log(id)
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
  // $('.content').empty()
  // $('#id-update').show()
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
  // $('.content').empty()
  $('#delete-quip').show()
  $('#new-quip').hide()
  $('#update-quip').hide()
  $('#show-quip').hide()
}

// const idUpdate = function () {
//   successMessage('Update your quote.')
//   // $('.content').empty()
//   // $('#update-quip').show()
//   // $('#id-update').hide()
//   // $('#show-quip').hide()
//   // $('#new-quip').hide()
//   // $('#delete-quip').hide()
// }

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
  successMessage,
  failureMessage
}
