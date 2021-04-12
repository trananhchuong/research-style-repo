import _ from 'lodash';
import React from 'react';
import { IMAGES_BACK_GROUND } from '../../constants/ImageConstants';
import About from './About';
import Card from './Card';
import Connect from './Connect';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import './styles/index.scss';
import Subscribe from './Subscribe';


function KidPlayGround(props: any) {

    const renderListCard = (): JSX.Element => {
        const dataFake = [
            {
                id: 1,
                title: 'Safe Rides',
                readMoreTitle: 'CC Certified',
                imgSrc: IMAGES_BACK_GROUND.img1
            },
            {
                id: 2,
                title: 'Delicious Food',
                readMoreTitle: 'Gluten Free',
                imgSrc: IMAGES_BACK_GROUND.img2
            },
            {
                id: 3,
                title: 'Entertainment',
                readMoreTitle: 'Suitable for kids',
                imgSrc: IMAGES_BACK_GROUND.img3
            },
            {
                id: 4,
                title: 'Ice-Cream',
                readMoreTitle: 'No Synthetic',
                imgSrc: IMAGES_BACK_GROUND.img4
            },

        ];

        return <div className="card-box">
            {
                _.map(dataFake, (item, index) => {
                    const cardProp = {
                        id: item.id || index,
                        title: item.title,
                        readMoreTitle: item.readMoreTitle,
                        imgSrc: item.imgSrc
                    };

                    return <Card {...cardProp} />;
                })
            }
        </div>;

    };

    return (
        <div className="wrapper">
            <div className="container">
                <Header />
                <Hero />
                {renderListCard()}
                <Connect/>
                <Subscribe />
                <About />
                <Footer />
            </div>
        </div>
    );
}

export default KidPlayGround;