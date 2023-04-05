import './Login.css';

import { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../Context/userContext';

const Login = () => {
  const { login, user } = useContext(UserContext);
  const textInput = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    user && navigate('/home');
  }, [user]);

  return (
    <div className="containerLogin">
      {!localStorage.getItem('user') && (
        <>
          <h1>Bienvenid@</h1>
          <p>Por favor, introduzca su nombre de usuario</p>
          <input type="text" ref={textInput} />
          <button className="loginButton" onClick={() => login(textInput.current.value)}>
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
