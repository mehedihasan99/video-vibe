import React from 'react'

export default function VideoCart({ video }) {
  if (!video) return null

  const {
    snippet: {
      channelTitle = 'Unknown Channel',
      localized = {},
      thumbnails = {},
    } = {},
    statistics: { viewCount = '0' } = {},
  } = video

  const title = localized.title || 'No Title Available'
  const thumbnailUrl =
    thumbnails.standard?.url || 'https://via.placeholder.com/640x360' // Fallback thumbnail

  return (
    <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        src={thumbnailUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mt-2">{channelTitle}</p>
        <p className="text-sm text-gray-500 mt-1">
          {Number(viewCount).toLocaleString()} views
        </p>
      </div>
    </div>
  )
}
