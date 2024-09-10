import React from 'react'
import Button from './Button'

export default function ButtonList() {
  const buttons = [
    'All',
    'React',
    'Vue',
    'Angular',
    'Node',
    'JavaScript',
    'Cricket',
    'Football',
    'Movies',
    'Songs',
    'Live',
  ]

  return (
    <div className="relative flex items-center w-full py-2">
      <div
        className="flex gap-2 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 w-full "
        aria-label="Scrollable button list"
      >
        {buttons.map((button, index) => (
          <Button key={index} label={button} />
        ))}
      </div>
    </div>
  )
}
