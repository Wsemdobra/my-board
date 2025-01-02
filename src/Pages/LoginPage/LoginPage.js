import { useRef } from "react"
import "./LoginPage.css"

export const LoginPage = ({setIsLoggedIn}) => {

const LoginRef = useRef();
const passwordRef = useRef();


function handleSubmit(){

    const userData = {
        Login : LoginRef.current.value,
        password : passwordRef.current.value,
    }
    console.log(userData)

localStorage.setItem("isLoggedIn",true)
    setIsLoggedIn(true)
}
    return (
        <form onSubmit={handleSubmit} className="loginform">
            <h1>Вход</h1>
            <div>
                <input 
                ref={LoginRef} 
                type="text" 
                placeholder="Login" 
                name="Login" 
                required/>
            </div>
            <div>
                <input 
                ref={passwordRef} 
                type="password" 
                placeholder="password" 
                name="password" 
                required/>
            </div>
            <div>
                <button 
                type="submit"
                >
                    Войти
                </button>
            </div>
        </form>
    )
}