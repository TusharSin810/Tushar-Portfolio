import React from 'react'

function ChatPage() {
  onload
  return (
    <div className='flex flex-col h-screen items-center justify-end bg-[#53565A] pt-10 gap-2'>
        <div className='bg-[#E4E5E8] h-96 w-4/5 flex justify-between rounded-3xl'>
        </div>
        <div>
          <div className='flex gap-4 mb-10 p-6 px-72 rounded-full bg-[#E4E5E8]'>
            <input type='text' placeholder='Type Your Message' className='rounded-full px-10 p-1'/>
            <button className='bg-[#4D0011] p-2 px-6 rounded-full text-[#E4E5E8]'>Send</button>
          </div>
        </div> 
    </div>
  )
}

export default ChatPage
