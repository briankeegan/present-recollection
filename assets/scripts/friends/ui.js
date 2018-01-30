'use strict'

const displayFriendsTemplate = require('../templates/display-friends.handlebars')
const newFriendFormTemplate = require('../templates/new-friend-form.handlebars')
const addPopovers = require('../templates/add_popovers.js')
const updateFriendModalTemplate = require('../templates/update-friend-form.handlebars')

const displayFriendsSuccess = function (data) {
  console.log('inside ui success', data)
  const displayFriendsHTML = displayFriendsTemplate({ friends: data.friends })
  $('#content').html(displayFriendsHTML)
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
  // console.log('inside loadNewFriendForm', data)
  const newFriendFormHTML = newFriendFormTemplate()
  $('#update-gift-content').html(newFriendFormHTML)
  $('#updateGiftIdeaModal').modal('toggle')
}

const fillUpdateFriendModal = function (data) {
  // console.log(data.friend)
  const updateFriendModalHTML = updateFriendModalTemplate({ friend: data.friend })
  $('#update-gift-content').html(updateFriendModalHTML)
  $('#updateGiftIdeaModal').modal('toggle')
}
const retrieveFriendFailure = function (e) {
  $('#message').text('Not sure what went wrong. Unable to retrieve gift')
  // console.log('ui display error', e)
}

module.exports = {
  displayFriendsSuccess,
  displayFriendsFailure,
  loadNewFriendForm,
  addFriendSuccess,
  addFriendFailure,
  fillUpdateFriendModal,
  retrieveFriendFailure
}
