import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

export default function ContentContainer() {
  return (
    <div className="flex-1">
      <ButtonList />
      <VideoContainer />
    </div>
  )
}
