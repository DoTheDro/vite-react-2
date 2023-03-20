import { Link } from 'react-router-dom'
import appliancesPng from '../assets/images/appliances-image.png'
import wearablesPng from '../assets/images/wearables-image.png'
import iconFacebook from '../assets/images/icon-facebook.png'
import iconGmail from '../assets/images/icon-gmail.png'
import './home.css'

const Home = () => {

    return (
        <div className='home-container'>
            <title>Home</title>
        
            <section className="first-section">
                <div className="hero-section-content">
                    <h1 className="hero-section-header">Lorem Ipsum</h1>
                    <p className="hero-section-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus nesciunt repellendus porro praesentium facere voluptatum mollitia accusantium.</p>
                </div>
            </section>

            <section className="second-section">
                <div className="shop-by-wearables">
                    <h2 className="wearables-header">Shop by Wearables</h2>
                        <Link to="shop">
                            Go To Shop
                        </Link>
                </div>
                
                <div className="shop-by-appliances">
                    <h2 className="appliances-header">Shop by Appliances</h2>
                        <Link to="shop">
                            Go To Shop
                        </Link>
                </div>
            </section>

            <section className="third-section">
                <div className="third-left-col-container">
                    <h2 className="third-header">Lorem, ipsum dolor.</h2>
                    <p className="third-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatem iste dolorem sit dignissimos maiores?</p>
                </div>
                
                <div className="third-right-col-container">
                    <img src={appliancesPng} alt='appliance image' />
                </div>
            </section>

            <section className="fourth-section">
                <div className="fourth-left-col-container">
                    <img src={wearablesPng} alt='wearable image' />
                </div>

                <div className="fourth-right-col-container">
                    <h2 className="fourth-header">Lorem, ipsum dolor.</h2>
                    <p className="fourth-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatem iste dolorem sit dignissimos maiores?</p>
                </div>
            </section>
            
            <section className="fifth-section">
                <h2 className="fifth-header">Get In Touch With US</h2>
                <div className="icon-container">
                    <img src={iconFacebook} alt="facebook icon" />
                    <img src={iconGmail} alt="gmail icon" />
                </div>
            </section>
        </div>
    )
}

export default Home