'use strict'

const store = require('../store')

const signUpSuccess = function () {
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
  $('#message').text('Succesfully signed in as ' + store.user.email)
  $('.after-sign-in').css('display', 'block')
  $('.inital-page').css('display', 'none')
  // $('.navbar-brand').text(store.user.email) -- Where to put email/username
}

const signInFailure = function (e) {
  $('.play-again-h1').hide()
  $('#message').text('Invalid username or password')
}

const changePasswordSuccess = function (data) {
  $('.navbar-collapse').collapse('hide')
  $('#message').text('Successfully changed password!')
}

const changePasswordFailure = function (error) {
  $('.play-again-h1').hide()
  if (error) {
    $('#message').text('Error changing password')
  } else {
    $('#message').text('Passwords don\'t match')
  }
}

const logoutSuccess = function () {
  $('.navbar-collapse').collapse('hide')
  $('#message').text('Successfully signed out!')
  store.user = null
  $('.after-sign-in').css('display', 'none')
  $('.inital-page').css('display', 'block')
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
