import React from 'react'
import ButtonList from './ButtonList'
import VideoCart from './VideoCart'

export default function ContentContainer() {
  return (
    <div className="flex-1 bg-red-300">
      <ButtonList />
      <VideoCart />
    </div>
  )
}
