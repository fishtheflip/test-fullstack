import axios from 'axios';
import React, {useState} from 'react';;


const Auth = ()=> {
    const [form, setForm] = useState({
        login: '',
        password: ''
    });
    const changeHeandler = (event) =>{
        setForm({...form, [event.target.name]: event.target.value });
        console.log(form);
    }
    const registerHandler = async()=>{
        try {
            await axios.post('/api/log/login', {...form}, {
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then(response => console.log(response))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="main-container">
            <div className="form-group row container-sm">
                <form className="form"  onSubmit={e => e.preventDefault}>
                <div className="form-group">
                    <label htmlFor="login"> Логин</label>
                    <input type="text" className="form-control" id="login"  placeholder="Введите ваш логин" name="login" onChange={changeHeandler} />

                </div>
                    <div className="form-group">
                    <label htmlFor="password"> Пароль</label>
                    <input type="password" className="form-control" id="password" placeholder="Введите ваш пароль" name="password" onChange={changeHeandler}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={registerHandler}>Войти</button>
                </form>
            </div>
        </div>
    )
}

export default Auth;
