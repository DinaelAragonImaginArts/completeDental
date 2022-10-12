import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './css/accordion.module.css';

export default function AccordionDef() {
    return (
        <div className={styles.contenedor}>
            {/*Accordion 1*/}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={styles.parrafos}>¿Cómo puedo agendar una cita? / How can I book an appointment?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={styles.parrafos}>
                        Puedes escribirnos aquí, a través de nuestra página, o contactarnos al +52 664 905 9721, donde con mucho gusto podemos agendarte.
                        <br />
                        ---------------
                        <br />
                        You can write to us here, or contact us at +52 664 905 9721, where we can gladly schedule an appointment for you.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/*Accordion 2*/}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={styles.parrafos}>Qué métodos de pago tiene Complete Dental? / Which payment methods does Complete Dental take?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={styles.parrafos}>
                        Aceptamos pagos a través de tarjetas de débito y crédito VISA, Master Card y American Express, así como transferencias y pagos en efectivo.
                        <br />
                            ---------------
                        <br />
                        We accept payments through VISA, Master Card and American Express debit and credit cards, as well as bank transfers and cash payments.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/*Accordion 3*/}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={styles.parrafos}>¿Se acepta seguro dental de EEUU? / Do you accept US dental insurance?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={styles.parrafos}>
                        Para tu comodidad, aceptamos aseguranzas americanas PPO.
                        <br />
                            ---------------
                        <br />
                        For your convenience, we accept American PPO insurances.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/*Accordion 4*/}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={styles.parrafos}>¿Se puede facturar la consulta? / Can you issue invoices for a consultation?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={styles.parrafos}>
                        Todo tratamiento dental es 100% deducible en México y desde luego que facturamos.
                        <br />
                            ---------------
                        <br />
                        All dental treatment is 100% deductible in Mexico and of course we can provide you an invoice.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/*Accordion 5*/}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={styles.parrafos}>¿Cómo se puede llegar desde la frontera? / How do I get to your clinic from the border?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={styles.parrafos}>
                        Te invitamos a seguir este mapa para llegar a nuestra clínica.
                        <br />
                            ---------------
                        <br />
                        We invite you to follow this map to get to our clinic.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/*Accordion 6*/}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={styles.parrafos}>¿Qué tipo de certificaciones tiene la clínica? / What are the clinic’s certifications?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={styles.parrafos}>
                        Contamos con certificación en E-Max, y en el sistema BPS (Biphonetic system de Ivoclar)
                        <br />
                            ---------------
                        <br />
                        We are certified in E-Max, and in the BPS system (Ivoclar's Biphonetic system)
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/*Accordion 7*/}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={styles.parrafos}>¿Complete Dental otorga pase médico para cruzar la frontera? / Can Complete Dental issue border-crossing medical passes?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={styles.parrafos}>
                        Sí, podemos otorgarte un pase médico. Favor de solicitarlo durante tu cita.
                        <br />
                            ---------------
                        <br />
                        Yes, we can grant you a medical pass.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}