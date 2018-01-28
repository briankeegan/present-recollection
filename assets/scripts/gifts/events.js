'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require(`./api`)
const ui = require(`./ui`)
// const store = require('../store')

const onDisplayGifts = function () {
  api.displayGifts()
    .then(ui.displayGiftSuccess)
    .catch(ui.displayGiftFailure)
}

const onOpenUpdateGiftModal = function (data) {
  const id = data.target.dataset.id
  console.log(id)
  api.retrieveGift(id)
    .then(ui.fillUpdateGiftModal)
    .catch(ui.retrieveGiftFailure)
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

const onUpdateGift = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  this.reset()
  api.updateGift(data)
    .then(ui.updateGiftSuccess)
    .then(onDisplayGifts)
    .catch(ui.updateGiftFailure)
}

const addHandler = function () {
  $('#new-gift').on('submit', onNewGift)
  $('#content').on('click', '.gift-update', onOpenUpdateGiftModal)
  $('#update-gift-content').on('submit', '#update-gift', onUpdateGift)
  // $('.content').on('click', OnRetrieveGift)
}

module.exports = {
  addHandler,
  onDisplayGifts
}
