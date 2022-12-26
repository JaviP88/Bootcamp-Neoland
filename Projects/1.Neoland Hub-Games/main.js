import { createNavBar } from "./components/navBar/NavBar";
import { createLogin } from "./pages/Login/Login"
import { createHome } from "./pages/Home/Home";


createNavBar();

export const initContent = (navigation) => {
    switch (navigation) {
        case undefined:
            window.localStorage.getItem('user')
            ? createHome()
            : createLogin()
            break;
    
        default:
            console.log('no hay nada')
            break;
    }

}
initContent(undefined)
// createLogin();
// createHome()

