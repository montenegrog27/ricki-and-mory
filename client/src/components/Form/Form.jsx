import { useState } from 'react';
import style from './Form.module.css'


const validate = (form,setErrors,errors) =>{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email)) 
    setErrors({...errors, email:""});
     else setErrors({...errors,email:"Email invalido"});

    if(!form.email) setErrors({...errors,email:"Email vacio"});
    else {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email)) 
        setErrors({...errors, email:""});
         else setErrors({...errors,email:"Email invalido"});

    }



    // if(!form.password) setErrors({...errors,password:"Password vacio"})
    // else setErrors({...errors,password:""})
}

function Form () {
    const [form, setForm] = useState({
        email:"",
        password:""
    })
    const[errors,setErrors]= useState({
        email:"",
        password:""
    })

    function handleChange (event) {
        const property = event.target.name;
        const value = event.target.value

        setForm({...form,[property]:value})
        validate({...form,[property]:value},setErrors,errors)
    }
    function submitHandler(event){
        event.preventDefault()
        alert('fefef')
    }

    return (
        
        <form className={style.form} onSubmit={submitHandler}>
        
            <div>
                <label htmlFor="email" className={style.labelEmail}> Email: </label>
                <input 
                type="text" 
                name="email" 
                value={form.email}
                 onChange ={handleChange}
                 className={errors.email ? style.errors : style.succes}
                 />
                <span className={style.spanEmail}>{errors.email}</span>

            </div>
            <div>
                <label htmlFor="password" className={style.labelPassword}> Password: </label>
                <input type="password"
                 name="password" 
                 value={form.password} 
                 onChange ={handleChange}/>
                <span className={style.spanPassword}>{errors.password}</span>
            </div>
            <button type="submit" className={style.login}>LOGIN</button>
        </form>
    )
}


export default Form;