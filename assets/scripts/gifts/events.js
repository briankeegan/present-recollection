'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require(`./api`)
const ui = require(`./ui`)
// const store = require('../store')

const onDisplayGifts = function () {
  console.log('gift events')
  api.displayGifts()
    .then(ui.displayGiftSuccess)
    .catch(ui.displayGiftFailure)
}

const onNewGift = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  this.reset()
  api.newGift(data)
    .then(ui.newGiftSuccess)
    .then(onDisplayGifts)
    .catch(ui.newGiftFailure)
}

const addHandler = function () {
  $('#new-gift').on('submit', onNewGift)
}

module.exports = {
  addHandler,
  onDisplayGifts
}
