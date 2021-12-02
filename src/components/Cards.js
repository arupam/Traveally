import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import ReviewItem from './ReviewItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these places!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
          <br/> <hr /> <br/>
          <ul className='cards__items'>
            <ReviewItem
            src='/images/user1.jpg'
            path='/sign-up'
            text='"I think this is the best traveler service I have ever tried and I recommend it to you"'
            name='Jenny Wilson'
            />
            <ReviewItem
            src='/images/user2.jpg'
            path='/sign-up'
            text='"Thanks to TravAlly I can now realize my dream of traveling around the world"'
            name='Sarah Williams'
            />
            <ReviewItem
            src='/images/user3.jpg'
            path='/sign-up'
            text='"TravAlly helps me a lot in finding interesting tourist destinations"'
            name='Scott Carter'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
