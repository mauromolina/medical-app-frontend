import React from "react";
import { useAuthStore, useCalendarStore } from "../hooks";
import { CSVLink } from "react-csv";
import { format } from "date-fns";
import { useState } from "react";

export const Navbar = () => {
  const { user, startLogout } = useAuthStore();
  const { records } = useCalendarStore();

  const [exportingData, setExportingData] = useState([{}]);

  const csvHeaders = [
    { label: "Fecha", key: "formatedDate" },
    { label: "Registro", key: "title" },
    { label: "Categoria", key: "category" },
  ];

  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <span className="navbar-brand">
        <i className="fas fa-calendar-alt"></i>
        &nbsp; {user.name}
      </span>
      <span className="navbar-brand">
        <i className="fas fa-download"></i>
        <CSVLink
          data={records}
          headers={csvHeaders}
          className="text-light ml-2"
        >
          Descargar registros
        </CSVLink>
      </span>
      <button className="btn btn-outline-danger" onClick={startLogout}>
        <i className="fas fa-sign-out-alt"></i>
        &nbsp;<span>Salir</span>
      </button>
    </div>
  );
};
