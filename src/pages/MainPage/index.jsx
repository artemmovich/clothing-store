import React from 'react'
import { Button } from '../../components/Button'
import "./index.scss"
import mainImg from "../../assets/img/mainPageImg.png"

export const MainPage = () => {
   return (
      <section className='main-page'>
         <div className="container">
            <div className="main-page__wrapper">
               <div className="main-page__text">
                  <h1 className='main-page__title'>CREATE AND DISCOVER YOUR OWN FASHION</h1>
                  <h2 className='main-page__subtitle'>Explore your own fashion with our unique and curated collection of clothing</h2>
                  <div className="main-page__button">
                     <Button text={'EXPLORE NOW'} />
                  </div>
               </div>
               <img className="main-page__img" src={mainImg} alt="" />
            </div>
         </div>
      </section>
   )
}
