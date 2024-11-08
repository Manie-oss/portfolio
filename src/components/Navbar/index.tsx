'use client';
import { useState } from 'react';
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { projects, experience,  skills, contact } from '../../utils/portfolio';
import { useThemeContext } from '../../contexts/Theme';
import './Navbar.css';

const Navbar = () => {
  const {themeName, toggleTheme } = useThemeContext();
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center nav'>
      <ul
        style={showNavList ? ({display: 'flex'}) : ({})}
        className='nav__list'
      >
        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Projects
            </a>
          </li>
        ) : null}

        {experience.length ? (
          <li className='nav__list-item'>
            <a
              href='#experience'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Experience
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <MdSunny className='h-6 w-6 text-amber-500' /> : <FaMoon className='h-4 w-4' />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <IoMdClose className='h-6 w-6' /> : <IoMenu className='h-6 w-6' />}
      </button>
    </nav>
  )
}

export default Navbar
