import { Outlet, Navigate } from 'react-router-dom';

const AuthLayout = () => {
  const isAuntheticated = false;
  return (
    <>
      {isAuntheticated ? (
        <Navigate to="/"/>
      ):(
        <>
          <section className='flex flex-1 justify-center items-center flex-col py-10'>
            <Outlet></Outlet>
          </section>

          <img 
          src="/assets/images/Yoon.png"
          alt="logo"
          className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat">
          </img>
        </>
      )}
    </>
  )
}

export default AuthLayout