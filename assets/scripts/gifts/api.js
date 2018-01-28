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

const updateGift = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/gifts/' + data.gift.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const displayGifts = function () {
  return $.ajax({
    url: config.apiOrigin + '/gifts',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const retrieveGift = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/gifts/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newGift,
  displayGifts,
  retrieveGift,
  updateGift
}
