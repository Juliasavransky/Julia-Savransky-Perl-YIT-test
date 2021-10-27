import React from 'react';
import data from '../utils/data.json';

const Card = ({
    category,
    selectedColor
}) => {

    return (
        <div className="card">
            <div className="componenta">
                <img className="imgArea" />
                <div className="container">
                    <div className="category">
                        <span style={{ backgroundColor: selectedColor }}>
                            {category}
                        </span>
                    </div>
                    <div className="title">  {data[0].title}</div>
                    <div className="subTitle"> {data[0].subTitle}</div>
                    <div className="author">{data[0].author}</div>
                </div>
            </div>
        </div>
    )
}

export default Card;
