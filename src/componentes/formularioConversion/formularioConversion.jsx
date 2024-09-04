import { useEffect, useState } from "react";
import imgCorazon from '../../../public/iconos/Corazon.png';
import imgFlechasBlancas from '../../../public/iconos/flechasBlancas.png';
import './formularioConversion.css'

function FormularioConversion(props){
    
    const [nuevaConversion, setNuevaConversion] = useState(
        {
            medidaInicial: "km",
            medidaFinal: "mi",
            valorInicial: 0,
            valorFinal: 0,
        }
    );

    useEffect(() => {
        actualizarCampoMedida();
    }, [nuevaConversion])


    function asignarConversion(evento){
        switch (evento.target.id) {
            case "campoConversion":
                cambiarConversion(evento);
                break;
            case "valorInicial":
                cambiarNumero(evento);
                break;
            default:
                break;
        }
    }

    function cambiarConversion(evento){
        const CAMPOELEGIDO = document.getElementById(evento.target.value);
        let nuevoValor;
        switch (CAMPOELEGIDO.getAttribute('value')) {
            case "mi":
                nuevoValor = Math.round((nuevaConversion.valorInicial / 1.609) * 100) / 100;
                break;
            case "km":
                nuevoValor = Math.round((nuevaConversion.valorInicial * 1.609) * 100) / 100;
                break;
            case "m":
                nuevoValor = Math.round((nuevaConversion.valorInicial / 3.281) * 100) / 100;
                break;
            case "ft":
                nuevoValor = Math.round((nuevaConversion.valorInicial * 3.281) * 100) / 100;
                break;
            case "in":
                nuevoValor = Math.round((nuevaConversion.valorInicial / 2.54) * 100) / 100;
                break;
            case "cm":
                nuevoValor = Math.round((nuevaConversion.valorInicial * 2.54) * 100) / 100;
                break;
            default:
                break;
        }
        setNuevaConversion({...nuevaConversion, 
            medidaInicial:CAMPOELEGIDO.getAttribute('data-opuesto'), 
            medidaFinal:CAMPOELEGIDO.getAttribute('value'),
            valorFinal:nuevoValor});
    }

    function actualizarCampoMedida(){
        let textoMedidaConversion;
        const campoValorMedidaInicial = document.getElementById('valorInicial');
        const campoValorMedidaFinal = document.getElementById('valorFinal');
        const campoMedida = document.getElementById('medida');
        const campoMedidaFinal = document.getElementById('medidaFinal');
        switch (nuevaConversion.medidaFinal) {
            case "mi":
                textoMedidaConversion = "milla/s";
                break;
            case "km":
                textoMedidaConversion = "kilometro/s";
                break;
            case "m":
                textoMedidaConversion = "metro/s";
                break;
            case "ft":
                textoMedidaConversion = "pie/s";
                break;
            case "in":
                textoMedidaConversion = "pulgada/s";
                break;
            case "cm":
                textoMedidaConversion = "centímetro/s";
                break;
            default:
                break;
        }
        campoMedida.innerHTML = nuevaConversion.medidaInicial;
        campoValorMedidaInicial.setAttribute('value', nuevaConversion.valorInicial);
        campoValorMedidaFinal.innerHTML = nuevaConversion.valorFinal;
        campoMedidaFinal.innerHTML = textoMedidaConversion;
    }

    function cambiarNumero(evento){
        let conversion;
        switch (nuevaConversion.medidaFinal) {
            case "mi":
                conversion = Math.round((evento.target.value / 1.609) * 100) / 100;
                break;
            case "km":
                conversion = Math.round((evento.target.value * 1.609) * 100) / 100;
                break;
            case "m":
                conversion = Math.round((evento.target.value / 3.281) * 100) / 100;
                break;
            case "ft":
                conversion = Math.round((evento.target.value * 3.281) * 100) / 100;
                break;
            case "in":
                conversion = Math.round((evento.target.value / 2.54) * 100) / 100;
                break;
            case "cm":
                conversion = Math.round((evento.target.value * 2.54) * 100) / 100;
                break;
            default:
                break;
        }
        setNuevaConversion({...nuevaConversion,
            valorInicial:evento.target.value, 
            valorFinal:conversion});
    }

    function alternarMedidas(){
        let medidaInicial = nuevaConversion.medidaInicial;
        let valorInicial = nuevaConversion.valorInicial;
        setNuevaConversion({medidaInicial: nuevaConversion.medidaFinal
            , medidaFinal:medidaInicial, valorInicial:nuevaConversion.valorFinal, valorFinal:valorInicial});
    }

    function guardarEnFavoritos(evento){
        evento.preventDefault();

        props.aniadirListaFavoritos(nuevaConversion);

        setNuevaConversion({...nuevaConversion, valorInicial: 0, valorFinal:0});
    }


    return(
        <form id="formularioConversion" onSubmit={guardarEnFavoritos}>
            <div className="interno">
                <div className="divTitulo">
                    <h2 className="blanco poppins tituloForm">
                        convert
                    </h2>
                </div>
                
                <div className="campoInicial">
                    <div className="divConversion">
                        <select name="campoConversion" id="campoConversion" className="poppins" value={nuevaConversion.medidaFinal} onChange={asignarConversion}>
                            <option data-opuesto="km" id="mi" value="mi">Kilómetros → millas</option>
                            <option data-opuesto="mi" id="km" value="km">Millas → kilómetros</option>
                            <option data-opuesto="ft" id="m" value="m">Pies → metros</option>
                            <option data-opuesto="m" id="ft" value="ft">Metros → pies</option>
                            <option data-opuesto="cm" id="in" value="in">Centímetros → pulgadas</option>
                            <option data-opuesto="in" id="cm" value="cm">Pulgadas → centímetros</option>
                        </select>
                        <button className="botomCambiar botones" type="button" onClick={alternarMedidas}>
                            <img src={imgFlechasBlancas} alt="" />
                        </button>
                    </div>
                    <div className="divConversion">
                        <input type="number" className="valorInicial" id="valorInicial" value={nuevaConversion.valorInicial} onChange={asignarConversion} />
                        <span id="medida" className="poppins blanco"></span>
                    </div>
                </div>
                <div className="campoFinal">
                    <button className="botonFavoritos botones">
                        <img src={imgCorazon} alt="" />
                    </button>
                    <div className="poppins blanco medidaFinal">
                        <span id="valorFinal">0</span>
                        <span id="medidaFinal">millas</span>
                    </div>
                    
                </div>
            </div>   
        </form>
    )
}

export default FormularioConversion;