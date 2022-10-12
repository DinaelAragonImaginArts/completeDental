import { Link } from 'react-router-dom';
import styles from './css/footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>© 2021 Tijuana, B.C. México.  / <Link to={'/aviso'} className={styles.linker}> Aviso de Privacidad</Link></p>
        </div>
    )
}

export default Footer
