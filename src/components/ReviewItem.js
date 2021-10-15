import React from 'react';
import { Link } from 'react-router-dom';

function ReviewItem(props){
    return(
        <>
            <li className='cards__item'>
                <Link className='review__item__link' to={props.path}>
                    <img 
                    className="reviewer__img"
                    alt="reviewer image"
                    src={props.src}
                    />
                    <div className='review__stars'>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-half" aria-hidden="true"></i>
                    </div>
                    <div className='review__text'>{props.text}</div>
                    <br />
                    <div className='reviewer__name'>{props.name}</div>
                    <br />
                </Link>
            </li>
        </>
    )
}

export default ReviewItem;