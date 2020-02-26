import s from 'sockets'
import {onConnect, onDisconnect} from 'sockets/listeners/functions'

console.log('Listeners: Firing!')
s.on('connect', onConnect)
s.on('disconnect', onDisconnect)