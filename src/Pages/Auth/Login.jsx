import React from 'react'

const Login = () => {
       return (
              <div className='flex justify-center items-center h-[90vh]'>
                     <div className="card w-96 bg-primary text-primary-content">
                            <div className="card-body flex flex-col">
                                   <div className='w-full'>
                                          <h2 className="card-title text-4xl">Login</h2>
                                   </div>
                                   <div className='w-full'>
                                          <input
                                                 type="text"
                                                 required
                                                 placeholder="User Name"
                                                 className='input text-white input-bordered input-primary w-full'
                                          />

                                   </div>
                                   <div className='w-full'>
                                          <input
                                                 type="password"
                                                 required
                                                 placeholder="Password"
                                                 className='input text-white input-bordered input-primary w-full'
                                          />
                                   </div>
                                   <div className="card-actions w-full mt-4">
                                          <button className="btn btn-warning w-full font-bold">Submit</button>
                                   </div>
                            </div>
                     </div>
              </div>
       )
}

export default Login