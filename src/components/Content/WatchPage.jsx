import React from 'react'
import { useParams } from 'react-router-dom'

export default function WatchPage() {
  let { videoId } = useParams()

  const videoUrl = `https://www.youtube.com/embed/${videoId}`

  return (
    <div className="p-3">
      <iframe
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
