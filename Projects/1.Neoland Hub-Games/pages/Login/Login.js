import './login.css';
import { initContent } from '../../main';

export const createLogin = () => {
    const login = document.querySelector('#main');
    login.innerHTML = `
    <div class='container'>
        <h1>Wellcome to Neoland Hub Games</h1>
        <input type='text' id='userName' placeholder='Your name here'/>
        <button id='logInBtn'>Login</button>
    </div>
    `
    addListenerLoginBtn();
};

const addListenerLoginBtn = () => {
    const logInBtn = document.querySelector('#logInBtn');
    let userName = document.querySelector('#userName');
    const wellcomeUser = document.querySelector('#wellcomeUser')
    

    logInBtn.addEventListener('click', () => { 
        localStorage.setItem('user', userName.value);
        wellcomeUser.innerHTML = `Wellcome ${localStorage.getItem('user')}`;
        initContent();
    })
}
