'use strict'

const displayGiftsTemplate = require('../templates/display-gifts.handlebars')
const updateGiftModalTemplate = require('../templates/update-gift-modal.handlebars')

const newGiftSuccess = function (data) {
  $('.navbar-collapse').collapse('hide')
  $('#message').text('You created a gift!')
  // console.log(data)
}
const newGiftFailure = function (e) {
  $('#message').text('Unable to create gift.  Maybe it was a bad idea?')
  // console.log('Error in creation', e)
}

const displayGiftSuccess = function (data) {
  console.log('inside ui success', data)
  // console.log(data.gifts)
  const showGiftsHTML = displayGiftsTemplate({ gifts: data.gifts })
  $('#content').html(showGiftsHTML)
}

const displayGiftFailure = function (e) {
  $('#message').text('Unable to create gift.  Maybe it was a bad idea?')
  // console.log('ui display error', e)
}

const retrieveGiftSuccess = function (data) {
  console.log('inside ui success', data)
  // console.log(data.gifts)
}

const retrieveGiftFailure = function (e) {
  $('#message').text('Unable to create gift.  Maybe it was a bad idea?')
  // console.log('ui display error', e)
}

const fillUpdateGiftModal = function (data) {
  const updateGiftModalHTML = updateGiftModalTemplate({ gift: data.gift })
  $('#update-gift-content').html(updateGiftModalHTML)
  $('#updateGiftIdeaModal').modal('toggle')
}

const updateGiftSuccess = function (data) {
  $('#message').text(`Your're gift has been updated`)
}

const updateGiftFailure = function (e) {
  $('#message').text(`Unable to update gift. It's perfect the way it is!`)
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
  updateGiftFailure
}
