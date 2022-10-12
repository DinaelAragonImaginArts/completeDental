import styles from './css/doctores.module.css';
import pacheco2 from './img/pacheco2.webp';
import pacheco from './img/pacheco.webp';
import { Link } from 'react-router-dom'

const Doctores = () => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.doctor} style={
        {
          background: `url(${pacheco})`,
          backgroundPosition: "top left",
          backgroundSize: "cover",
        }
      }>
        <div className={styles.contenido}>
          <h3>Te presentamos al Dr. Alier Pacheco.</h3>
          <div>
            <p>Cirujano Dentista por la Universidad Autónoma de Baja California, cuenta con más de 10 años de experiencia otorgando la mejor atención dental posible.</p>
            <p>Con una especialización en Prostodoncia e Implantología por la Universidad de La Salle Bajío, el doctor Alier fundó Complete Dental con el propósito de brindar la mejor atención dental de la región.</p>
          </div>
          <Link to={'/agenda'} className={`enlace ${styles.enlaces}`}>¡Agenda una cita!</Link>
        </div>
      </div>
      <div className={styles.doctor2} style={
        {
          background: `url(${pacheco2})`,
          backgroundPosition: "top right",
          backgroundSize: "cover",
        }
      }>
        <div className={styles.contenido}>
          <h3>Conoce al Dr. Erwin Pacheco.</h3>
          <div>
            <p>Cirujano Dentista por la Universidad Autónoma de Baja California, desde que fundó Complete Dental junto a su hermano, el Dr. Alier Pacheco, ha compartido la misma pasión por el bienestar de sus pacientes</p>
          </div>
          <Link to={'/agenda'} className={`enlace ${styles.enlaces2}`}>¡Agenda una cita!</Link>
        </div>
      </div>
    </div>
  )
}

export default Doctores