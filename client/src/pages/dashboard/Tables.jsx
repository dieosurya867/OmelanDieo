import React from "react";
import DefaultLayout from "../../layouts/DashboardLayout";
import Breadcrumb from "../../components/dashboard/Breadcrumb";
import TableOne from "../../components/dashboard/TableOne";
import TableTwo from "../../components/dashboard/TableTwo";
import TableThree from "../../components/dashboard/TableThree";

const Tables = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>
    </DefaultLayout>
  );
};

export default Tables;
