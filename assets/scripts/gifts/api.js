'use strict'
const store = require('../store')
const config = require('../config')

const newGift = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/gifts',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const displayGifts = function () {
  console.log('gift api')
  return $.ajax({
    url: config.apiOrigin + '/gifts',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newGift,
  displayGifts
}
