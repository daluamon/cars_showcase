"use client";

import Image from 'next/image'
import { CustomButton} from '@/components'

const Hero = () => {

  const handleScroll = () => {
    window.scrollTo({
      top: 500,
      behavior: 'smooth'
    })
  }

  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          Compre o seu carro novo ou usado, rápido e sem burocracia.
        </h1>

        <p className="hero__subtitle">
          Ajudamos você a encontrar o carro ideal para você.
        </p>

        <CustomButton
          title={'Ver carros disponíveis'}
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src="/hero.png" alt="hero" fill className='object-contain'/>
          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  )
}

export default Hero