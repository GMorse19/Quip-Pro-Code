'use strict'

// const store = require('../store')
const api = require('./api')
const ui = require('./ui')

const onCreateQuip = function (event) {
  event.preventDefault()
  api.createQuip()
    .then(ui.onCreateQuipSuccess)
    .catch(ui.onCreateQuipFailure)
  // $('.box').text('')
}

const onGetQuip = function (event) {
  console.log('onGetQuip')
  event.preventDefault()
  api.getQuip()
    .then(ui.onGetQuipSuccess)
    .catch(ui.onGetQuipFailure)
}

module.exports = {
  onCreateQuip,
  onGetQuip
}
