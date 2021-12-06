import {io} from 'socket.io-client';

const path = `http://localhost:${process.env.PORT || 4000}`;
const socket = io(path);

export default socket;