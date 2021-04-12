import _ from 'lodash';
import React from 'react';
import { IMAGES_KIDS } from '../../constants/ImageConstants';

Connect.propTypes = {

};

function Connect() {

    const renderListImg = () => {
        const listImg = [
            IMAGES_KIDS.kid1,
            IMAGES_KIDS.kid2,
            IMAGES_KIDS.kid3,
            IMAGES_KIDS.kid4,
        ];

        return _.map(listImg, (item, index) => {
            return <div className="img-box" key={index}>
                <img src={item} alt="img-connect" key={index} />
            </div >;
        });
    };

    return (
        <section className="connect-box">
            <div className="title">
                <h1>For kids who enjoy themeselves</h1>
                <h4>Connect with us <span>@Playground</span></h4>
            </div>
            <div className="list-img">
                {renderListImg()}
            </div>
        </section>
    );
}

export default Connect;