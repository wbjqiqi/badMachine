/**
 * Created by Administrator on 2017/8/28 0028.
 */
const Mock = require('mockjs')
const Random = Mock.Random
// console.log(Random)
// Mock.Random()
// Mock.mock('http://test.cn', {
//   'name': Random.cname(),
//   'unit': Random.city()
//   // 'phone'|1-199:1
// })
Mock.mock('http://test.cn', (options) => {
  let body = JSON.parse(options.body)
  if (body.username === 'hmq' && body.pwd === '123456') {
    return {
      msg: 'success',
      name: Random.cname(),
      unit: Random.city(),
      phone: Random.char()
    }
  } else {
    return {msg: 'failed', errorcode: 0}
  }
})
