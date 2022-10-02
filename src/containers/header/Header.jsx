import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';


const Header = () => {
  return (
    <div className='gpt3__header section_padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Let's Build Somthing amazing with GPT-3 OpenAI
        </h1>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quo. Ipsam dignissimos porro, expedita nobis ut quae odit aut repudiandae deserunt aliquid ex, ad placeat nihil! Ea sunt quasi corporis!</p>
        </div>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder="Your Email Address"/>
          <button type="button">Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people'/>
          <p>1,600 people requested access a vist in last 24 hours</p>
        </div>
        
      </div>
      <div className='gpt3__header-image'>
          <img src={ai} alt="AI"/>
        </div>
    </div>
  )
}

export default Header;