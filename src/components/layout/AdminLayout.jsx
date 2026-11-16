import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNav from '../admin/AdminNav'

export default function AdminLayout() {
  return (
    <div>
      <AdminNav />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
