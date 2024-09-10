import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar'

export default function Body() {
  return (
    <div className="flex pt-20">
      <Sidebar />
      <Outlet />
    </div>
  )
}
