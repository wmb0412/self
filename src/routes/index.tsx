import { lazy } from 'react'
import { createBrowserRouter } from "react-router-dom"
import baseRouter from './baseRoutes'

const Login = lazy(() => import('@pages/login'))
const BaseLayout = lazy(() => import('@/layouts/BaseLayout'))

const router = createBrowserRouter([
    {
      path: "/",
      element: <BaseLayout />,
      children: baseRouter
    },
    {
      path: "/login",
      element: <Login />,
    },
  ])
export default router