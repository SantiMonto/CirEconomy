import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <nav>Este es el navbar</nav>
        <Outlet />
    </div>
  )
}

export default Layout;