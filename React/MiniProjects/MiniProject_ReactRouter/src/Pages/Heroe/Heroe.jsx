import { useNavigate, useParams } from "react-router-dom"
import { deleteHeroe, getHeroe } from "../../Components/Data/Data";
import HeroDetail from "../../Components/Data/HeroDetail";



const Heroe = () => {
    const params = useParams();
    const navigate = useNavigate();
    const heroe = getHeroe(params.id);
    
    if (!heroe) return <p>🤕 No existe el héroe que buscas 🤕</p>

    return (
        <div>
            <h1>My heroes 🦸🦸‍♀️</h1>
            <HeroDetail heroe={heroe} />
            <button onClick={() =>{
                deleteHeroe(heroe.id).then(() => {
                    navigate('/heroes');
                });
            }}>
                Borrar a {heroe.name}
            </button>
        </div>
    )
}

export default Heroe