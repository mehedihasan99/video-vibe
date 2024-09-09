import React from 'react'
import ContentContainer from './Content/ContentContainer'
import Sidebar from './Sidebar/Sidebar'

export default function Body() {
  return (
    <div className="flex flex-wrap">
      <Sidebar />
      <ContentContainer />
    </div>
  )
}
