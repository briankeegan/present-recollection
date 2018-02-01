'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require(`./api`)
const ui = require(`./ui`)
const giftEvents = require(`../gifts/events.js`)
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
    .catch(() => ui.addFriendFailure(this))
}

const onDisplayFriends = function (event) {
  api.displayFriends()
    .then(ui.displayFriendsSuccess)
    .catch(ui.displayFriendsFailure)
}

const onOpenUpdateFriendModal = function (data) {
  const id = data.target.dataset.id
  api.retrieveFriend(id)
    .then(ui.fillUpdateFriendModal)
    .catch(ui.retrieveFriendFailure)
}

const onUpdateFriend = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  this.reset()
  api.updateFriend(data)
    .then(ui.updateFriendSuccess)
    .then(onDisplayFriends)
    .catch(ui.updateFriendFailure)
}

const onClickFriend = function (event) {
  const id = $(event.target).parents('.row').data('id')
  giftEvents.onDisplayGifts(id)
}

const onLoadNewFriendForm = () => ui.loadNewFriendForm()

const addHandler = function () {
  $('body').on('mousedown', '.friend-delete', onDeleteFriend)
  $('#content').on('click', '#new-friend', onLoadNewFriendForm)
  $('#present-recollection-modal').on('submit', '#add-friend', onAddFriend)
  $('#content').on('click', '.friend-update', onOpenUpdateFriendModal)
  $('#present-recollection-modal').on('submit', '#update-friend', onUpdateFriend)
  $('#content').on('click', '.show-gifts', onClickFriend)
  $('#content').on('click', '#load-friends', onDisplayFriends)
}

module.exports = {
  addHandler
}
