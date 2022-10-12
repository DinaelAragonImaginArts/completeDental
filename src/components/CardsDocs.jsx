import { Link } from 'react-router-dom';
import styles from '../css/app.module.css';
import { posts } from './posts';

const CardsDocs = () => {
    return (
        <>
            <h3>Información para ti</h3>
            <div className={styles.cartas_blog}>
                {posts?.map(post => (
                    <Link to={`/blog/${post.id}`} key={post.id}>
                        <div className={styles.cardBlog}>
                            <div className={styles.img}>
                                <img src={post.img} alt="imagen entrada de blog 1" />
                            </div>
                            <div className={styles.texto_card}>
                                <h4>{post.titulo}</h4>
                                <p>{post.texto}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default CardsDocs
