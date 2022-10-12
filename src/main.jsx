import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';

/*Pages*/
import Nosotros from './pages/Nosotros';
import Servicio from './pages/Servicio';
import Faq from './pages/Faq';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';
import Agenda from './pages/Agenda';
import Cancelacion from './pages/Cancelacion';
import Aviso from './pages/Aviso';
import Post from './components/Post';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />
      }
    ]
  },
  {
    path: '/nosotros',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Nosotros />
      }
    ]
  },
  {
    path: '/servicios',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Servicio />
      }
    ]
  },
  {
    path: '/faq',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Faq />
      }
    ]
  },
  {
    path: '/blog',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Blog />
      }
    ]
  },
  {
    path: '/contacto',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Contacto />
      }
    ]
  },
  {
    path: '/agenda',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Agenda />
      }
    ]
  },
  {
    path: '/cancelacion',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Cancelacion />
      }
    ]
  },
  {
    path: '/aviso',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Aviso />
      }
    ]
  },
  {
    path: '/blog/:id',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Post />
      }
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
