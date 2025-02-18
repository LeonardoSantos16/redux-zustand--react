import { FormEvent, useState } from "react"

function AddTodo(){
    const [newTodo, setNewTodo] = useState('')

    function handleNewTodo(e: FormEvent){
        e.preventDefault()

        console.log(newTodo)
    }
    return(
        <form onSubmit={handleNewTodo}>
            <input type="text" placeholder="novo to-do" 
            value={newTodo} onChange={e => setNewTodo(e.target.value)} />
            <button type="submit">Adicionar</button>
        </form>
    )
}

export default AddTodo