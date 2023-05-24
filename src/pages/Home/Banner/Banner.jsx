import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from '../../../assets/home/01.jpg';
import img2 from '../../../assets/home/02.jpg';
import img3 from '../../../assets/home/03.png';
import img4 from '../../../assets/home/04.jpg';
import img5 from '../../../assets/home/05.png';
import img6 from '../../../assets/home/06.png';

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} alt='banner1' />

            </div>
            <div>
                <img src={img2} alt='banner2' />

            </div>
            <div>
                <img src={img3} alt='banner3' />

            </div>
            <div>
                <img src={img4} alt='banner4' />

            </div>
            <div>
                <img src={img5} alt='banner5' />

            </div>
            <div>
                <img src={img6} alt='banner6' />

            </div>
        </Carousel>
    );
};

export default Banner;