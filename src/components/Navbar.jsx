import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className='flex justify-between py-2 mx-4'>
        <ul className='mx-2 font-bold'>Welcome</ul>
        <ul className='mx-2 font-bold'>Projects</ul>
        <ul className='mx-2 font-bold'>Experience</ul>
        <ul className='mx-2 font-bold'>Education</ul>
        <ul className='mx-2 font-bold'>Contact Me</ul>
      </nav>
    </div>
  )
}

export default Navbar
