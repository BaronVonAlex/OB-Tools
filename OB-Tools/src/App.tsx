import AuthLayout from './_auth/AuthLayout';
import SignUpform from './_auth/forms/SignUpform';
import SigninForm from './_auth/forms/SigninForm';
import RootLayout from './_root/RootLayout';

import { Home } from './_root/pages';
import './globals.css'
import {Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <main className="flex h-screen">
        <Routes>
            {/* {public routes} */}
            <Route element={<AuthLayout />}>
              <Route path="/sign-in" element={<SigninForm />}> </Route>
              <Route path="/sign-in" element={<SignUpform />}> </Route>
            </Route>

            {/* {private routes} */}
            <Route element={<RootLayout />}>
              <Route index element={<Home />}></Route>
            </Route>
        </Routes>
    </main>
  )
}

export default App