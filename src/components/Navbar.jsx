import React from "react";
import * as XLSX from "xlsx";
import { useAuthStore, useCalendarStore } from "../hooks";

export const Navbar = () => {
  const { user, startLogout } = useAuthStore();
  const { records } = useCalendarStore();

  const onExportData = () => {
    let dataToExport = [];
    records.forEach((record) => {
      dataToExport.push({
        Fecha: record.start,
        Registro: record.title,
        Categoria: record.category,
      });
    });
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(dataToExport);
    XLSX.utils.book_append_sheet(wb, ws, "RegistroMedico");
    XLSX.writeFile(wb, "RegistroMedico.xlsx");
  };

  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <span className="navbar-brand">
        <i className="fas fa-calendar-alt"></i>
        &nbsp; {user.name}
      </span>
      <span
        className="navbar-brand"
        style={{ cursor: "pointer" }}
        onClick={onExportData}
      >
        <i className="fas fa-download mr-2"></i>
        Descargar registros
      </span>
      <button className="btn btn-outline-danger" onClick={startLogout}>
        <i className="fas fa-sign-out-alt"></i>
        &nbsp;<span>Salir</span>
      </button>
    </div>
  );
};
