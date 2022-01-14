import {useState} from "react";

function ToDoForm({addTask}){
    const [userInput, setUserInput] = useState([])
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }
    const handlePress = (e) => {
        if(e.key === "Enter"){
            handleSubmit(e)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={userInput} onChange={handleChange} onKeyDown={handlePress} placeholder={"Input"}/>
            <button>Save</button>
        </form>
    )
}

export default ToDoForm