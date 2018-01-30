'use strict'

// const getFormFields = require(`../../../lib/get-form-fields`)
// const api = require(`./api`)
const ui = require(`./ui`)
// const store = require('../store')

const onDeleteFriend = function (event) {
  console.log('WOrks woot', event)
}

const addHandler = function () {
  $('body').on('click', '.friend-delete', onDeleteFriend)
  $('#content').on('click', '#new-friend', ui.loadNewFriendForm)
}

module.exports = {
  addHandler
}
