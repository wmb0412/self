import { StyleProvider } from '@ant-design/cssinjs'
import { RouterProvider } from 'react-router-dom';
import router from '@/routes'
function App() {
  
  return <StyleProvider hashPriority="high"><RouterProvider router={router} /></StyleProvider>
}

export default App
