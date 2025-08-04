import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store/store.ts'

const routes=createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>,
)
