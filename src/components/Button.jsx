import React from 'react'

const Button = ({title,styles}) =>  (
    <button className={`py-[8px] px-[16px] text-white bg-button rounded font-poppins ${styles} hover:brightness-110`}>
        {title}
    </button>
  )


export default Button

