'use strict'

const ui = require(`./ui`)

const onOpenAboutModal = () => ui.openAboutModal()
const onFocusInput = (e) => ui.focusInput(e)

const addHandler = function () {
  $('#open-about-modal').on('click', onOpenAboutModal)
  $('#present-recollection-modal').on('shown.bs.modal', onFocusInput)
}

module.exports = {
  addHandler
}
