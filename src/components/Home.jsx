import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="text-center my-3">
            <h3>
                Mira los streamers de tus series favoritas que están en directo
                💻
            </h3>
            <p className="mt-3">Pincha en la imagen de la serie en la que quieres ver los streamers en directo</p>
            <div className="d-flex justify-content-center mt-3 gap-3">
              <Link to="/tortillaland" > 
                <img src={`${process.env.PUBLIC_URL}/images/tortillaland.png`} alt="Twitch" className="img-fluid img-serie" />
              </Link>
              <Link to="/karmaland" > 
                <img src={`${process.env.PUBLIC_URL}/images/karmaland-5.webp`} alt="Twitch" className="img-fluid img-serie" />
              </Link>
            </div>
        </div>
    );
};

export default Home;
