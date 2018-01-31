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
    .then(() => ui.addFriendSuccess(this))
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

const onClickFriend = function (event) {
  const id = $(event.target).parents('.row').data('id')
  giftEvents.onDisplayGifts(id)
}

const onLoadNewFriendForm = () => ui.loadNewFriendForm()

const addHandler = function () {
  $('body').on('mousedown', '.friend-delete', onDeleteFriend)
  $('#content').on('click', '#new-friend', onLoadNewFriendForm)
  $('#updateGiftIdeaModal').on('submit', '#add-friend', onAddFriend)
  $('#content').on('click', '.friend-update', onOpenUpdateFriendModal)
  $('#updateGiftIdeaModal').on('submit', '#update-friend', onUpdateFriend)
  $('#content').on('click', '.show-gifts', onClickFriend)
  $('#content').on('click', '#load-friends', onDisplayFriends)
}

module.exports = {
  addHandler
}
