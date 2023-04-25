import { useState } from 'react';
import style from './Form.module.css'

function Form () {
    const [form, setForm] = useState({
        username:"",
        password:""
    })

    function handleChange (event) {
        const property = event.target.name;
        const value = event.target.value

        setForm({...form,[property]:value})
    }
    function submitHandler(event){
        event.preventDefault()
        alert('fefef')
    }

    return (
        
        <form onSubmit={submitHandler}>
        
            <div>
                <label htmlFor="username"> Username: </label>
                <input type="text" name="username" value={form.username} onChange ={handleChange}/>
            </div>
            <div>
                <label htmlFor="password"> Password: </label>
                <input type="text" name="password" value={form.password} onChange ={handleChange}/>
            </div>
            <button type="submit">LOGIN</button>
        </form>
    )
}


export default Form;