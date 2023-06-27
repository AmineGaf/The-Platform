import React from 'react'
import { Picture } from '../assets'
import Button from './Button'

const Hero = () =>  (
    <section className=' flex flex-col mt-[100px] ml-[10px] md:ml-0 md:flex-row md:mt-[50px] justify-center items-center '>
     
      <div className='flex flex-col gap-4'>
        <p className='font-poppins text-title'>UI/UX design services</p>
        <h1 className='text-white font-poppins font-bold text-7xl max-w-[645px]'>
            Design a great <span className='text-heading'>experience </span> for your users
        </h1>
        <img src={Picture} alt="picture" className='md:hidden w-[80%] h-[70%] object-contain mt-10' />

        <p className='text-paragraph font-poppins max-w-[400px] '>We design and execute high-impact strategies
          that turn your prospects into customers
        </p>

        <Button title={"Learn more"} styles="w-[160px]"/>
      </div>
      <img src={Picture} alt="picture" className='hidden md:flex w-[50%] h-[50%] object-contain mt-10' />

    </section>
  )


export default Hero

