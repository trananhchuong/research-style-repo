import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import './styles/index.scss';

KidPlayGround.propTypes = {

};

function KidPlayGround(props: any) {
    return (
        <div className="wrapper">
            <div className="container">
                <Header />
            </div>
        </div>
    );
}

export default KidPlayGround;