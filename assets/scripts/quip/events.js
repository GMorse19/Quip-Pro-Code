'use strict'

const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const showQuipsTemplate = require('../templates/find.handlebars')

const badJokes = [ "Q: What did the duck say when she bought a lipstick? A: Put it on my bill!",
"Q: Where did the computer go dancing? A: The disc-o!", "Q: What do bees do if they need a ride? A: Wait at the buzz stop!",
"Q: What did the little mountain say to the bigger mountain? A: Hi Cliff!",
"Q: Why did the can crusher quit his job? A: Because it was soda pressing!",
"Q: What did Winnie the Pooh say to his agent? A: 'Show me the honey!'",
"Q: Why did the scarecrow win an award? A: He was outstanding in his field."]


const goodQuotes = ["Don't limit your challenges, challenge your limits.",
  "If you cannot do great things, do small things in a great way.",
  "Falling down is an accident; Staying down is a choice.",
  "The which does not kill you, only makes you stronger.", "Wake up. Kick ass. Repeat.",
  "Take your dreams seriously.", "If opportunity doesn't knock, build a door.",
  "Only dead fish go with the flow.",
  "Our character is not defined in the good times, but in the hard times.",
  "Quitters never win. Winners never quit!",
  "Remember to focus on goals that are within your control. ",
  "Even if you fall on your face, you’re still moving forward.",
  "Successful men and women keep moving. They make mistakes but they don’t quit.",
  "If at first you don’t succeed, then skydiving definitely isn’t for you.",
  "No matter where you go, there you are."
]

const successMessage = function(newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = function(newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onCreateQuip = function(event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createQuip(formData)
    .then(ui.onCreateQuipSuccess)
    .catch(ui.onCreateQuipFailure)
}

const onGetQuip = function(event) {
  event.preventDefault()
  $('#show-quip').hide()
  $('#update-quip').hide()
  $('#new-quip').hide()
  $('#delete-quip').hide()
  $('#option-barTwo').show()
  $('#change-password').hide()
  $('#show-password').show()
  api.getQuip()
    .then(ui.onGetQuipSuccess)
    .catch(ui.onGetQuipFailure)
}

const onUpdateQuip = function(event) {
  event.preventDefault()
  const author = $('#quip-author').val()
  const content = $('#quip-content').val()
  const mood = $('#quip-mood').val()
  const id = $('#quip-id').val()
  api.updateQuip(content, author, mood, id)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const onShowQuip = function(event) {
  event.preventDefault()
  const id = $('#find-quip').val()
  api.showQuip(id)
    .then(ui.onShowQuipSuccess)
    .catch(ui.onShowQuipFailure)
}

const onDestroyQuip = function(event) {
  event.preventDefault()
  const id = $('#destroy-quip').val()
  store.quote_id = id
  api.destroyQuip(id)
    .then(() => api.getQuip())
    .then(ui.onGetQuipSuccess)
    .then(ui.onDestroyQuipSuccess)
    .catch(ui.onDestroyQuipFailure)
}

const findQuote = function() {
  successMessage('Select your quote.')
  $('#option-barTwo').hide()
  $('.content').empty()
  $('#show-quip').show()
  $('#update-quip').hide()
  $('#delete-quip').hide()
  $('#new-quip').hide()
  $('#change-password').hide()
  $('#show-password').show()
}

const updateQuote = function() {
  successMessage('Update your quote.')
  $('#update-quip').show()
  $('#show-quip').hide()
  $('#new-quip').hide()
  $('#delete-quip').hide()
  $('#change-password').hide()
  $('#show-password').show()
}

const addQuote = function() {
  successMessage('Create your quote.')
  $('#option-barTwo').hide()
  $('#new-quip').show()
  $('#update-quip').hide()
  $('#show-quip').hide()
  $('#delete-quip').hide()
  $('.content').empty()
  $('#change-password').hide()
  $('#show-password').show()
}

const destroyQuote = function() {
  successMessage('Destroy a quote by ID.')
  $('#delete-quip').show()
  $('#new-quip').hide()
  $('#update-quip').hide()
  $('#show-quip').hide()
  $('#change-password').hide()
  $('#show-password').show()
}

const showPassword = function() {
  successMessage('Change your password.')
  $('#update-quip').hide()
  $('#show-quip').hide()
  $('#new-quip').hide()
  $('#delete-quip').hide()
  $('#change-password').show()
  $('#show-password').hide()
}

const showSignup = function() {
  successMessage('Please SIGN UP!')
  $('.hide-signUp').show()
  $('#sign-in').hide()
  $('#show-signup-forms').hide()
  $('#show-signin-forms').show()
  $('#change-password').hide()
  $('#show-password').show()
}

const showSignin = function() {
  successMessage('Please SIGN in!')
  $('.hide-signUp').hide()
  $('#sign-in').show()
  $('#show-signup-forms').show()
  $('#show-signin-forms').hide()
  $('#change-password').hide()
  $('#show-password').show()
}

const randomQuote = function() {
  $('#show-password').show()
  $('#change-password').hide()
  if (store.quips.length < 1) {
    return failureMessage('Sorry. You have no quotes.')
  } else {
    const randomChoice = store.quips[Math.floor(Math.random() * store.quips.length)]
    const id = randomChoice.id
    api.showQuip(id)
      .then(ui.onShowQuipSuccess)
      .catch(ui.onShowQuipFailure)
  }
}

const selectRandom = function(arr) {
  $('#update-quip').hide()
  $('#new-quip').hide()
  $('#show-quip').hide()
  $('.content').empty()
  $('#change-password').hide()
  $('#show-password').show()
  const randomChoice = arr[Math.floor(Math.random() * arr.length)]
  const quotes = {
    'quote': {
      'content': randomChoice,
      'author': 'Unknown',
      'mood': 'Sassy'
    }
  }
  const showQuipsHtml = showQuipsTemplate({
    quotes: quotes
  })
  $('.content').append(showQuipsHtml)
}

const badJoke = function() {
  successMessage('One marvelous quote randomly selected for you.')
  selectRandom(badJokes)
}

const uplift = function() {
  successMessage('An uplifting quote randomly selected for you.')
  selectRandom(goodQuotes)
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
  showPassword,
  showSignup,
  showSignin,
  badJoke,
  uplift
}
