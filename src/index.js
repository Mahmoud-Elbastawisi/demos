import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/pg1/home';
import Error from './pages/pgN/error';
import C from './pages/pg3/contact_p';
import './pages/pg1/home_style.css';
import './pages/pgN/error.css';
import './comp/comp2/ex.css';
import './comp/comp3/slider.css';
import './comp/comp4/footer.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';




import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<Error/>
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/C",
    element: <C/>,
  }
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div className='contant'>
    
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    

    
</div>
);

