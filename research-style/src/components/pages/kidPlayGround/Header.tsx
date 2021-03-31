import React from 'react';

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
                    <li className="header__right--icon">
                        Events
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
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