/**
 * Created by Administrator on 2017/8/29 0029.
 */
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var connection = require('./components/mysql')

connection.connect()

// 设置跨域访问
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, accept, origin, content-type')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.route('/user')
  .post((req, res) => {
    // let username = req.body.username
    // let pwd = req.body.pwd
    // console.log(username,pwd)
    if (req.body.username === 'yzj' && req.body.pwd === '950812') {
      var response = {
        msg: 'success',
        username: 'yzj'
      }
      res.status(200)
      res.send(response)
    } else {
      res.status(401)
      res.send({msg: 'failed'})
    }
  })

app.route('/allBadMachine')
  .post((req, res) => {
    connection.query('SELECT * FROM allmachine', (error, results, fileds) => {
      if (error) {
        throw error
        res.status(500)
        res.send({msg: 'failed'})
      }
      connection.query('SELECT * FROM machinetype', (err, types, failed) => {
        if (err) {
          throw err
          res.status(500)
          res.send({msg: 'failed'})
        }
        var response = {
          msg: 'success',
          machines: results,
          machineTypes: types
        }
        res.status(200)
        res.send(response)
      })
    })
  })
  .put((req, res) => {
    var options = req.body;
    console.log(options)
    if (!options) {
      res.status(401)
      res.send({msg: 'failed'})
    } else {
      var key = ''
      var str = ''
      for (i in options) {
        key += "`" + i + '`,'
        str += "'" + options[i] + "',"
      }
      key = key.substring(0, key.length - 1)
      str = str.substring(0, str.length - 1)
      console.log(str)
      connection.query('INSERT INTO `badmachine`.`allmachine` (' + key + ') VALUES (' + str + ')', (error, results, failed) => {
        if (error) {
          throw error
        }
        console.log(results)
        if (results.affectedRows) {
          var response = {
            msg: 'success',
          }
          res.status(200)
          res.send(response)
        } else {
          res.status(500)
          res.send({msg: 'failed'})
        }

      })
    }
  })
app.route('/allBadMachine/*')
  .post((req, res) => {
    var id = req.params[0]
    var options = req.body;
    console.log(options)
    var str = 'UPDATE ALLMACHINE SET '
    for (i in options) {
      str += "`" + i + "`='" + options[i] + "',"
    }
    str = str.substring(0, str.length - 1)
    connection.query(str + ' WHERE id=' + id, (error, results, failed) => {
      if (error) {
        throw error
      }
      if (results.affectedRows) {
        var response = {
          msg: 'success',
        }
        res.status(200)
        res.send(response)
      } else {
        res.status(500)
        res.send({msg: 'failed'})
      }
    })
  })
  .delete((req, res) => {
    var id = req.params[0]
    var str = 'DELETE FROM ALLMACHINE WHERE id=\'' + id + '\''
    console.log(str)
    connection.query(str, (error, results, failed) => {
      if (error) {
        throw error
      }
      console.log(results)
      if (results.affectedRows) {
        var response = {
          msg: 'success',
        }
        res.status(200)
        res.send(response)
      } else {
        res.status(500)
        res.send({msg: 'failed'})
      }
    })
  })

app.route('/allBadMachine/type')
  .put((req, res) => {
    var options = req.body;
    console.log(options)
    if (!options) {
      res.status(401)
      res.send({msg: 'failed'})
    } else {
      var key = ''
      var str = ''
      for (i in options) {
        key += "`" + i + '`,'
        str += "'" + options[i] + "',"
      }
      key = key.substring(0, key.length - 1)
      str = str.substring(0, str.length - 1)
      console.log(str)
      connection.query('INSERT INTO `badmachine`.`machinetype` (' + key + ') VALUES (' + str + ')', (error, results, failed) => {
        if (error) {
          throw error
        }
        console.log(results)
        if (results.affectedRows) {
          var response = {
            msg: 'success',
          }
          res.status(200)
          res.send(response)
        } else {
          res.status(500)
          res.send({msg: 'failed'})
        }

      })
    }
  })
// .options(function* (){
//   this.set('Access-Control-Allow-Methods', 'POST')
//   this.set('Access-Control-Allow-Origin', 'http://xxx.com')
//   this.set('Access-Control-Allow-Headers', 'Content-type')
//   this.status = 204
// })
//   .get((req, res) => {
//     console.log(req.body)
//     res.send('usernam2e')
//   })

// app.get('/user',(req,res)=>{
//   res.send(req)
// })
// app.use('/user',optionsReturn)
// app.use('/user',user)

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log(host)
  console.log('Example app listening at http://%s:%s', host, port)
})
