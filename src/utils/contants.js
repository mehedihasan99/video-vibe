const GOOGLE_API_KEY = 'AIzaSyDOT2kEbO6lVnjPTTm8j6NnzAdkhbi2nws'
const YOUTUBE_VIDEO_API =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=' +
  GOOGLE_API_KEY
export { YOUTUBE_VIDEO_API }
