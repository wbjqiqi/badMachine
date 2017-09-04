/**
 * Created by Administrator on 2017/8/29 0029.
 */
const express = require('express')
const router = express.Router()

router.options('/user', (req, res, next) => {
  res.set('Access-Control-Allow-Methods', 'POST')
  res.set('Access-Control-Allow-Origin', 'http://xxx.com')
  res.set('Access-Control-Allow-Headers', 'Content-type')
  res.status = 204
  res.send('123')
})

module.exports = router
