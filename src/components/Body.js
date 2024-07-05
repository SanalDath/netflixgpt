import React, { useEffect } from 'react';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Browse from './Browse';
import Login from './Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import ErrorPage from './ErrorPage';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  },{
    path: '/browse',
    element: <Browse/>
  }, {
    path: 'error',
    element: <ErrorPage/>
  }
]);


const Body = () => {
  
  const dispatch = useDispatch();

   useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const { uid, email, displayName, photoURL } = user;
           dispatch(addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL
            })); //if user is present this function will set up the store 
          } else {
              dispatch(removeUser())
          }
        })
     //unsubscribe when component wil unmout and it will unsubscribe my onAut state
     return () => unsubscribe()
       }, [dispatch]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
