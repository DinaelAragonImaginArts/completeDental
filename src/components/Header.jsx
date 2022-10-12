import { Link } from 'react-router-dom';
import styles from './css/Header.module.css';
import logo from '../img/COMPLETE_DENTAL_PNG.png';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img src={logo} alt="logo complete dental" />
      </Link>
      <nav className={styles.navegacion}>
        <Link to={'/'}>Inicio</Link>
        <Link to={'/nosotros'}>Nosotros</Link>
        <Link to={'/servicios'}>Servicio</Link>
        <Link to={'/faq'}>Faqs</Link>
        <Link to={'/blog'}>Blog</Link>
        <Link to={'/contacto'}>Contacto</Link>
      </nav>
      <div className={styles.redes}>
      <Link to={'/'}>
        <div>
          <svg preserveAspectRatio="xMidYMid meet" data-bbox="104.64 72.31 90.72 155.39" viewBox="104.64 72.31 90.72 155.39" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true"><defs></defs>
            <g>
              <switch>
                <g>
                  <path d="M146.89 107.47c4.03 0 7.29-3.27 7.29-7.29 0-7.33 5.97-13.29 13.29-13.29h20.6c4.03 0 7.29-3.27 7.29-7.29 0-4.03-3.27-7.29-7.29-7.29h-20.6c-15.37 0-27.88 12.51-27.88 27.88a7.304 7.304 0 0 0 7.3 7.28zm0 0" fill="#fff" data-color="1"></path>
                  <path d="M186.51 130.28h-74.58c-4.03 0-7.29 3.26-7.29 7.29s3.27 7.29 7.29 7.29h27.68v75.55c0 4.03 3.26 7.29 7.29 7.29s7.29-3.27 7.29-7.29v-75.55h32.32c4.03 0 7.29-3.27 7.29-7.29 0-4.03-3.26-7.29-7.29-7.29zm0 0" fill="#fff" data-color="1"></path>
                </g>
              </switch>
            </g>
          </svg>
        </div>
        </Link>
        <Link to={'/'}>
          <div className={styles.red}>
            <svg preserveAspectRatio="xMidYMid meet" data-bbox="67.81 67.81 164.38 164.39" viewBox="67.81 67.81 164.38 164.39" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true"><defs></defs>
              <g>
                <switch>
                  <g>
                    <path d="M186.83 67.81h-73.66c-25.02 0-45.36 20.35-45.36 45.37v73.66c0 25.02 20.35 45.36 45.36 45.36h73.66c25.02 0 45.36-20.35 45.36-45.36v-73.66c0-25.02-20.35-45.37-45.36-45.37zm30.78 119.02c0 16.97-13.81 30.78-30.78 30.78h-73.66c-16.97 0-30.78-13.81-30.78-30.78v-73.66c0-16.97 13.81-30.78 30.78-30.78h73.66c16.97 0 30.78 13.81 30.78 30.78v73.66zm0 0" fill="#fff" data-color="1"></path>
                    <path d="M150 107.65c-23.36 0-42.36 19-42.36 42.35 0 23.36 19 42.36 42.36 42.36 23.35 0 42.36-19 42.36-42.36 0-23.35-19.01-42.35-42.36-42.35zm0 70.12c-15.31 0-27.77-12.45-27.77-27.77 0-15.31 12.46-27.77 27.77-27.77s27.77 12.46 27.77 27.77c0 15.32-12.46 27.77-27.77 27.77zm0 0" fill="#fff" data-color="1"></path>
                    <path d="M194.14 95.28c-2.81 0-5.57 1.14-7.55 3.13-2 1.98-3.14 4.75-3.14 7.57 0 2.81 1.15 5.57 3.14 7.56 1.98 1.98 4.74 3.13 7.55 3.13 2.82 0 5.57-1.14 7.56-3.13a10.79 10.79 0 0 0 3.13-7.56c0-2.82-1.14-5.58-3.13-7.57-1.99-2-4.74-3.13-7.56-3.13zm0 0" fill="#fff" data-color="1"></path>
                  </g>
                </switch>
              </g>
            </svg>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header