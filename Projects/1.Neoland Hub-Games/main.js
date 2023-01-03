import { createNavBar } from "./components/navBar/NavBar";
import { createLogin } from "./pages/Login/Login"
import { createHome } from "./pages/Home/Home";
import { createPokeMenu } from "./pages/PokeAPI/PokeMenu/PokeMenu";

createNavBar();

export const initContent = (navigation) => {
    switch (navigation) {
        case undefined:
            window.localStorage.getItem('user')
            ? createHome()
            : createLogin()
            break;
        case 'pokeAPI':
            createPokeMenu()
            break;
        case 'ticTacToe':
            createTicTacToe()
            break;
        default:
            console.log('no hay nada')
            break;
    }

}
initContent(undefined)
// createLogin();
// createHome()

