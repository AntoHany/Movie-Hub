import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './pages/About.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { FilmDetails } from './componant/FilmDetails.js';

const url = "/https://antohany.github.io/Movie-Hub/"
const router = createBrowserRouter([
  {
    path: url,
    element: <App />
  },
  {
    path: url+'about',
    element: <About />
  },
  {
    path: url+'film/:filmId',
    element: <FilmDetails />
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
