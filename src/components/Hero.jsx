import React from 'react'
import styles from '../styles'
import { discount, robot } from '../assets' 

const Hero = () => (
  <section id = "home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px16 px6`}>
      <div className="flex flex-row items-center py-[6px] px=4 bg-discount-gradient rounded[10px] mb-2">
        <img src={discount} alt="discount" className='w-[32px] h-[32px]'/>
        <span className="text-white">20%</span>
        Discount for {" "}
        <span className='text-white'>1 Month</span>
        Account
      </div>

    </div>
  </section>
)

export default Hero