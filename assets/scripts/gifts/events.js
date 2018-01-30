'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require(`./api`)
const ui = require(`./ui`)
const store = require('../store')
const friendApi = require('../friends/api.js')

const onDisplayGifts = function (event) {
  const id = $(event.target).parents('.row').data('id')
  // const id2 = $(event.target).parents('div[class^="friend-"]')

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
  $('#new-gift').on('submit', onNewGift)
  $('#content').on('mousedown', '.gift-update', onOpenUpdateGiftModal)
  $('body').on('click', '.gift-delete', onDeleteGift)
  $('#update-gift-content').on('submit', '#update-gift', onUpdateGift)
}

module.exports = {
  addHandler,
  onDisplayGifts
}
