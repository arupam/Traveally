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
              src='https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
              text='Atlantis The Palm'
              // label='Adventure'
              path='/services'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1543007631-283050bb3e8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
              text='The Back Room'
              // label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1526069631228-723c945bea6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
              text='Coke Studio'
              // label='Mystery'
              path='/services'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
              text='El Pablo'
              // label='Adventure'
              path='/products'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1416397202228-6b2eb5b3bb26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80'
              text='Kufri'
              // label='Adrenaline'
              path='/sign-up'
            />
          </ul>
          <br/> <hr /> <br/> <br/> <br/>
          <h1 id="light-font">Testimonials</h1>
          <h1 id="dark-font">Look what our users say!</h1>
          <br/>
          <ul className='cards__items'>
            <ReviewItem
            src='/images/user1.jpg'
            path='/#'
            text='"I think this is the best traveler service I have ever tried and I recommend it to you"'
            name='Jenny Wilson'
            />
            <ReviewItem
            src='/images/user2.jpg'
            path='/#'
            text='"Thanks to TravAlly I can now realize my dream of traveling around the world"'
            name='Sarah Williams'
            />
            <ReviewItem
            src='/images/user3.jpg'
            path='/#'
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
