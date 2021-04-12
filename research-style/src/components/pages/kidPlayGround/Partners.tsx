import _ from 'lodash';
import React from 'react';
import { BRANDS } from '../../constants/ImageConstants';

Partners.propTypes = {

};

function Partners() {

    const renderListPartner = () => {

        const brandList = [
            BRANDS.brand1,
            BRANDS.brand2,
            BRANDS.brand3,
            BRANDS.brand4,
        ];

        return _.map(brandList, (item, index) => {
            return <div className="img-box" key={index}>
                <img src={item} alt="img-brand" />
            </div>;
        });
    };

    return (
        <section className="partners-box">
            <div className="title">
                <h3>Our business partners</h3>
            </div>
            <div className="list-partner-box">
                {renderListPartner()}
            </div>
        </section>
    );
}

export default Partners;