'use strict'

const displayGiftsTemplate = require('../templates/display-gifts.handlebars')

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
  // $('#message').text('You created a gift!')
  // console.log(data.gifts)
  const showGiftsHTML = displayGiftsTemplate({ gifts: data.gifts })
  $('.content').html(showGiftsHTML)
}

const displayGiftFailure = function (e) {
  // $('#message').text('Unable to create gift.  Maybe it was a bad idea?')
  console.log('ui display error', e)
}

module.exports = {
  newGiftSuccess,
  newGiftFailure,
  displayGiftSuccess,
  displayGiftFailure
}
