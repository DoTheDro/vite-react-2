import './home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <section className="first-section">
                <div className="hero-section-content">
                    <h1 className="hero-section-header">Lorem Ipsum</h1>
                    <p className="hero-section-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus nesciunt repellendus porro praesentium facere voluptatum mollitia accusantium.</p>
                </div>
            </section>

            <section className="second-section">
                <div className="shop-by-wearables">
                    <h2 className="wearables-header">Shop by Wearables</h2>
                </div>
                
                <div className="shop-by-appliances">
                    <h2 className="appliances-header">Shop by Appliances</h2>
                </div>
            </section>
        </div>
    )
}

export default Home