import React from 'react';
import PropTypes from 'prop-types';

interface IProp {
    id: number;
    title: string;
    readMoreTitle: string,
    imgSrc: string
}

function Card(props: IProp) {
    return (
        <div className="card">
            <div className="card__img-box">
                <img src={props.imgSrc} alt="img card" />
            </div>
            <div className="card__content">
                <div className="card__content--title">
                    {props.title}
                </div>
                <div className="card__content--read-more">
                    {props.readMoreTitle} <i className="fa fa-arrow-right" aria-hidden="true" />
                </div>
            </div>
        </div>
    );
}

export default Card;