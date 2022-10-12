import Formulario from '../components/Formulario';
import { serviciosGenerales } from './serviciosGral';
import styles from './css/servicios.module.css';
import background from '../img/servicios.png';
import { Link } from 'react-router-dom';
import {serviciosEspecializados} from './serviciosEsp';

const Servicio = () => {


  return (
    <div>
      {serviciosGenerales &&
        <div className={styles.contenedor}>
          {serviciosGenerales?.map(servicio => (
            <div className={styles.card} key={servicio.id}>
              <p>{servicio.nombre}</p>
              <p>{`${servicio.descripcion === '' ? '' : servicio.descripcion}`}</p>
            </div>
          ))}
        </div>}
      <div className={styles.contenedorBanner}>
        <div>
          <Link to={"/agenda"} className={`enlace  ${styles.enlace}`}>¡Agenda una cita!</Link>
        </div>
        <div className={styles.banner}
          style={
            {
              background: `url(${background})`,
              backgroundPosition: "center right",
              backgroundSize: "cover",
              filter: 'grayScale(1)',
            }
          }>
        </div>
      </div>
      {serviciosEspecializados &&
        <div className={styles.contenedor2}>
          {serviciosEspecializados?.map(servicio => (
            <div className={styles.cards2} key={servicio.id}>
              <p>{servicio.nombre}</p>
              <p>{`${servicio.descripcion === '' ? '' : servicio.descripcion}`}</p>
            </div>
          ))}
        </div>}
      <Formulario />
    </div >
  )
}

export default Servicio