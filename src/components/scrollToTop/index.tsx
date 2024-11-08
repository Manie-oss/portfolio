'use client';
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa";
import './ScrollToTop.css'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false)

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return isVisible ? (
    <div className='scroll-top'>
      <a href='#top' aria-label='top'>
        <FaArrowUp className='h-6 w-6' />
      </a>
    </div>
  ) : null
}

export default ScrollToTop
