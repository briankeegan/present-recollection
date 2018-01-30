'use strict'
const store = require('../store')
const config = require('../config')

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
  displayFriends
}
