import { createHome } from "../../pages/Home/Home";
import "./navBar.css";
import { ramdonNum } from "./utils/RamdonNum";

export const createNavBar = () => {
  const navBar = document.querySelector("#navBar");
  navBar.innerHTML = `
    <nav>
        <h4 id='wellcomeUser'>${printUser()}</h4>
        <button id='colorModeBtn'>Color mode</button>
        <ul>
          <li>
            <button id='homeBtn'>
              <img src='./icons/home.png' alt='home image' />
            </button>
          </li>
          <li>
            <button id='logOutBtn'>
            Log out
            </button>
          </li>
        </ul>
    </nav>
    `
    document.body.style.backgroundColor=`hsl(${ramdonNum(0, 359)}deg ${100}% ${80}%)`;

    addListenerColorModeBtn();
    addListenerHomeBtn();
    addListenerLogOut();    //---esto mejor hacerlo con un toggle
 };

const printUser = () => {
  if (localStorage.getItem('user') != null || undefined) {
    return `Wellcome ${localStorage.getItem('user')}`
  } else {
    return `Please, enter your user name`
  }
}

const addListenerColorModeBtn = () => {
  const colorModeBtn = document.querySelector('#colorModeBtn');
  colorModeBtn.addEventListener('click', () => {
    document.body.style.backgroundColor=`hsl(${ramdonNum(0, 359)}deg ${100}% ${80}%)`;
  })
}

const addListenerHomeBtn = () => {
  const homeBtn = document.querySelector('#homeBtn');
  homeBtn.addEventListener('click', () => {
    createHome();
  })
}

const addListenerLogOut = () => {
  const logOutBtn = document.querySelector('#logOutBtn');
  const wellcomeUser = document.querySelector('#wellcomeUser');
  logOutBtn.addEventListener('click', () => {
    localStorage.clear()
    wellcomeUser.innerHTML = `Please, enter your user name`;
  })
}