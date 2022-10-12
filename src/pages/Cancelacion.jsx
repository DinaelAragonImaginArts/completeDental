import styles from './css/agenda.module.css';
import Formulario from '../components/Formulario';

const Cancelacion = () => {
    return (
        <>
            <div className={styles.contenedor}>
                <h1 className={styles.title}>
                    Responde el formulario para agendar una cita.
                </h1>
                <form className={styles.formulario} >
                    <div className={styles.primerContenedor}>
                        <input type="text" placeholder='Nombre del paciente' />
                        <input type="email" placeholder='Email' />
                    </div>
                    <div className={styles.full}>
                        <input type="tel" placeholder='Teléfono' />
                    </div>
                    <div className={styles.servicio}>
                        <label htmlFor="servicio">Motivo de cancelación</label>
                        <textarea id='servicio' placeholder='Motivo de cancelación' rows="10"></textarea>
                    </div>
                    <div className={styles.select}>
                        <label htmlFor="select">¿Desea ser contactado para reagendar cita?</label>
                        <select name="select" id='select'>
                            <option value="si" selected>Sí, deseo ser contactado para reagendar</option>
                            <option value="no">No, no deseo reagendar</option>
                        </select>
                    </div>
                    <div className={styles.fecha}>
                        <input type="submit" className={`enlace`} />
                        <p>Una vez llenado el formulario, un miembro de nuestro equipo se comunicará a los medios de contacto proporcionados para confirmar su cita. Las fechas pueden presentar cambios con previo aviso.
                            También puede confirmar su cita llamando al  (664) 905 9721</p>
                            <p>Importante: La cita quedará registrada únicamente tras la confirmación de la misma.</p>
                    </div>
                </form>
            </div>
            <Formulario />
        </>
    )
}

export default Cancelacion