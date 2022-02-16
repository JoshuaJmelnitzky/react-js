import './Help.css';
import contact from '../../assets/correo__help.png';
import contact2 from '../../assets/phone__help.png';
import contact3 from '../../assets/whatsapp__help.png';

const Help = () => {
  return (
    <div>
        {/* <!-- Preguntas frecuentes --> */}
        <section className="contacto__help">     
            <div className="container-fluid">
                <div className="row">
                    <div className="offset-lg-1 col-xs-12 col-lg-10 preguntas__help">                    
                        <h2>Preguntas Frecuentes</h2>          
                        <div className="preguntas__texto">
                            <div>
                                <span> ¿Cómo hago para comprar?</span>
                                Para realizar un pedido simplemente vas agregando al carrito todos los productos que quieras; al finalizar presionas el botón de comprar. En primera
                                instancia se te pregunta si necesitas envío, posteriormente podrás elegir la forma de pago. Es necesario ser cliente por lo cual se te pedirá tus datos 
                                de acceso, en caso de no estar registrado podrás registrarte para luego comprar y confirmar el pedido.
                            </div>
                            <div>
                                <span> ¿Cuáles son las formas de pago disponibles?</span>
                                Se aceptan pagos por transferencia bancaria, mercadopago, tarjetas de crédito/débito. Para acceder al programa "Ahora 12 y 18" es necesario
                                contar con tarjeta Visa, MasterCard o American Express emitidas por entidades bancarias (sobre precio de lista).
                            </div>
                            <div>
                                <span>¿Cuál es el costo del envío?</span>
                                El costo del mismo se abona con el pedido, es decir, el pedido incluye el costo del envío. El valor del envío depende de las dimensiones del paquete 
                                y distancia. Podrás saber el costo del envío en tiempo real ingresando tu código postal en el producto a adquirir o a tu pedido. 
                                Y según el pedido desde la misma web se le informa si es bonificado el mismo.
                            </div>
                            <div>
                                <span> ¿Puedo retirar mi compra personalmente?</span>
                                Si, actualmente estamos atendiendo para ventas presenciales/retiros con los protocolos de seguridad e higiene necesarios.
                            </div>
                            <div>
                                <span> ¿Son precios finales o más IVA?</span>
                                Todos los precios que se muestran en la tienda incluyen IVA
                            </div>
                            <div>
                                <span> ¿Cómo solicito el servicio de PosVenta y garantías?</span>
                                Al pie de esta web se encuentra nuestro correo electronico, en el cual se deberá escribir en el asunto: "Garantía" y el producto en cuestión. En el cuerpo del 
                                correo se detallará la falla que presenta el producto y se adjuntará la factura de compra. Un representante le brindará soporte en un plazo máximo de 72hs hábiles.
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </section>  

        {/* <!-- Contacto --> */}
        <section className="contacto__help">     
            <div className="container-fluid">
                <div className="row">
                    <div className="offset-lg-1 col-xs-12 col-lg-10">                    
                        <div>
                            <h2>Para más Ayuda</h2>
                        </div>
                        <div className="ayudaContacto">
                            <div>
                                <img src={contact} alt="consultas@hardbuy.com.ar"/>
                            </div>
                            <div>
                                <img src={contact2} alt="+549-111-111111"/>
                            </div>
                            <div>
                                <img src={contact3} alt="0810-111-1111"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
    </div>



  )
}

export default Help