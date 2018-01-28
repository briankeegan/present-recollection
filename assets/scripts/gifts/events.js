'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require(`./api`)
const ui = require(`./ui`)
// const store = require('../store')

const addPopOverListener = function (gifts) {
  // add popover listener for each delete gift button
  gifts.forEach(gift => {
    $(`[data-toggle="popover-${gift.id}"]`).popover({
      placement: 'bottom',
      html: 'true',
      title: 'Are you sure?',
      content: `<div class="btn-group">
  <button data-id="${gift.id}" type="button" class="gift-delete btn btn-danger btn-sm">Delete Gift</button>
  <button type="button" class="btn btn-default btn-sm">Nevermind</button>
</div>`
    })
  })
}

const onDisplayGifts = function (event) {
  console.log(event)
  api.displayGifts()
    .then(ui.displayGiftSuccess)
    .then(addPopOverListener)
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

const onDeleteGift = function (event) {
  const id = event.target.dataset.id
  api.deleteGift(id)
    .then(ui.deleteGiftSuccess)
    .then(onDisplayGifts)
    .catch(ui.deleteGiftFailure)
}

const addHandler = function () {
  $('#new-gift').on('submit', onNewGift)
  $('#content').on('click', '.gift-update', onOpenUpdateGiftModal)
  $('body').on('click', '.gift-delete', onDeleteGift)
  $('#update-gift-content').on('submit', '#update-gift', onUpdateGift)
}

module.exports = {
  addHandler,
  onDisplayGifts
}
