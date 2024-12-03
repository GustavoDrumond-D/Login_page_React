import { FaUser, FaLock } from 'react-icons/fa'

const Login = () => {
    return (
        <div>
            <form>
                <h3>Acesse o sistema</h3>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                    />
                    <FaUser className='icon'/>
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Senha"
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
