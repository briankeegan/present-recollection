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
  // console.log('update gift', data)
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
  // console.log('dipslay gift API')
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

const deleteGift = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/gifts/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newGift,
  displayGifts,
  retrieveGift,
  updateGift,
  deleteGift
}
