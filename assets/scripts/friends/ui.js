'use strict'

const updateFriendModalTemplate = require('../templates/display-friends.handlebars')
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

module.exports = {
  displayFriendsSuccess,
  displayFriendsFailure
}
