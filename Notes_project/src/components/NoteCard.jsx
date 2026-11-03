import React from 'react'

const NoteCard = (props) => {
  return (
    <div className='flex justify-between m-3 p-6 gap-4 w-full bg-gray-800 text-white border border-gray-600 rounded'>
        <p>{props.content}</p>
        <button className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'>Delete</button>   
    </div>
  )
}

export default NoteCard