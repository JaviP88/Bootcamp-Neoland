
import './Home.css'

export const createHome = () => {
  document.querySelector('#app').innerHTML = `
  <img
  src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
  alt="Logo" class="logo">

    <p class="text">Mobile Navigation</p>
  `
}

