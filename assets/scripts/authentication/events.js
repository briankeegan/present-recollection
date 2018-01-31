'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require(`./api`)
const ui = require(`./ui`)
const store = require('../store')
const gift = require('../friends/ui.js')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  if (data.credentials.password === data.credentials.password_confirmation) {
    api.signUp(data)
      .then(() => ui.signUpSuccess(this))
      .catch(() => ui.signUpFailure(this))
  } else {
    ui.passwordMismatch(this)
  }
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  // console.log('Events!')
  this.reset()
  api.signIn(data)
    .then(ui.signInSuccess)
    .then(gift.displayFriendsSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  this.reset()
  if (data.passwords.new === data.passwords['new-retyped']) {
    api.changePassword(data)
      .then(() => ui.changePasswordSuccess(this))
      .catch(() => ui.changePasswordFailure(this))
  } else {
    ui.passwordMismatch(this)
  }
}

const onLogout = function (event) {
  event.preventDefault()
  if (store.user) {
    event.preventDefault()
    api.logout()
      .then(ui.logoutSuccess)
      .catch(ui.logoutFailure)
  } else {
    ui.logoutFailure()
  }
}
const onOpenSignUpModal = () => ui.openSignUpModal()
const onOpenChangePasswordModal = () => ui.onOpenChangePasswordModal()
const addHandler = function () {
  $('#updateGiftIdeaModal').on('submit', '#sign-up', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#updateGiftIdeaModal').on('submit', '#change-password', onChangePassword)
  $('#logout').on('click', onLogout)
  $('#open-sign-up-modal').on('click', onOpenSignUpModal)
  $('#open-change-password-modal').on('click', onOpenChangePasswordModal)
  $('#updateGiftIdeaModal').on('shown.bs.modal', function (e) {
    $(e.target).find('input')[0].focus()
  })
}

module.exports = {
  addHandler
}
