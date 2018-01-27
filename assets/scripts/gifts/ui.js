'use strict'

// const newGiftSuccess =
const newGiftSuccess = function (data) {
  $('.navbar-collapse').collapse('hide')
  $('#message').text('You created a gift!')
  // console.log(data)
}
const newGiftFailure = function (e) {
  $('#message').text('Unable to create gift.  Maybe it was a bad idea?')
  // console.log('Error in creation', e)
}

module.exports = {
  newGiftSuccess,
  newGiftFailure
}
