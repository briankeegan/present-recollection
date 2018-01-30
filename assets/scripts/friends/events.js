'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require(`./api`)
const ui = require(`./ui`)
// const store = require('../store')

const onDeleteFriend = function (event) {
  console.log('WOrks woot', event)
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

const addHandler = function () {
  $('body').on('click', '.friend-delete', onDeleteFriend)
  $('#content').on('click', '#new-friend', ui.loadNewFriendForm)
  $('#update-gift-content').on('submit', '#add-friend', onAddFriend)
}

module.exports = {
  addHandler
}
