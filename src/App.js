import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import Orders from './Components/Orders/Orders';
import About from './Components/About/About';
import Grandpa from './Components/Grandpa/Grandpa';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: ()=>{
          return fetch('tshirts.json');
          },
          element: <Home></Home>,
        },
        { path: '/orders', element: <Orders></Orders> },
        { path: '/about', element: <About></About> },
        { path: '/grandpa', element: <Grandpa></Grandpa> },
      ]
    },
    // {
    //   path : ''
    // }
  ])
  return (
    <div className=''>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
