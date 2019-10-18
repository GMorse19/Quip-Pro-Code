'use strict'

const config = require('../config')
const store = require('../store')

const createQuip = function (formData) {
  console.log('createQuip')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/quips',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const getQuip = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/quips/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateQuip = function (author, id) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/quips/${id}`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'quip': {
        'author': author
      }
    }
  })
}

const showQuip = function (id) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + `/quips/${id}`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const destroyQuip = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + `/quips/${id}`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createQuip,
  getQuip,
  updateQuip,
  showQuip,
  destroyQuip
}
