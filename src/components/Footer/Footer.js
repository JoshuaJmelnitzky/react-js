import './Footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaWhatsapp} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
        <div className="container-fluid">
        <div className="row">
            <section className="col-lg-12 col-xs-12 footer__info">
                <a className="footer__info__links" href="./">Quiénes somos</a>
                <a className="footer__info__links" href="./">Términos y condiciones</a>
                <a className="footer__info__links" href="./">Garantía y devoluciones</a>       
            </section>
        </div>
        <div className="row">
            <section className="col-lg-6 col-xs-12 footer__redes bg-dark">
            <h3 className="redes__text">Seguinos en</h3>
            <div className="footer__logos--animated">
                <div className="icon-cont">
                    <a target="blank" href="https://www.facebook.com.ar/hardbuy">
                        <FaFacebookF className="redes__color"/>
                    </a>
                </div>
                <div className="icon-cont">
                    <a target="blank" href="https://www.twitter.com.ar/hardbuy">
                        <FaTwitter className="redes__color"/>
                    </a>
                </div>
                <div className="icon-cont">
                    <a target="blank" href="https://www.instagram.com.ar/hardbuy">
                        <FaInstagram className="redes__color"/>
                    </a>
                </div>
                <div className="icon-cont">
                    <a target="blank" href="https://www.youtube.com.ar/hardbuy">
                        <FaYoutube className="redes__color"/>
                    </a>
                </div>
            </div>
            </section>

            <section className="col-lg-6 col-xs-12 footer__contacto bg-dark">
            <div>
                <h3 className="redes__text redes__text__contacto">Contacto</h3>
            </div>
            <div className="footer__logos--animated">
                <div className="icon-cont">
                <a target="blank" href="https://api.whatsapp.com/send?phone=+5491111111111">
                    <FaWhatsapp className="redes__color"/>
                </a>
                </div>
            </div>
            </section>
        </div>
        </div>
    </footer>
  )
}

export default Footer