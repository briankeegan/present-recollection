'use strict'

const store = require('../store')
const mainPageTemplate = require('../templates/mainpage.handlebars')
const signUpTemplate = require('../templates/sign-up.handlebars')

const signUpSuccess = function (that) {
  // $('.navbar-collapse').collapse('hide')
  that.reset()
  $('#updateGiftIdeaModal').modal('toggle')
  $('#message').text('Successfully signed up!')
}

const signUpPasswordMismatch = function (that) {
  that.reset()
  // focus on first input after reset!
  formFocus(that)
  $('#modal-message').text('Passwords don\'t match')
}

const signUpFailure = function (that) {
  that.reset()
  formFocus(that)
  $('#modal-message').text('Unable to sign up.  Please try a different email.')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#message').text('Welcom ' + store.user.email + '!')
  $('.after-sign-in').css('display', 'block')
  $('.inital-page').css('display', 'none')
  return data.user
}

const signInFailure = function (e) {
  $('#message').text('Invalid username or password')
}

const changePasswordSuccess = function (data) {
  $('#changePasswordModal').modal('toggle')
  $('.navbar-collapse').collapse('hide')
  $('#message').text('Your password was updated!')
}

const changePasswordFailure = function (error) {
  if (error) {
    $('#message').text('Error changing password')
  } else {
    $('#message').text('Passwords don\'t match')
  }
}

const logoutSuccess = function () {
  $('.navbar-collapse').collapse('hide')
  $('#message').text('You\'ve logged out!')
  store.user = null
  $('.after-sign-in').css('display', 'none')
  $('.inital-page').css('display', 'block')
  const mainPageHTML = mainPageTemplate()
  $('#content').html(mainPageHTML)
}

const logoutFailure = function () {
  $('#message').text('Error in signing out.  Maybe you\'re not signed in?')
}

const openSignUpModal = function () {
  return new Promise((resolve, reject) => {
    const signUpHTML = signUpTemplate()
    $('#updateGiftIdeaModal').html(signUpHTML)
    $('#updateGiftIdeaModal').modal('toggle')
    while (document.getElementById('sign-up') === null) {
      console.log('missin the point')
      resolve('#sign-up')
    }
  })
}
// const openSignUpModal = function () {
//   const signUpHTML = signUpTemplate()
//   $('#updateGiftIdeaModal').html(signUpHTML)
//   $('#updateGiftIdeaModal').modal('toggle')
// }

const formFocus = function (form) {
  console.log(form)
  $(form).find('input')[0].focus()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signUpPasswordMismatch,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  logoutSuccess,
  logoutFailure,
  openSignUpModal,
  formFocus
}
