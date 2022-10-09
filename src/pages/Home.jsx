import Pikachu from "../assets/imgs/25_dos.svg"
const Home=()=>{

    return(
    <>
        <h1 className="centrado">Bienvenido maestro pokemón</h1>
        <div className="centrado">
        <img className="foto_pikachu" src={Pikachu} alt="" />
        </div>
    </>
    )
}

export default Home;