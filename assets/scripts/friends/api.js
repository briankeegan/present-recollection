'use strict'
const store = require('../store')
const config = require('../config')

const addFriend = function (data) {
  // console.log(data)
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
  // console.log('dipslay friend API')
  return $.ajax({
    url: config.apiOrigin + '/friends',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  displayFriends,
  addFriend
}
