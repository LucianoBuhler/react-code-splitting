import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar';
// import { About, Contact, FAQs, Profile, Login } from './pages'
import { lazy, Suspense, useState } from 'react';

const Profile = lazy(() => import('./pages/Profile'));
const About   = lazy(() => import('./pages/About'  ));
const Contact = lazy(() => import('./pages/Contact'));
const FAQs    = lazy(() => import('./pages/FAQs'   ));
const Login   = lazy(() => import('./pages/Login'  ));

// const isAuthenticated = true


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleAuth = (() => {
    setIsAuthenticated(!isAuthenticated)
  })

  return (
    <div>
      <div className='auth-button-container'>
        <i className="auth-button" onClick={handleAuth}>🔑</i>
        {isAuthenticated ? `Logged in` : `Please Authenticate`}
      </div>
      <BrowserRouter>
        <Routes>
          {
            (isAuthenticated)
              ? <Route path="/*" element={<PrivateRoutes />} />
              : <Route path="/*" element={<PublicRoutes />} />
          }
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path='login' element={ <Login /> } />
      <Route path='/*' element={<Navigate to='/login' replace />} />
    </Routes>
  )
}

export const PrivateRoutes = () => {
  return (
    <>
      <NavBar />
      {/* <div>isAuthenticated: {isAuthenticated}</div> */}
      <Routes>
        <Route path='profile' element={<Suspense fallback={<>...</>}> <Profile /></Suspense>} />
        <Route path='about' element={<Suspense fallback={<>...</>}> <About /></Suspense>} />
        <Route path='contact' element={<Suspense fallback={<>...</>}> <Contact /></Suspense>} />
        <Route path='faqs' element={<Suspense fallback={<>...</>}> <FAQs /></Suspense>} />
        <Route path='/*' element={<Navigate to='/profile' replace />} />
      </Routes>
    </>
  )
}
