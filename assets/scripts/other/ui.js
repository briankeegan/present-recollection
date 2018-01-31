'use strict'

const aboutTemplate = require('../templates/about.handlebars')

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

module.exports = {
  openAboutModal,
  focusInput

}
