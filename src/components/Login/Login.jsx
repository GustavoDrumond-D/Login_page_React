import { FaUser, FaLock } from 'react-icons/fa'
import { useState } from 'react'
import './Login.css'

const Login = () => {

    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        console.log("Formulario enviado com sucesso")

        console.log("Daddos do formulario: " + userEmail + " - " + userPassword)
    }

    return (
        <div className='login-container'>
            <form onSubmit={handleLogin}>
                <h3>Acesse o sistema</h3>
                <div className='input-field' >
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={(e) => setUserEmail(e.target.value)}
                    />
                    <FaUser className='icon'/>
                </div>
                <div className='input-field'>
                    <input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        onChange={(e) => setUserPassword(e.target.value)}
                    />
                    <FaLock className='icon'/>
                </div>

                <div className='recall-forget'>
                    <label>
                        <input type="checkbox"/>
                        Lembre de mim
                    </label>
                    <a href="#">Esqueci minha senha</a>
                </div>

                <button>Entrar</button>

                <div className='signup-link'>
                    <p>Não possui uma conta?</p>
                    <a href="#">Cadastre-se</a>
                </div>
            </form>
        </div>
    )
}

export default Login
