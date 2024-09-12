const GOOGLE_API_KEY = 'AIzaSyDRDAvpI9JE7aDl1AuUA-oSWqRFnLPLkws'
const YOUTUBE_VIDEO_API =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=' +
  GOOGLE_API_KEY

const YOUTUBE_VIDEO_API_TWO = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${GOOGLE_API_KEY}`

export function getVideoDetails(videoId) {
  return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${GOOGLE_API_KEY}`
}

export { GOOGLE_API_KEY, YOUTUBE_VIDEO_API_TWO }
