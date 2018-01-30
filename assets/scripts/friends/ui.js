'use strict'

const updateFriendModalTemplate = require('../templates/display-friends.handlebars')
const newFriendFormTemplate = require('../templates/new-friend-form.handlebars')
const addPopovers = require('../templates/add_popovers.js')

const displayFriendsSuccess = function (data) {
  console.log('inside ui success', data)
  const showFriendsHTML = updateFriendModalTemplate({ friends: data.friends })
  $('#content').html(showFriendsHTML)
  addPopovers(data.friends, 'friend')
}

const displayFriendsFailure = function (e) {
  $('#message').text('Unable to retrieve friends... Sad day...')
  // console.log('ui display error', e)
}

const addFriendSuccess = function () {
  $('#updateGiftIdeaModal').modal('toggle')
  $('#message').text('You added a new friend!')
}

const addFriendFailure = function () {
  $('#message').text('Unable to add friends... Maybe you\'re not that close?')
}

const loadNewFriendForm = function (data) {
  // console.log(data)
  const newFriendFormHTML = newFriendFormTemplate()
  $('#update-gift-content').html(newFriendFormHTML)
  $('#updateGiftIdeaModal').modal('toggle')
}

module.exports = {
  displayFriendsSuccess,
  displayFriendsFailure,
  loadNewFriendForm,
  addFriendSuccess,
  addFriendFailure
}
