
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main/Main';
import Home from './Pages/Home/Home/Home';
import Category from './Pages/Category/Category';
import News from './Pages/News/News/News';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/category/:id',
          element: <Category></Category>
        },
        {
          path: '/news/:id',
          element: <News></News>
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
