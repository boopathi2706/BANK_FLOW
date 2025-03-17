import React from 'react'
import '../css/AdminDash.css'
import { useState } from 'react'

const AdminDash = () => {
    const[camara_start,setCamara_start]=useState(false);
  return (
    <div className="admin_main_body">
      <div className="sequare"></div>
      <div className="small_sequare"></div>
      <div className="small_sequare1"></div>

      <div className="admin_main_container">
          <div className="left_admin_side">
            <h3>Admin DashBoard</h3>
            <div className="camara_show_area"></div>
            <div className="buttons_admin">
            <button className='camara_start' onClick={e=>{setCamara_start(true)}}>Start</button>
            <button className='camara_stop' onClick={e=>{setCamara_start(false)}}>Stop</button>
            </div>
            {camara_start && ( <h4>Camara Running....</h4>)}
          
          </div>
          <div className="right_admin_side">

          </div>
      </div>
      <div className="r_sequare"></div>
      <div className="r_small_sequare"></div>
      <div className="r_small_sequare1"></div>

    </div>
  )
}
export default AdminDash;
