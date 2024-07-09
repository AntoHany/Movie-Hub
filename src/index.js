import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './pages/About.js';
import { createBrowserRouter, HashRouter, RouterProvider } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { FilmDetails } from './componant/FilmDetails.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/film/:filmId',
    element: <FilmDetails />
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <HashRouter>
    <RouterProvider router={router} />
  // </HashRouter> 
);
