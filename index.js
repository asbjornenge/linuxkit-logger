import net from 'net'

var client = net.createConnection("/var/run/memlogdq.sock")

client.on('connect', function() {
  console.log('connected')
})

client.on('data', function(data) {
  console.log(data.toString())
})

client.on('end', function() {
  console.log('end')
})

client.on('error', function(err) {
  console.log(err)
})

/*
* 0 = logDumpFollow 
* 1 = logFollow
* 2 = logDump
*/

var logparam = new Uint8Array(1)
logparam[0] = 1
client.write(logparam)
