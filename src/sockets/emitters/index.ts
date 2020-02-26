import s from 'sockets'
import emitters from 'sockets/emitters/functions'
import functify from 'helper-functions/kebab-to-camel'

export default function emit(kebabEvent: string) {
    let fnName: string = functify(kebabEvent)
    let args = emitters[fnName] ? emitters[fnName]() : null
    s.emit(
        kebabEvent,
        ...args
    )
}