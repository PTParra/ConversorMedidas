import './cabecera.css';
import imgFlechasLilas from '../../../public/iconos/flechasLilas.png'


function Cabecera(){
    
    return(
        <div id='divCabeceraMayor'>
            <div id='divCabecera'>
                <img src={imgFlechasLilas} alt="" />
                <h1 className="poppins tituloCabecera">unit converter</h1>
            </div>
        </div>
        
    )
}

export default Cabecera;