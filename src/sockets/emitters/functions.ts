import {EmitterArgs, EmitterList} from 'sockets/emitters/types'

function createGame(): EmitterArgs {
    return {
        ack: () => console.log('Create game ack!')
        // should be a code state setter
    }
}

const emitters: EmitterList = {
    createGame
}

export default emitters