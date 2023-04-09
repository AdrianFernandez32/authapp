import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, Link, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/Login';
// import Register from './pages/Register';
// import UserProfile from './pages/UserProfile';
import './App.css'

type Props = {}
function App(props: Props) {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/login" element={<LoginPage />} />
    )
  )
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App
