import React from "react";
//import admin-menu and addEmployeeForm
import AdminMenu from "../../components/admin/AdminMenu/AdminMenu";
import AddEmployeeForm from "../../components/admin/AddEmployeeForm/AddEmployeeForm";
function AddEmployees() {
  return (
    <div>
      <div className="conatainer-fluid admin-pages">
        <div className="row">
          {/* add dive element with className of col-md-3 admin-left-side */}
          <div className="col-md-3 admin-left-side">
            <AdminMenu />
          </div>
          {/* add dive element with className of col-md-9 admin-right-side */}
          <div className="col-md-9 admin-right-side">
            <AddEmployeeForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEmployees;
