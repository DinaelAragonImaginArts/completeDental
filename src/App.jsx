import Banner from "./components/Banner"
import styles from './css/app.module.css';
import doc from './img/DSC_9073.png';
import { Link } from 'react-router-dom';
import Mapa from "./components/Mapa";
import Formulario from "./components/Formulario";
import CardsDocs from "./components/CardsDocs";

const App = () => {
  return (
    <main>
      <Banner />
      <section className={styles.visitanos}>
        <p>En Complete Dental queremos brindarte la mejor atención dental de tu vida. Nuestro equipo cuenta con amplia experiencia, y está preparado para darte la mejor atención posible.</p>
        <h3>¡Visítanos y compruébalo!</h3>
      </section>
      <section className={styles.agenda}>
        <div className={styles.text}>
          <h2>¡Agenda tu visita!</h2>
          <p >Agendar tu cita es muy sencillo. Sigue los pasos del formulario, recibe la confirmación de la cita y ¡listo!
          </p>
          <p>Recuerda que también puedes solicitar una cita vía telefónica, o a través de nuestra página de <a href="https://www.facebook.com/completedentalmx" target={'_blank'}>Facebook</a>
          </p>
          <h4>¡Será un gusto atenderte!</h4>
        </div>
        <div className={styles.card}>
          <div className={styles.imagen}>
            <img src={doc} alt="" />
          </div>
          <div className={styles.textImg}>
            <div>
              <h2>¡Agenda tu cita!</h2>
              <p>Fácil y rápido</p>
            </div>
            <div>
              <Link className={'enlace'} to='/agenda'>Solicitar Consulta</Link>
            </div>
          </div>
        </div>
        <h3 className={styles.agendanos}>¿Agendaste una cita y deseas modificarla o cancelarla? <Link to={'/cancelacion'}> ¡Llena el siguiente formulario!</Link></h3>
      </section>
      <section className={styles.info}>
        <CardsDocs />
      </section>
      <Mapa />
      <Formulario />
    </main>
  )
}

export default App
