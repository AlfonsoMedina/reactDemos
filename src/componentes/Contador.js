import React, {useState, Fragment} from 'react';
import Formulario from './Form1';

const Contador = () => {
    
    //declaracion de variable con  estado____________________________________________________________________
    const [numero, setNumero] = useState(100);//numero es la variable y setNumero la funcion que lo modifica

    //funcion para disparar con el boton onClick_____________________________________________________________
    const aumentar = (e) => {
        setNumero(numero + 1)
    }
    
    //retorno de html por medio de jsx de react______________________________________________________________
    return(
            <Fragment>
                <h3 >Contador cambia al hacer click en aumentar - ( {numero} )</h3>
                <button onClick={aumentar} >Aumentar</button>
                <Formulario/>
            </Fragment>
    );
}

export default Contador;
                
                /*Esta es la estructura de un Hook en ReactJS */