import { useState } from 'react'
import ListItem from './components/ListItem'
import { nanoid } from 'nanoid'

function App() {

  const [todoList, setTodoList] = useState([])

  const [input, setInput] = useState("")

  const [state, setState] = useState(false)

  function deleteFunc(id){
    setTodoList(todoList.filter((item) => item.id !== id))
  }

  function handleSubmit(e){
    e.preventDefault()
    if(input === ""){
      setState(true)
      return
    }
    setTodoList([...todoList, {id: nanoid(8), content: input}])
    setInput("")
    setState(false)
  }

  return (
    <div className='max-w-4xl m-auto'>
      <h1 className='text-3xl'>Todo-list</h1>
      <form className='my-6' onSubmit={handleSubmit}>
        <label htmlFor="input">Chose à faire :</label>
        <input 
          type="text"
          className='block w-full rounded border'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {state && (
          <p className='text-red-600'>Veuillez remplir le champ</p>
        )}
        <button className='bg-blue-600 text-gray-50 py-2 px-4 rounded mt-2'>Valider</button>
      </form>
      {todoList.length === 0 ? (
          <p>Rien à afficher</p>
        ) :
        <ul>
        {todoList.map((item) => (
          <ListItem key={item.id} data={item} deleteFunc={deleteFunc} />
        ))}
      </ul>}
    </div>
  )
}

export default App
