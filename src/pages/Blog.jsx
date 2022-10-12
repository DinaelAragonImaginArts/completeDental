import BannerPequeño from '../components/BannerPequeño';
import img from '../img/DSC_8827.png';
import CardsDocs from '../components/CardsDocs';
import Formulario from '../components/Formulario';

const Blog = () => {
    return (
        <div>
            <div>
                <BannerPequeño img={img} texto={'¡Información para sonreír!'} />
            </div>
            <div className='blog'>
                <CardsDocs />
            </div>
            <div>
                <Formulario />
            </div>
        </div>
    )
}

export default Blog;
