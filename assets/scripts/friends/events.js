'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require(`./api`)
const ui = require(`./ui`)
// const store = require('../store')

const onDeleteFriend = function (event) {
  const id = event.target.dataset.id
  api.deleteFriend(id)
    .then(() => ui.deleteFriendSuccess(id))
    .catch(ui.deleteFriendFailure)
}

const onAddFriend = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.addFriend(data)
    .then(ui.addFriendSuccess)
    .then(onDisplayFriends)
    .catch(ui.addFriendFailure)
}

const onDisplayFriends = function (event) {
  api.displayFriends()
    .then(ui.displayFriendsSuccess)
    .catch(ui.displayFriendsFailure)
}

const onOpenUpdateFriendModal = function (data) {
  const id = data.target.dataset.id
  // console.log(id)
  api.retrieveFriend(id)
    .then(ui.fillUpdateFriendModal)
    .catch(ui.retrieveFriendFailure)
}

const onUpdateFriend = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  this.reset()
  // console.log(data)
  api.updateFriend(data)
    .then(ui.updateFriendSuccess)
    .then(onDisplayFriends)
    .catch(ui.updateFriendFailure)
}

const addHandler = function () {
  $('body').on('mousedown', '.friend-delete', onDeleteFriend)
  $('#content').on('click', '#new-friend', ui.loadNewFriendForm)
  $('#update-gift-content').on('submit', '#add-friend', onAddFriend)
  $('#content').on('click', '.friend-update', onOpenUpdateFriendModal)
  $('#update-gift-content').on('submit', '#update-friend', onUpdateFriend)
}

module.exports = {
  addHandler
}
