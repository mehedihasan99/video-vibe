import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { close } from '../../utils/sidebarSlice'

export default function WatchPage() {
  let { videoId } = useParams()
  const videoUrl = `https://www.youtube.com/embed/${videoId}`
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(close(true))
  }, [])
  return (
    <div className="px-8 mt-5 rounded-md">
      <iframe
        className="rounded-md"
        width="800"
        height="400"
        src={videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  )
}
