import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import VerDetalle from "../components/VerDetalle";

const Pokemones=()=>{
    const [id, setId] = useState("");
    const navigate = useNavigate();
    const [characters, setcharacter]=useState([])
    const irAPokemon = () => {
        navigate(`/pokemon/${id}`);
        if (id=="")
        { alert("seleccione un valor")}
        console.log(id)
        };
    
    useEffect(()=>{
        const getpokemon= async()=>{
            const resp = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=10');
            const data = await resp.json();
            console.log(data);

            if (data && data.results){
                const getDatos = data.results.map((character)=>{
                   return{
                    url: character.url,
                    name: character.name
                   }
                })
                console.log(getDatos)
                setcharacter(getDatos)
            }
        }
        getpokemon();
    },[])
    
return(
    <>
        <div className="centrado">
        <h1>Selecciona un pokemon</h1>
        <select name="seleccion" id="" onChange={(e)=>{  setId(e.target.value)
                                                console.log(e.target.value)}}>
            <option key={"pokemones"} value={"pokemones"}>{"pokemones"}</option>                                        
            {characters.map((character)=>(
                <option key={character.name} value={character.name}>{character.name}</option>
            ))}
        </select>
        <button onClick={irAPokemon}>Ver Detalle</button>
        </div>
    </>
)

}

export default Pokemones