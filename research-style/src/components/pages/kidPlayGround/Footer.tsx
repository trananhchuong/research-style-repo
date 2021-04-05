import React from 'react';
import PropTypes from 'prop-types';

Footer.propTypes = {

};

function Footer(props: any) {
    return (
        <section className="footer-box">
            <div className="footer-left">
                <ul>
                    <li>Privacy policy</li>
                    <li>Terms of service</li>
                </ul>
            </div>
            <div className="footer-right">
                @2021 Playground. All rights reserved
            </div>
        </section>
    );
}

export default Footer;