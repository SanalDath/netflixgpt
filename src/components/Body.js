import React, { useEffect } from 'react';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Browse from './Browse';
import Login from './Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  },{
    path: '/browse',
    element: <Browse/>
  },
]);


const Body = () => {
  const dispatch = useDispatch()

   useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const { uid, email, displayName } = user;
           dispatch(addUser({
              uid: uid,
              email: email,
              displayName: displayName
            }));
          }
         })
       }, [dispatch]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
