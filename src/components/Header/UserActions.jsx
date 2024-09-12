import React from 'react'
import notificationIcon from '../../assets/icon/notifications.svg'
import uploadIcon from '../../assets/icon/upload.svg'
import userIcon from '../../assets/icon/user-pro.svg'
export default function UserActions() {
  return (
    <div className="flex items-center space-x-2 lg:space-x-4">
      <button
        aria-label="Upload"
        className="focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-full transition duration-200 ease-in-out"
      >
        <img className="w-6 h-6 md:w-8 md:h-8" src={uploadIcon} alt="Upload" />
      </button>
      <button
        aria-label="Notifications"
        className="focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-full transition duration-200 ease-in-out"
      >
        <img
          className="w-6 h-6 md:w-8 md:h-8"
          src={notificationIcon}
          alt="Notifications"
        />
      </button>
      <img
        className="w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer"
        src={userIcon}
        alt="User Profile"
      />
    </div>
  )
}
