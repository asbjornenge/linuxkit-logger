import net from 'net'
const NODE_LABEL_IP    = process.env['NODE_LABEL_IP']
const NODE_LABEL_NAME  = process.env['NODE_LABEL_NAME']
const NODE_LABEL_TYPE  = process.env['NODE_LABEL_TYPE']
const NODE_LABEL_ZONE  = process.env['NODE_LABEL_ZONE']
const NODE_LABEL_CLOUD = process.env['NODE_LABEL_CLOUD']
const NODE_LABEL_STATE = process.env['NODE_LABEL_STATE']

var client = net.createConnection("/var/run/memlogdq.sock")

client.on('connect', function() {
  console.log('connected')
})

client.on('data', function(data) {
  console.log(`${NODE_LABEL_NAME}-${NODE_LABEL_IP} - ${data.toString()}`)
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
