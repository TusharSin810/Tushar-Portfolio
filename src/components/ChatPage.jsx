import React from 'react'

function ChatPage() {
  onload
  return (
    <div className='bg-[#53565A] w-screen h-screen'>
      <div className='w-screen h-screen flex justify-center items-end'>
        <div className='flex gap-4 mb-10 p-6 px-40 rounded-full bg-[#E4E5E8]'>
          <input type='text' placeholder='Type Your Message' className='rounded-full px-10 p-1'/>
          <button className='bg-[#4D0011] p-2 px-6 rounded-full text-[#E4E5E8]'>Send</button>
        </div>
      </div> 
    </div>
  )
}

export default ChatPage
