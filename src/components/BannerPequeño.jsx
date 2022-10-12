import styles from './css/BannerPequeño.module.css';

const BannerPequeño = ({ img, texto }) => {
    return (
        <div className={styles.banner}
            style={
                {
                    background: `linear-gradient(200deg, rgb(255 255 255 / .4), rgb(255 255 255 / .4)),url(${img})`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                }
            }>
            <p>{texto}</p>
        </div>
    )
}

export default BannerPequeño
