import io from 'socket.io-client';
const {REACT_APP_SOCKET_URL} = process.env
const socket = io(REACT_APP_SOCKET_URL || 'http://localhost');

export default socket