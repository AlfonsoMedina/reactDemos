/* Este Hook es un componente formulario  */
import React,{useState, Fragment} from 'react';


const Formulario = () => {

const [datos, setDatos] = useState({
    nombre: "",
    apellido: ""
});


const monitor = (event) => {
    //console.log(event.target.value);
    setDatos({
        ...datos,//los tres puntos hacen referencia al objeto datos 
        [event.target.name] : event.target.value
    })
}


const enviarDatos = (event) => {
    event.preventDefault();
    console.log(datos.nombre+' '+datos.apellido)
}




    return(
        <Fragment>
            
            <h1 className="display-3 m-3">Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
               <div className="col-md-3">
               <input
                   type="text"
                   placeholder="Ingrse Nombre"
                   className="form-control"
                   name="nombre"
                   onChange={monitor}
               ></input>
               </div>
               <div className="col-md-3">
               <input
                   type="text"
                   placeholder="Ingrse Apellido"
                   className="form-control"
                   name="apellido"
                   onChange={monitor}
               ></input>                
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div> 
            </form>
<h1 className="display-3">{datos.nombre} - {datos.apellido}</h1>
        </Fragment>
        
    );
}

export default Formulario;