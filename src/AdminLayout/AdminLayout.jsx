import React from 'react';
import AdminFooter from '../components/Admin/AdminFooter';
import AdminHeader from '../components/Admin/AdminHeader';
import { Outlet } from 'react-router-dom';

function AdminLayout() {
  return (
    <>
      <AdminHeader></AdminHeader>
      <Outlet></Outlet>
      <AdminFooter></AdminFooter>
    </>
  );
}

export default AdminLayout;