
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main/Main';
import Home from './Pages/Home/Home/Home';
import Category from './Pages/Category/Category';
import News from './Pages/News/News/News';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Home></Home>,
          loader:()=> fetch('http://localhost:5000/news')
        },
        {
          path: '/category/:id',
          element: <Category></Category>,
          loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
        },
        {
          path: '/news/:id',
          element: <News></News>,
          loader: ({params})=>fetch(`http://localhost:5000/news/${params.id}`)
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    }
  ]);
  return (
    <div>
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
