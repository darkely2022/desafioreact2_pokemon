import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const VerDetalle=()=>{
    const { id } = useParams();
    const [characters, setcharacter]=useState([])
    useEffect(()=>{
        const getdetalle=async(idCharacter)=>{
            const resp=await fetch(`https://pokeapi.co/api/v2/pokemon/${idCharacter}`)
            const datosPersonaje=await resp.json();
            
            setcharacter(datosPersonaje.sprites.other.dream_world);
            console.log(datosPersonaje.sprites.other.dream_world);
        }

        
    getdetalle(id)
            
        
    },[id])
return(
    <>
        <div className="centrado">
        <h1>Detalle del Pokemon</h1>
        <h1>{id}</h1>
        
        <img src={characters.front_default} alt="" />
        </div>
    </>
)

}

export default VerDetalle;