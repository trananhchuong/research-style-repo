import React from 'react';
import PropTypes from 'prop-types';

Subscribe.propTypes = {

};

function Subscribe() {
    return (
        <section className="subscribe-box">
            <div className="subscribe__left">
                <h2>
                    Subscribe to our newsletter to get future offers
                </h2>
            </div>
            <div className="subscribe__right">
                <div className="form-subscribe">
                    <input
                        type="text"
                        id="Email"
                        name="Email"
                        placeholder="Enter your email"
                        required />
                    <label htmlFor="Email">Subscribe</label>
                </div>
                <div className="social">
                    <ul>
                        <li>
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </li>
                        <li>
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </li>
                        <li>
                            <i className="fa fa-pinterest" aria-hidden="true"></i>
                        </li>
                        <li>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </li>
                        <li>
                            <i className="fa fa-youtube-play" aria-hidden="true"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Subscribe;