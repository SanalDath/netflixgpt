import './App.css';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Browse from './components/Browse';
import Login from './components/Login';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  },{
    path: '/browse',
    element: <Browse/>
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
