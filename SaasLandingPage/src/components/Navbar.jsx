import React from 'react'

const Navbar = () => {
  return (
    <div className='w-4/5 mx-auto flex items-center py-5 justify-between'>
      <h1 className='text-2xl font-bold'>LunarTech</h1>
      <ul className='flex items-center space-x-5'>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Our Team</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">About</a></li>
      
      </ul>
      <button className='px-5 py-2 border border-black rounded-full font-semibold'>Register</button>
    </div>
  )
}

export default Navbar
