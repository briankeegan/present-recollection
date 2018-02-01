'use strict'

const aboutTemplate = require('../templates/about.handlebars')
const mainTemplate = require('../templates/mainpage.handlebars')

const openAboutModal = function () {
  const aboutHTML = aboutTemplate()
  $('#present-recollection-modal').html(aboutHTML)
  $('#present-recollection-modal').modal('toggle')
}

const focusInput = function (e) {
  //  this checks that the form input exists.. if it does, it focuses
  e && e.target &&
    $(e.target).find('input') &&
    $(e.target).find('input')[0] &&
    $(e.target).find('input')[0].focus()
}

const loadContent = function () {
  const mainHTML = mainTemplate()
  $('#content').html(mainHTML)
}

const removeContent = function () {
  $('#present-recollection-modal').html('')
}

module.exports = {
  openAboutModal,
  focusInput,
  loadContent,
  removeContent

}
