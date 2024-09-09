import React from 'react'
import { useSelector } from 'react-redux'
import exploreIcon from '../../assets/icon/explore.svg'
import homeIcon from '../../assets/icon/home.svg'
import library from '../../assets/icon/library.svg'
import subscribeIcon from '../../assets/icon/subscriptions.svg'
import musicIcon from '../../assets/icon/youtube-music.svg'
export default function Sidebar() {
  const isExpanded = useSelector((store) => store.sidebar.isExpended)
  console.log(isExpanded)
  return (
    <aside className={`${isExpanded ? 'w-24 h-screen' : 'w-44 h-screen'}`}>
      {/* Main Navigation */}
      <div className="py-3 px-3">
        <ul className="space-y-2">
          <li className=" text-gray-600 rounded hover:bg-gray-200 p-2">
            <a
              className={`${
                isExpanded
                  ? 'flex flex-col justify-center items-center '
                  : 'flex'
              } items-center `}
              href="#"
            >
              <img className="w-8" src={homeIcon} />
              <p className={`${isExpanded ? 'ml-0 text-xs' : 'ml-3 text-sm'}`}>
                Home
              </p>
            </a>
          </li>
          <li className=" text-gray-600 rounded hover:bg-gray-200 p-2">
            <a
              className={`${
                isExpanded
                  ? 'flex flex-col justify-center items-center'
                  : 'flex'
              } items-center `}
              href="#"
            >
              <img className="w-8" src={exploreIcon} />
              <p className={`${isExpanded ? 'ml-0 text-xs' : 'ml-3 text-sm'}`}>
                Explore
              </p>
            </a>
          </li>
          <li className=" text-gray-600 rounded hover:bg-gray-200 p-2">
            <a
              className={`${
                isExpanded
                  ? 'flex flex-col justify-center items-center'
                  : 'flex'
              } items-center `}
              href="#"
            >
              <img className="w-8" src={subscribeIcon} />
              <p className={`${isExpanded ? 'ml-0 text-xs' : 'ml-3 text-sm'}`}>
                Subscriptions
              </p>
            </a>
          </li>
        </ul>
      </div>

      {/* Divider */}
      <hr className="border-gray-400 " />

      {/* Library and History */}
      <div className="py-4 px-4">
        <ul className="space-y-2">
          <li className="text-gray-600 rounded hover:bg-gray-200 p-2">
            <a
              className={`${
                isExpanded
                  ? 'flex flex-col justify-center items-center'
                  : 'flex'
              } items-center`}
              href="#"
            >
              <img className="w-8" src={library} />
              <p className={`${isExpanded ? 'ml-0 text-xs' : 'ml-3 text-sm'}`}>
                Library
              </p>
            </a>
          </li>
          <li className="text-gray-600 rounded hover:bg-gray-200 p-2">
            <a
              className={`${
                isExpanded
                  ? 'flex flex-col justify-center items-center'
                  : 'flex'
              } items-center `}
              href="#"
            >
              <img className="w-8" src={musicIcon} />
              <p className={`${isExpanded ? 'ml-0 text-xs' : 'ml-3 text-sm'}`}>
                Music
              </p>
            </a>
          </li>
        </ul>
      </div>

      {/* Divider */}
      <hr className="border-gray-700" />
    </aside>
  )
}
