import './navBar.css'
import { NAV } from '../../data/Titulos'


export const createNav = () => {
  document.querySelector('#nav').innerHTML = `
    <button class="nav-btn open-btn">
    <i class="fas fa-bars"></i>
  </button>

  

  <div class="nav nav-black">
    <div class="nav nav-red">
      <div class="nav nav-white">
        <button class="nav-btn close-btn">
          <i class="fas fa-times"></i>
        </button>

        <img
          src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
          alt="Logo" class="logo">

        <ul class="list">
        </ul>
      </div>
    </div>
  </div>`
  addListenersNav()
}

const addListenersNav = () => {
  const open_btn = document.querySelector('.open-btn')
  const close_btn = document.querySelector('.close-btn')
  const nav = document.querySelectorAll('.nav')

  open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
  })

  close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
  })
  // CREAMOS UN ELEMENTO INDEX YA QUE FOR IN NO NOS DA EL INDEX
  let index = 0
  for (let clave in NAV) {
    index++;
    
    // EN FUNCION DEL TIPO LLAMAMOS A DOS FUNCIONES DIFERENTES
    if (typeof NAV[clave] === 'string') {
      pintarLista(clave, NAV[clave], index)


    } else {
      pintarSub(clave, NAV[clave], index)
    }
  }
}

/// ---------- PINTA LOS LI SIN SUBINDICE -------------
const pintarLista = (item, url, index) => {
  // URL  lo utilizaremos cuando le metamos en donde queremos navegar
  const lista = document.querySelector('.list')
  lista.innerHTML += `
  <li class = '${index}'>${item}</li>
  `
}

/// ---------- PINTA LOS LI CON SUBINDICE -------------
const pintarSub = (item, url, index) => {
  // URL  serÃ¡n los elementos subindice del li
  const lista = document.querySelector('.list')

  lista.innerHTML += `
  <li class = '${index}'>${item}
    <ul class= 'ul${index}'>
    </ul>
  </li>
  `

  //creamos el nombre del elemento a apuntar en una constante
  const apuntar = `.ul${index}`
  const ulSub = document.querySelector(apuntar)
  //url recordar es el elemento con los objetos subindice
  for (let clave in url) {
    ulSub.innerHTML += `
    <li>${clave}</li>`
  }
}