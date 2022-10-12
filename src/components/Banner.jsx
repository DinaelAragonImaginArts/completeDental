import styles from './css/banner.module.css'
import primera from './img/primera.webp';
import segunda from './img/segunda.webp';
import tercera from './img/tercera.webp';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
    return (
        <Carousel infiniteLoop={true} className={styles.carrusel}>
                <div className={styles.primera}
                    style={
                        {
                            backgroundImage: `linear-gradient(200deg, rgb(222 222 222 / .5), rgb(222 222 222 / .4)), url(${primera})`,
                            backgroundPosition: "center center",
                            backgroundSize: "cover",
                        }
                    }>
                    <div>
                        <h1 className={styles.titulo}>Experiencia y profesionalismo, conoce a nuestro equipo.</h1>
                        <Link to={'/nosotros'}>
                            <span className={styles.enlace}>Equipo</span>
                        </Link>
                    </div>
                </div>
                <div className={styles.primera}
                    style={
                        {
                            background: `linear-gradient(200deg, rgb(222 222 222 / .5), rgb(222 222 222 / .4)),url(${segunda})`,
                            backgroundPosition: "center right",
                            backgroundSize: "cover"
                        }
                    }>
                    <div>
                        <h1 className={styles.titulo}>Atención de calidad, humana y profesional.</h1>
                        <Link to={'/agenda'}>
                            <span className={styles.enlace}>¡Agenda una cita!</span>
                        </Link>
                    </div>
                </div>
                <div className={styles.primera}
                    style={
                        {
                            background: `linear-gradient(200deg, rgb(222 222 222 / .5), rgb(222 222 222 / .4)),url(${tercera})`,
                            backgroundPosition: "center center",
                            backgroundSize: "cover"
                        }
                    }>
                    <div>
                        <h1 className={styles.titulo}>Queremos brindarte la mejor atención de tu vida.</h1>
                        <Link to={'/servicios'}>
                            <span className={styles.enlace}>Servicios</span>
                        </Link>
                    </div>
                </div>
        </Carousel>

    )
}

export default Banner
