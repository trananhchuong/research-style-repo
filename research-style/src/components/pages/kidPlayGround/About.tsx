import React from 'react';
import PropTypes from 'prop-types';

About.propTypes = {

};

function About() {
    return (
        <section className="about-box">
            <ul className="about">
                <li className="about__item">
                    <h2><span className="text-yellow">Play</span>ground</h2>
                </li>
                <li className="about__item">
                    <ul>
                        <li>Events for Kids</li>
                        <li>Events for Parents</li>
                        <li>Events for Guests</li>
                        <li>Game and Gifts</li>
                    </ul>
                </li>
                <li className="about__item">
                    <ul>
                        <li>Events</li>
                        <li>Who We Are</li>
                        <li>Services</li>
                        <li>Features</li>
                        <li>Reviews</li>
                    </ul>
                </li>
                <li className="about__item">
                    <ul>
                        <li>Careers</li>
                        <li>Press</li>
                        <li>Help</li>
                    </ul>
                </li>
            </ul>
        </section>
    );
}

export default About;