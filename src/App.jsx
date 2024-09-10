import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './components/Body'
import ContentContainer from './components/Content/ContentContainer'
import WatchPage from './components/Content/WatchPage'
import Header from './components/Header/Header'
import store from './utils/store'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Body />
      </>
    ),
    children: [
      {
        path: '/',
        element: <ContentContainer />,
      },
      {
        path: 'watch/:videoId',
        element: <WatchPage />,
      },
    ],
  },
])

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
