import React from 'react';
import LoginForm from '../components/LoginForm';


const Landing = () => {
  return (
    <section className="text-white w-4/5 border border-white mx-auto mt-8">
        <div>
            <h1 className="text-3xl text-center py-4">Landing</h1>
        </div>
        <div>
            {/* <p className="text-center">This is the landing page</p>    */}
            <LoginForm />
        </div>
    </section>
  )
}

export default Landing
