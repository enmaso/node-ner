const fs = require('fs')
const net = require('net')

module.exports.parse = function (filepath, port = 8080, callback) {
  if (!fs.existsSync(filepath)) callback(null)
  if (typeof port === 'function') {
    callback = port
    port = 8080
  }
  let text = fs.readFileSync(filepath, 'utf8')
  let socket = net.Socket()
  socket.connect(port, 'localhost', () => {
    socket.write(text.replace(/\r?\n|\r|\t/g, ' ') + '\n')
  })
  socket.on('data', data => {
    let regexp = /<([A-Z]+?)>(.+?)<\/\1>/g
    let str = data.toString()
    let tags = {
      LOCATION: [],
      ORGANIZATION: [],
      DATE: [],
      MONEY: [],
      PERSON: [],
      PERCENT: [],
      TIME: []
    }
    let m
    while ((m = regexp.exec(str)) !== null) {
      if (m.index === regexp.lastIndex) {
        regexp.lastIndex++
      }
      tags[m[1]].push(m[2])
    }
    socket.destroy()
    callback(tags)
  })
  socket.on('error', err => {
    if (err) console.error(err)
    callback(null)
  })
}
