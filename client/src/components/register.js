import React, {useState} from 'react';
import axios from 'axios';

const Register = () => {
    const [form, setForm] = useState({
        login: '',
        role: '',
        name: '',
        surname: '',
        sursurname: '',
        password: ''
        
    });
    const changeHeandler = (event) =>{
        setForm({...form, [event.target.name]: event.target.value });
        console.log(form);
    }
    const registerHandler = async()=>{
        try {
            await axios.post('/api/auth/registration', {...form}, {
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
                <form className="form"  onSubmit={e => e.preventDefault} >

                <div className="form-group">
                    <label htmlFor="login">Логин</label>
                    <input type="text" className="form-control" id="login" name="login"  placeholder="+7 7777 777 777" onChange={changeHeandler}/>

                </div>
                    
                

                <div className="form-check">
                    <input className="form-check-input" type="radio" name="role" id="client" value="client"  onChange={changeHeandler}/>
                    <label className="form-check-label" htmlFor="role">
                        Клиент
                    </label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="role" value="manager" id="manager" onChange={changeHeandler}/>
                    <label className="form-check-label" htmlFor="role">
                        Менеджер
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="name">Имя</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Введите ваше имя" onChange={changeHeandler}/>

                </div>

                <div className="form-group">
                    <label htmlFor="surname">Фамилия</label>
                    <input type="text" className="form-control" id="surname" name="surname" placeholder="Введите вашу фамилию" onChange={changeHeandler}/>

                </div>

                <div className="form-group">
                    <label htmlFor="sursurname">Отчество</label>
                    <input type="text" className="form-control" id="sursurname" name="sursurname" placeholder="Введите ваше отчество" onChange={changeHeandler}/>

                </div>

                <div className="form-group">
                    <label htmlFor="password">Пароль</label>
                    <input type="password" className="form-control" id="password" name="password"  placeholder="Придумайте пароль" onChange={changeHeandler}/>

                </div>

                <div className="form-group">
                    <label htmlFor="secpassword">Пароль</label>
                    <input type="password" className="form-control" id="secpassword" name="secpassword" placeholder="Повторите пароль" onChange={changeHeandler}/>

                </div>


                <button type="submit" className="btn btn-primary" onClick={registerHandler}>Зарегистрироваться</button>
                </form>
            </div>
            

              </div>
    )
}

export default Register;
