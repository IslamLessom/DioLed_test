import React from "react";
import { AdminPage } from "@/features/AdminPanel/ui/admin-page/AdminPage";
import ProtectedRoute from "@/entities/ProtectedRoute/ProtectedRoute";

const Admin = () => {
  return (
    <ProtectedRoute>
      <AdminPage />
    </ProtectedRoute>
  );
};

export default Admin;
