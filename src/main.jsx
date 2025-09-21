import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router'
import AllDogsPage from './pages/AllDogsPage.jsx'
import AllOwnersPage from './pages/AllOwnersPage.jsx'
import AllActivitiesPage from './pages/AllActivitiesPage.jsx'
import StartPage from './pages/StartPage.jsx'


const router = createHashRouter([
  {
    path: "/",
    Component: App,
    children: [
      {index: true, Component: StartPage},
      {path: "/all-dogs", Component: AllDogsPage},
      {path: "/all-owners", Component: AllOwnersPage},
      {path: "/all-activities", Component: AllActivitiesPage}
    ]
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
