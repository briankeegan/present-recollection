'use strict'

const store = require('../store')
const mainPageTemplate = require('../templates/mainpage.handlebars')

const signUpSuccess = function () {
  // $('.navbar-collapse').collapse('hide')
  $('#signUpModal').modal('toggle')
  $('#message').text('Successfully signed up!')
}

const signUpFailure = function (error) {
  if (error) {
    $('#message').text('Unable to sign up.  Please try a different email.')
  } else {
    $('#message').text('Passwords don\'t match')
  }
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#message').text('Welcom ' + store.user.email + '!')
  $('.after-sign-in').css('display', 'block')
  $('.inital-page').css('display', 'none')
  // $('.navbar-brand').text(store.user.email) -- Where to put email/username
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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  logoutSuccess,
  logoutFailure
}
