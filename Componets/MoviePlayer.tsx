import './MoviePlayer.css';
import Landingid from "./Componet Files/Video/(Cyberpunk Edgerunners) David Martinez.mp4";

function HeroVid() {
    return (
        <div className="HeroContainer">
            
            <div className="Hero" id="video">
                <video autoPlay loop muted className="HeroVideo" id="MainVideo">
                    <source src={Landingid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="Hero-text">
                    <h1>Cyberpunk: Edgerunners</h1>
                    <p>
                        A story of a street kid trying to survive in a technology and body modification-obsessed city of the future.
                    </p>
                    <div className="HeroButtons">
                        <button className="HeroButton">Watch Now</button>
                        <button className="HeroButton">Add to Watchlist</button>
                    </div>
                </div>
                <div className="Scroll-Buttons">
                    <button className="scroll-left">&#10094;</button>
                    <button className="scroll-right">&#10095;</button>
                </div>
            </div>
        </div>
    );
}
export default HeroVid;
