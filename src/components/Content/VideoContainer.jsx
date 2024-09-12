import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

import { Link } from 'react-router-dom'
import { YOUTUBE_VIDEO_API_TWO } from '../../utils/contants'
import Loading from '../Loading'
import VideoCart from './VideoCart'

// Fetch videos from the YouTube API
const retrievedVideos = async () => {
  const response = await axios.get(YOUTUBE_VIDEO_API_TWO)
  return response.data.items
}

export default function VideoContainer() {
  // Fetch video data using react-query
  const {
    data: videos,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['videos'],
    queryFn: retrievedVideos,
  })

  // Handle loading state
  if (isLoading) return <Loading />

  // Handle error state
  if (isError)
    return (
      <div className="text-center text-red-500">Error: {error.message}</div>
    )

  // Render videos in a responsive grid
  return (
    <div className="container mx-auto p-4 ">
      <div className="grid gap-4 grid-cols-2 justify-items-center sm:grid-cols-3 xl:grid-cols-4">
        {videos.map((video) => (
          <Link key={video.id} to={`/watch/${video.id}`}>
            <VideoCart video={video} />
          </Link>
        ))}
      </div>
    </div>
  )
}
