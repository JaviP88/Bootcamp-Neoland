import './home.css';

export const createHome = () => {
    const main = document.querySelector('#main');
    main.innerHTML = `
        <h1>Neoland Hub Games</h1>
        <button>PokeAPI</button>
    `
    // addListenerPokeAPI();
};