export default function Home(){
    return(
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new exercises</h2>
                <h3>Calistenix</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Difficulties in Calisthenics</h1>
                <div className="game">
                    <div className="image-wrap">
                        <img src="./images/PushUp.png" />
                    </div>
                    <h3>Beginner</h3>
                    <div className="rating">
                        <span>☆</span>
                    </div>
                </div>
                <div className="game">
                    <div className="image-wrap">
                        <img src="./images/PullUp.png" />
                    </div>
                    <h3>Intermediate</h3>
                    <div className="rating">
                        <span>☆</span><span>☆</span><span>☆</span>
                    </div>
                </div>
                <div className="game">
                    <div className="image-wrap">
                        <img src="./images/Handstand.png" />
                    </div>
                    <h3>expert</h3>
                    <div className="rating">
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                </div>
            </div>
        </section>
    )
}