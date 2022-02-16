import './Account.css'

const Account = () => {
  return (
    <div className="container-fluid">
        <div className="row clientes">
            <section className="offset-lg-1 col-xs-12 col-lg-5 new__cliente">
                <h2 className="subtitle clientes__subtitle--sizeNew clientes__subtitle--padding">Nuevo Cliente</h2>
                {/* <!-- Inicio formulario cliente no registrado--> */}
                <div className="cliente__campos">
                    <form action="#">
                        <div>
                            <label name="name">Nombre: </label>
                            <input type="text"/>
                        </div>
                        <div>
                            <label name="surname">Apellido: </label>
                            <input type="text"/>
                        </div>
                        <div>
                            <label name="dni">DNI: </label>
                            <input type="number"/>
                        </div>
                        <div>
                            <label name="phone">Teléfono: </label>
                            <input type="number"/>
                        </div>
                        <div>
                            <label name="mail">Correo electrónico: </label> 
                            <input type="email"/>
                        </div>
                        <div>
                            <label name="password">Contraseña: </label>
                            <input type="password"/>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox"/>
                            <label name="text">Aceptar términos y condiciones: </label>
                        </div>
                        <div className="logIn">
                            <div>
                                <button className="logIn__button">Continuar</button> 
                            </div>
                        </div>           
                    </form>
                </div>
            </section>
            
            <section className="col-xs-12 col-lg-5 old__cliente">
                <h2 className="subtitle clientes__subtitle--sizeOld clientes__subtitle--padding">Ya soy Cliente</h2>
                {/* <!-- Inicio formulario cliente registrado --> */}
                <div className="cliente__campos">
                    <form action="#">
                        <div>
                            <label name="mail">Correo electrónico: </label>
                            <input type="email"/>
                        </div>
                        <div>
                            <label name="password">Contraseña: </label>
                            <input type="password"/>
                        </div>
                        <div className="logIn">
                            <div>
                                <button className="logIn__button">Ingresar</button>                   
                            </div>
                            <div>
                                <button className="fb__button">
                                  <span>f</span>
                                  Ingresar con Facebook
                                </button>    
                            </div>        
                            <div>
                                <button className="google__button">
                                  <span>G+</span>
                                  Ingresar con Google+
                                </button>  
                            </div>
                        </div>
                    </form>
                </div>
            </section>          
        </div>  
    </div>
  )
}

export default Account