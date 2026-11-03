import React from 'react'
import NoteCard from './components/NoteCard';

const App = () => {
  
  const [inputValue, setInputValue] = React.useState('');
  const [newNote, setNewNote] = React.useState([]);

  const btnclick = () => {
    setNewNote([...newNote, inputValue]);
    setInputValue('');
  }

  const inputChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div className='flex h-screen bg-black text-white'>
      <div className='flex-col p-6 gap-4 w-full'>
        <h1 className='text-2xl font-bold mb-4'>Add Notes</h1>
        <input value={inputValue} type="text" placeholder='Add Notes' className='p-2 bg-gray-800 text-white placeholder:text-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500' onChange={inputChange} />
        <button onClick={btnclick} className='m-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4'>Add</button>
        {newNote.map((note, index) => (
          <NoteCard key={index} content={note} />
        ))}
      </div>
    </div>
  )
}

export default App