import styles from './css/agenda.module.css';
import Formulario from '../components/Formulario';

const Agenda = () => {
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
                        <label htmlFor="servicio">¿Qué servicio desea?</label>
                        <textarea id='servicio' placeholder='Detalles de caso / ¿Qué servicio desea? ' rows="10"></textarea>
                    </div>
                    <div className={styles.select}>
                        <label htmlFor="select">¿Es el paciente menor de edad?</label>
                        <select name="select" id='select'>
                            <option value="si" selected>Sí, un paciente es menor de edad</option>
                            <option value="no">No, no hay paciente menor de edad</option>
                        </select>
                    </div>
                    <div className={styles.fecha}>
                        <label htmlFor="fecha">Fecha/Hora</label>
                        <div className={styles.inputFechas}>
                            <input type="date" id='fecha' />
                            <select>
                                <option value="09:00" selected>09:00</option>
                                <option value="09:30">09:30</option>
                                <option value="10:00">10:00</option>
                                <option value="10:30">10:30</option>
                                <option value="11:00">11:00</option>
                                <option value="11:30">11:30</option>
                                <option value="12:00">12:00</option>
                                <option value="12:30">12:30</option>
                                <option value="13:00">13:00</option>
                                <option value="13:30">13:30</option>
                                <option value="14:00">14:00</option>
                                <option value="14:30">14:30</option>
                                <option value="15:00">15:00</option>
                                <option value="15:30">15:30</option>
                                <option value="16:00">16:00</option>
                                <option value="16:30">16:30</option>
                                <option value="17:00">17:00</option>
                                <option value="17:30">17:30</option>
                                <option value="18:00">18:00</option>
                                <option value="18:30">18:30</option>
                                <option value="19:00">19:00</option>
                            </select>
                        </div>
                        <input type="submit" className={`enlace`} />
                    </div>
                </form>
            </div>
            <Formulario />
        </>
    )
}

export default Agenda
