const EventEmitter = require('events')
const eventEmitter = new EventEmitter()
const say = require('say')

const listenerThing = (name) => {
	console.log('We have started an event for you, ' + name)
	say.speak('We have started an event for you, ' + name, 'Microsoft Zira Desktop', 1)
}
// eventEmitter.on('start', listenerThing)
eventEmitter.once('start', listenerThing)

// eventEmitter.off('start', listenerThing)
// eventEmitter.removeAllListeners('start', listenerThing)

eventEmitter.emit('start', 'hal')
// eventEmitter.emit('start', 'hal')
// eventEmitter.emit('start', 'hal')
// eventEmitter.emit('start', 'hal')
// eventEmitter.emit('start', 'hal')

