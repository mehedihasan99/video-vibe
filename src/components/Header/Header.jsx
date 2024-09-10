import React from 'react'
import HeaderLeft from './HeaderLeft'
import SearchControls from './SearchControls'
import UserActions from './UserActions'

export default function Header() {
  return (
    <header className="flex justify-between items-center h-16 px-6 bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 right-0 ">
      <HeaderLeft />
      <SearchControls />
      <UserActions />
    </header>
  )
}
