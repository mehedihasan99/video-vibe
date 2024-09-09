import React from 'react'
import HeaderLeft from './HeaderLeft'
import SearchControls from './SearchControls'
import UserActions from './UserActions'

export default function Header() {
  return (
    <header className="flex justify-between items-center h-16 px-4 bg-white dark:bg-gray-900 shadow-md">
      <HeaderLeft />
      <SearchControls />
      <UserActions />
    </header>
  )
}
