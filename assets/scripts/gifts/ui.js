'use strict'

const displayGiftsTemplate = require('../templates/display-gifts.handlebars')
const updateGiftModalTemplate = require('../templates/update-gift-modal.handlebars')
const newGiftModalTemplate = require('../templates/new-gift-form.handlebars')
// const addPopovers = require('../templates/add_popovers.js')

const newGiftSuccess = function (data) {
  $('#updateGiftIdeaModal').modal('toggle')
  $('#updateGiftIdeaModal').html('')
  $('#message').text('You created a gift!')
  // return in order to display gifts!
  return data.gift.friend_id
}
const newGiftFailure = function (e) {
  $('#updateGiftIdeaModal').modal('toggle')
  $('#updateGiftIdeaModal').html('')
  $('#message').text('Unable to create gift.  Maybe it was a bad idea?')
  // console.log('Error in creation', e)
}

const displayGiftSuccess = function (data) {
  console.log('inside ui success', data.friend.nickname)

  const showGiftsHTML = displayGiftsTemplate({ friend: data.friend })
  $('#content').html(showGiftsHTML)
  // popovers
}

const displayGiftFailure = function (e) {
  $('#message').text('Unable to retrieve gifts')
  // console.log('ui display error', e)
}

const retrieveGiftSuccess = function (data) {
  console.log('inside ui success', data)
  // console.log(data.gifts)
}

const retrieveGiftFailure = function (e) {
  $('#message').text('Not sure what went wrong. Unable to retrieve gift')
  // console.log('ui display error', e)
}

const fillUpdateGiftModal = function (data) {
  const updateGiftModalHTML = updateGiftModalTemplate({ gift: data.gift })
  $('#updateGiftIdeaModal').html(updateGiftModalHTML)
  $('#updateGiftIdeaModal').modal('toggle')
}

const updateGiftSuccess = function (data) {
  $('#updateGiftIdeaModal').modal('toggle')
  $('#updateGiftIdeaModal').html('')
  $('#message').text(`Your're gift has been updated`)
}

const updateGiftFailure = function () {
  $('#updateGiftIdeaModal').modal('toggle')
  $('#updateGiftIdeaModal').html('')
  $('#message').text(`Unable to update gift. It's perfect the way it is!`)
}

const deleteGiftSuccess = function () {
  $('#message').text(`Your're gift has been removed`)
}

const deleteGiftFailure = function () {
  $('#message').text(`Unable to remove gift. If it's that good, maybe you should reconsider...`)
}

const openNewGiftModal = function (data) {
  const friendId = data.target.dataset.id
  console.log(friendId)
  const newGiftModalHTML = newGiftModalTemplate({friendId: friendId})
  $('#updateGiftIdeaModal').html(newGiftModalHTML)
  $('#updateGiftIdeaModal').modal('toggle')
}

module.exports = {
  newGiftSuccess,
  newGiftFailure,
  displayGiftSuccess,
  displayGiftFailure,
  retrieveGiftSuccess,
  retrieveGiftFailure,
  fillUpdateGiftModal,
  updateGiftSuccess,
  updateGiftFailure,
  deleteGiftSuccess,
  deleteGiftFailure,
  openNewGiftModal
}
