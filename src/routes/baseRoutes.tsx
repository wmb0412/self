import { lazy } from 'react'

const Home = lazy(() => import('@pages/home'))
const User = lazy(() => import('@pages/user'))
const Sheet = lazy(() =>import('@pages/sheet'))
const Page404 = lazy(() =>import('@pages/page404'))
const Suspense = lazy(() =>import('@pages/suspense'))


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
      path: "/sheet",
      title: 'sheet',
      element: <Sheet />
  },
  {
    path: "/suspense",
    title: 'keepAlive(suspense)',
    element: <Suspense />
},
  {
    path: "*",
    element: <Page404 />
}
]
export default baseRouter