import styles from './css/faq.module.css';
import background from '../img/DSC_9010.png';
import AccordionDef from '../components/Accordion'; 
import Formulario from '../components/Formulario';
import BannerPequeño from '../components/BannerPequeño';

const Faq = () => {
    return (
        <div>
          <BannerPequeño img={background} texto={'Preguntas Frecuentes'} />
            <div className={styles.accordionContainer}>
                <h3>Preguntas Frecuentes</h3>
                <div>
                    <AccordionDef />
                </div>
            </div>
            <Formulario />
        </div>
    )
}

export default Faq