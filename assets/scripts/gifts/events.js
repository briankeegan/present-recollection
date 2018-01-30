'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require(`./api`)
const ui = require(`./ui`)
// const store = require('../store')
const friendApi = require('../friends/api.js')

const onDisplayGifts = function (id) {
  console.log('herhehrerhe')
  friendApi.retrieveFriend(id)
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
  // console.log(data)
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

const onDeleteGift = function (event) {
  const id = event.target.dataset.id
  api.deleteGift(id)
    .then(ui.deleteGiftSuccess)
    .then(onDisplayGifts)
    .catch(ui.deleteGiftFailure)
}

const addHandler = function () {

  $('#content').on('click', '.gift-update', onOpenUpdateGiftModal)
  $('body').on('mousedown', '.gift-delete', onDeleteGift)
  $('#updateGiftIdeaModal').on('submit', '#update-gift', onUpdateGift)
  $('#content').on('click', '#open-new-gift-modal', ui.openNewGiftModal)
  $('#updateGiftIdeaModal').on('submit', '#add-gift', onNewGift)
}

module.exports = {
  addHandler,
  onDisplayGifts
}
