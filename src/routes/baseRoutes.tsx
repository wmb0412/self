import { lazy } from 'react'

const Home = lazy(() => import('@pages/home'))
const User = lazy(() => import('@pages/user'))
const Page404 = lazy(() =>import('@pages/page404'))


const baseRouter = [
  {
      path: '/',
      title: '首页',
      element: <Home />,
      
  },
  {
      path: '/user',
      title: '用户',
      element: <User />
  },
  {
      path: "*",
      element: <Page404 />
  }
]
export default baseRouter