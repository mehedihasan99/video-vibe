import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar'

export default function Body() {
  return (
    <div className="flex pt-6">
      <Sidebar />
      <Outlet />
    </div>
  )
}
