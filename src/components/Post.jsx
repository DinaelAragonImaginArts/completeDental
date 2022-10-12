import { useLocation } from "react-router-dom"
import { posts } from './posts';
import { useEffect, useState } from 'react';
import styles from './css/post.module.css';

const Post = () => {
    const location = useLocation();
    const id = location.pathname[6];
    const [post, setPost] = useState([]);
    useEffect(() => {
        getPost(parseInt(id));
    }, [id])
    const getPost = (id) => {
        setPost(posts.find(x => x.id === id));
    }

    return (
        <>
            <div className={styles.postContent}>
                <h2>{post.titulo}</h2>
                <p>{post.texto}</p>
                <img src={post.img} />
            </div>
        </>
    )
}

export default Post