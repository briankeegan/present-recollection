'use strict'

const updateFriendModalTemplate = require('../templates/display-friends.handlebars')
const newFriendFormTemplate = require('../templates/new-friend-form.handlebars')
const addPopovers = require('../templates/add_popovers.js')

const displayFriendsSuccess = function (friends) {
  console.log('inside ui success', friends)
  const showFriendsHTML = updateFriendModalTemplate({ friends: friends })
  $('#content').html(showFriendsHTML)
  addPopovers(friends, 'friend')
}

const displayFriendsFailure = function (e) {
  $('#message').text('Unable to retrieve friends... Sad day...')
  // console.log('ui display error', e)
}

const loadNewFriendForm = function (data) {
  // console.log(data)
  const newFriendFormHTML = newFriendFormTemplate()
  $('#content').html(newFriendFormHTML)
}

module.exports = {
  displayFriendsSuccess,
  displayFriendsFailure,
  loadNewFriendForm
}
