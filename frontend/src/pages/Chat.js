import React from 'react'
import ChatApp from '../components/Chat';

const Chat = () => {
  return (
    <section className='text-offWhite sm:w-full md:w-4/5 mx-auto text-center mt-12'>
      <div>
        <h2>CHAT</h2>
      </div>
      <ChatApp />
    </section>
  );
}

export default Chat
