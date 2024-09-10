import React from 'react'

export default function SearchControls() {
  return (
    <div className="flex items-center flex-1 justify-center max-w-full md:max-w-2xl px-4 relative">
      <input
        type="text"
        className="w-full rounded-l-full border border-gray-300 dark:border-gray-600 p-2 h-10 pl-10 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-200 ease-in-out"
        placeholder="Search"
        aria-label="Search"
      />
      <button
        className="h-10 bg-gray-200 rounded-r-full px-4 py-2 border border-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-200 ease-in-out"
        aria-label="Search Button"
      >
        <img
          className="w-6 h-6"
          src="/src/assets/icon/search.svg"
          alt="Search"
        />
      </button>
      <button
        className="ml-2 p-2 bg-gray-200 h-10 dark:bg-gray-800 rounded-full hidden lg:inline-flex hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-200 ease-in-out"
        aria-label="Voice Search"
      >
        <img
          className="w-6 h-6"
          src="/src/assets/icon/voice-search-icon.svg"
          alt="Voice Search"
        />
      </button>
    </div>
  )
}
