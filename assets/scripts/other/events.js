'use strict'

const ui = require(`./ui`)

const onOpenAboutModal = () => ui.openAboutModal()
const onFocusInput = (e) => ui.focusInput(e)
const onLoadContent = () => ui.loadContent()
const onRemoveContent = () => ui.removeContent()

const addHandler = function () {
  document.body.style.display = 'block'
  $('#open-about-modal').on('click', onOpenAboutModal)
  $('#present-recollection-modal').on('shown.bs.modal', onFocusInput)
  $('#present-recollection-modal').on('hidden.bs.modal', onRemoveContent)
  $('document').ready(onLoadContent)
}

module.exports = {
  addHandler
}
