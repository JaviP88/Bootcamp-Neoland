import { Link, Outlet } from "react-router-dom";
import { getHeroes } from "../../Components/Data/Data"
import HeroDetail from "../../Components/Data/HeroDetail";



const Heroes = () => {
    const heroes = getHeroes();

    return (
        <>
            <div>
                <h1>All heroes 🦸‍♀️🦸</h1>
                <ul>
                    {heroes.map((heroe) => (
                        <li key={heroe.id}>
                            <Link to={`/heroe/${heroe.id}`}>
                                <HeroDetail heroe={heroe} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <Outlet />
        </>
    )
}

export default Heroes