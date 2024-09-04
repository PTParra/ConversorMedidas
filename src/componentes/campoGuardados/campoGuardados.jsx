
import imgEquis from '../../../public/iconos/equis.png';
import './campoGuardados.css';

function CampoGuardados(props){

    function cambiarAbreviatura(abreviatura){
        let salida;
        switch (abreviatura) {
            case "mi":
                salida = "milla/s";
                break;
            case "km":
                salida = "kilometro/s";
                break;
            case "m":
                salida = "metro/s";
                break;
            case "ft":
                salida = "pie/s";
                break;
            case "in":
                salida = "pulgada/s";
                break;
            case "cm":
                salida = "centimetro/s";
                break;
            default:
                break;
        }
        return salida;
    }

    function mostrarFavoritos(favorito, indice){
        return(
            <div className='favorito poppins' key={indice} id={indice}>
                <span>{favorito.valorInicial} {cambiarAbreviatura(favorito.medidaInicial)} 
                     → {favorito.valorFinal} {cambiarAbreviatura(favorito.medidaFinal)}
                </span>
                <button className='botonQuitarFavoritos' type="button" onClick={() => {props.quitarFavorito(indice)}}>
                    <img src={imgEquis} alt="" />
                </button>
            </div>
        )
    }

    return(
        <div id='almacenFavoritos'>
            {props.listaFavoritos.map(mostrarFavoritos)}
        </div>
        
    )
}

export default CampoGuardados;