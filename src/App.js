import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import Orders from './Components/Orders/Orders';
import About from './Components/About/About';

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
      ]
    },
    // {
    //   path : ''
    // }
  ])
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
