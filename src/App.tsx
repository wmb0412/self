import { useState } from 'react'
import { StyleProvider } from '@ant-design/cssinjs'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from  '@pages/home'
import Login from '@pages/login'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
function App() {
  
  return <StyleProvider hashPriority="high"><RouterProvider router={router} /></StyleProvider>
}

export default App
