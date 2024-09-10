// Button.js
import React from 'react'

export default function Button({ label }) {
  return (
    <button
      className="
        whitespace-nowrap
        px-4 py-1
        bg-gray-200 dark:bg-gray-800
        text-gray-700 dark:text-gray-300
        rounded-lg
        hover:bg-gray-200 dark:hover:bg-gray-700
        focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600
        transition ease-in-out duration-200
        text-sm md:text-base
        font-semibold
      "
      aria-label={`Filter by ${label}`}
    >
      {label}
    </button>
  )
}
