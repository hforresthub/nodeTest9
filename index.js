const EventEmitter = require('events')
const eventEmitter = new EventEmitter()
const say = require('say')

const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
	res.statusCode = 200
	res.setHeader('Content-Type', 'text/html')
	res.end('<h1>Hello people!</h1>')
})

server.listen(port, () => {
	console.log(`Server running at port ${port}`)
	say.speak(`Server running at port ${port}`, 'Microsoft Zira Desktop', 1)
})

// const listenerThing = (name) => {
// 	console.log('We have started an event for you, ' + name)
// 	say.speak('We have started an event for you, ' + name, 'Microsoft Zira Desktop', 1)
// }
// // eventEmitter.on('start', listenerThing)
// eventEmitter.once('start', listenerThing)

// eventEmitter.off('start', listenerThing)
// eventEmitter.removeAllListeners('start', listenerThing)

// eventEmitter.emit('start', 'hal')
// eventEmitter.emit('start', 'hal')
// eventEmitter.emit('start', 'hal')
// eventEmitter.emit('start', 'hal')
// eventEmitter.emit('start', 'hal')
