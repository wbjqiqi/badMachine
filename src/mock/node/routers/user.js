/**
 * Created by Administrator on 2017/8/29 0029.
 */
const express = require('express')
const router = express.Router()

router.post('/user',(req,res,next)=>{
  console.log(req.param('username'))
  console.log(12322)
  res.send(123)
})

module.exports = router
