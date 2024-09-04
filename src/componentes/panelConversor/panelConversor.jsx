import { useState } from "react";
import FormularioConversion from "../formularioConversion/formularioConversion";
import CampoGuardados from "../campoGuardados/campoGuardados";
import './panelConversor.css';
import Cabecera from "../cabecera/cabecera";


function PanelConversor(){

    const [listaFavoritos, setListaFavoritos] = 
        localStorage.getItem("favoritos") != null ?
        useState(JSON.parse(localStorage.getItem("favoritos"))) : 
        useState([]);

    function aniadirListaFavoritos(elemento){
        let temporal = listaFavoritos;
        setListaFavoritos([...listaFavoritos, elemento]);
        temporal.push(elemento);
        localStorage.setItem("favoritos", JSON.stringify(temporal));
    }

    function quitarFavorito(indice){
        let temporal = listaFavoritos.filter((favorito) => {
            return listaFavoritos.indexOf(favorito) != indice;
        })
        setListaFavoritos(temporal);
        localStorage.setItem("favoritos", JSON.stringify(temporal));
    }
    
    return(
        <div>
            <Cabecera/>
            <FormularioConversion aniadirListaFavoritos={aniadirListaFavoritos}/>
            <h4 id="tituloSaved" className="poppins">saved</h4>
            <CampoGuardados listaFavoritos={listaFavoritos} quitarFavorito={quitarFavorito} />
        </div>
        
    )
}

export default PanelConversor;