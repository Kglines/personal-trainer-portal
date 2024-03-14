import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000')

const ChatApp = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');

    const joinRoom = () => {
        if(room !== '' && username !== ''){
            socket.emit('join_room', {username, room})
        }

        navigate(`/chat/${room}`, { replace: true })
    }

  return (
    <section className='flex flex-col gap-4 w-1/2 mx-auto'>
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder='Username...' type='text' className='p-2 bg-dark' />
        <select value={room} onChange={e => setRoom(e.target.value)} className='p-2 bg-dark' />
        <button onClick={joinRoom} className='bg-secondary py-2'>Join Room</button>
    </section>
  )
}

export default ChatApp
