import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import PaymentAndPlans from './pages/PaymentAndPlans.jsx'
import ContactPage from './pages/ContactPage.jsx'
import FaqPage from './pages/FaqPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import BlogDetails from './pages/BlogDetails.jsx'
import Newsletter from './pages/Newsletter.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children : [
      {
        index: true,
        element : <HomePage/>
      },
      {
        path : "/payment-and-plans",
        element : <PaymentAndPlans/>
      },
      {
        path : "/contact",
        element : <ContactPage/>
      },
      {
        path : "faq",
        element : <FaqPage/>
      },
      {
        path : "about",
        element : <AboutPage/>
      },
      {
        path : "blogs",
        element : <BlogPage/>
      },
      {
        path : "blog/:id",
        element : <BlogDetails/>
      },
      {
        path : "newsletter",
        element : <Newsletter/>
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
