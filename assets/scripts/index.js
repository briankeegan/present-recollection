'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./authentication/events')
const giftEvents = require('./gifts/events')
const friendEvents = require('./friends/events')
const otherEvents = require('./other/events')

$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandler()
  giftEvents.addHandler()
  friendEvents.addHandler()
  otherEvents.addHandler()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
