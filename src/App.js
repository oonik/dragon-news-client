
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main/Main';
import Home from './Pages/Home/Home/Home';
import Category from './Pages/Category/Category';
import News from './Pages/News/News/News';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import TermsAndConditions from './Pages/others/TermsAndConditions/TermsAndConditions';
import { Toaster } from 'react-hot-toast';

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
          element:<PrivateRoute> <News></News></PrivateRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/news/${params.id}`)
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
         path: '/terms',
         element: <TermsAndConditions></TermsAndConditions>
        }
      ]
    }
  ]);
  return (
    <div>
       <RouterProvider router={router}></RouterProvider>
       <Toaster></Toaster>
    </div>
  );
}

export default App;
