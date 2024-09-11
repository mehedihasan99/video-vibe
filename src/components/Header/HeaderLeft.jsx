import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import hamburgerIcon from '../../assets/icon/hamburger-menu.svg'
import youtubeIcon from '../../assets/icon/youtube-logo.svg'
import { close, toggle } from '../../utils/sidebarSlice'
export default function HeaderLeft() {
  const dispatch = useDispatch()

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => {
          dispatch(toggle())
          dispatch(close(false))
        }}
        aria-label="Open Menu"
        className="focus:outline-none p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-200"
      >
        <img className="w-6 h-6" src={hamburgerIcon} alt="Menu" />
      </button>
      <Link to="/">
        <img
          className="h-6 cursor-pointer"
          src={youtubeIcon}
          alt="YouTube Logo"
        />
      </Link>
    </div>
  )
}
