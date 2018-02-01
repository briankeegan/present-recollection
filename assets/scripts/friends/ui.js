'use strict'

const displayFriendsTemplate = require('../templates/display-friends.handlebars')
const newFriendFormTemplate = require('../templates/new-friend-form.handlebars')
const addPopovers = require('../templates/add_popovers.js')
const updateFriendModalTemplate = require('../templates/update-friend-form.handlebars')

const displayFriendsSuccess = function (data) {
  // console.log(data.friends)
  const displayFriendsHTML = displayFriendsTemplate({ friends: data.friends })
  $('#content').html(displayFriendsHTML)
  addPopovers(data.friends, 'friend')
}
const clickBack = function (data) {
  // console.log(data.friends)
  $('#message').text(``)
  const displayFriendsHTML = displayFriendsTemplate({ friends: data.friends })
  $('#content').html(displayFriendsHTML)
  addPopovers(data.friends, 'friend')
}

const displayFriendsFailure = function (e) {
  $('#message').text('Unable to retrieve friends... Sad day...')
  // console.log('ui display error', e)
}

const addFriendSuccess = function (data) {
  const friend = data.friend.nickname
  $('#present-recollection-modal').modal('toggle')
  $('#message').text(`Click on a ${friend} to add gift ideas`)
}

const addFriendFailure = function (that) {
  that.reset()
  $('#present-recollection-modal').modal('toggle')
  $('#message').text('Unable to add friends... Maybe you\'re not that close?')
}

const loadNewFriendForm = function () {
  // console.log('inside loadNewFriendForm', data)

  const newFriendFormHTML = newFriendFormTemplate()
  $('#present-recollection-modal').html(newFriendFormHTML)
  $('#present-recollection-modal').modal('toggle')
}

const fillUpdateFriendModal = function (data) {
  // console.log(data.friend)
  const updateFriendModalHTML = updateFriendModalTemplate({ friend: data.friend })
  $('#present-recollection-modal').html(updateFriendModalHTML)
  $('#present-recollection-modal').modal('toggle')
}
const retrieveFriendFailure = function (e) {
  $('#message').text('Not sure what went wrong. Unable to retrieve gift')
  // console.log('ui display error', e)
}

const updateFriendSuccess = function (data) {
  $('#present-recollection-modal').modal('toggle')
  $('#message').text(`You're Friend has been updated`)
}

const updateFriendFailure = function () {
  $('#present-recollection-modal').modal('toggle')
  $('#message').text(`Unable to update Friend. They're perfect the way they are!`)
}

const deleteFriendSuccess = function (id) {
  $('#message').text(`Your friend has been removed`)
  $('.friend-' + id).remove()
}

const deleteFriendFailure = function () {
  $('#message').text(`Unable to remove friend.  My bad.`)
}

module.exports = {
  displayFriendsSuccess,
  displayFriendsFailure,
  loadNewFriendForm,
  addFriendSuccess,
  addFriendFailure,
  fillUpdateFriendModal,
  retrieveFriendFailure,
  updateFriendSuccess,
  updateFriendFailure,
  deleteFriendSuccess,
  deleteFriendFailure,
  clickBack
}
