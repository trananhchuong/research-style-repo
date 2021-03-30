import React from 'react';
import PropTypes from 'prop-types';

Header.propTypes = {

};

function Header() {
    return (
        <section className="header">
            <div className="header__left">
                <h2><span className="text-yellow">Play</span>ground</h2>
            </div>
            <div className="header__right">
                <ul>
                    <li>
                        Events
                        <i className="fa fa-arrow-down" aria-hidden="true"></i>
                    </li>
                    <li>
                        Pricing
                    </li>
                    <li>
                        Blog
                    </li>
                    <li>
                        <button>Login</button>
                    </li>
                </ul>
            </div>

        </section>
    );
}

export default Header;