import React from 'react';
import PropTypes from 'prop-types';

Hero.propTypes = {

};

function Hero() {
    return (
        <section className="hero">
            <div className="hero__logo">
                <h1>The Kids playground</h1>
            </div>
            <div className="hero__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit.
            </div>
            <div className="hero__btn">
                <button>Explore</button>
                <button className="bg-yellow">Buy Tickets</button>
            </div>
        </section>
    );
}

export default Hero;