#!/usr/bin/env node

var PORT = 2468

var fs      = require('fs')
var util    = require('util')
var open    = require('open')
var express = require('express')

var server = express()

var endsWithJson = function(s) {
  return (s.indexOf('.json', s.length-5) !== -1)
}

var prefixPath = function(s) {
  return '/data/' + s
}

var inArgv = function(s) {
  return (process.argv.slice(2).indexOf(s) !== -1)
}

server.get('/sets', function(req, res) {
  fs.readdir('data', function(err, files) {
    var paths = files.filter(endsWithJson).map(prefixPath)
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(paths))
  })
})

server.use('/', express.static('.'))

util.log('statstat, (c) 2015 Tuomas Starck')
util.log('Binding to port ' + PORT)

server.listen(PORT, function() {
  if (inArgv('-n') || inArgv('--no-open')) {
    return
  }
  else {
    setTimeout(function() { open('http://localhost:' + PORT) }, 1000)
    util.log('Opening a browser window...')
  }
})
