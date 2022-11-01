import React from 'react'
import { Outlet } from 'react-router-dom'
import Dashbord from './Dashbord'

export default function DashboardAdmin() {
  return (
    <div style={{display:"flex"}}>
        <div style={{width:"25%"}}>
          <Dashbord/>
        </div>
        <div tyle={{width:"70%"}}>
            <Outlet/>
        </div>
    </div>
  )
}
