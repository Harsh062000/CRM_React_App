import React from 'react'

const Signup = () => {
       return (
              <div className='flex justify-center items-center h-[90vh]'>
                     <div className="card w-96 bg-primary text-primary-content">
                            <div className="card-body flex flex-col">
                                   <div className='w-full'>
                                          <h2 className="card-title text-4xl">Sign Up</h2>
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
                                                 type="email"
                                                 required
                                                 placeholder="Email"
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

                                   <details className="dropdown">
                                          <summary className="btn m-1">User Type</summary>
                                          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                                 <li><a>Customer</a></li>
                                                 <li><a>Engineer</a></li>
                                          </ul>
                                   </details>
                                   <div className="card-actions w-full mt-4">
                                          <button className="btn btn-warning w-full font-bold">Submit</button>
                                   </div>
                            </div>
                     </div>
              </div>
       )
}

export default Signup