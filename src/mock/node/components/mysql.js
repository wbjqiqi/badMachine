/**
 * Created by Administrator on 2017/8/29 0029.
 */
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'badmachine'
})

module.exports = connection
