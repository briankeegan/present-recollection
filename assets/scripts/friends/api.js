'use strict'
const store = require('../store')
const config = require('../config')

const addFriend = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/friends',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const displayFriends = function () {
  return $.ajax({
    url: config.apiOrigin + '/friends',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const retrieveFriend = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/friends/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateFriend = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/friends/' + data.friend.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteFriend = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/friends/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  displayFriends,
  addFriend,
  retrieveFriend,
  updateFriend,
  deleteFriend
}
