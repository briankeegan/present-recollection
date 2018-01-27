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

module.exports = {
  newGift
}
