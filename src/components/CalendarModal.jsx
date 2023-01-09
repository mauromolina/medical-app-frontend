import { useState, useMemo, useEffect } from "react";
import Modal from "react-modal";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import { useCalendarStore, useUiStore } from "../hooks";
import Swal from "sweetalert2";
import {
  useAddRecordsMutation,
  useDeleteRecordsMutation,
  useUpdateRecordsMutation,
} from "../state/query/records";
import { Spinner } from "./Spinner";
import { useSelector } from "react-redux";

registerLocale("es", es);

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const initialState = {
  title: "",
  notes: "",
  category: "En Ayuno",
  start: new Date(),
};

export const CalendarModal = () => {
  const [createRecord, { isFetching: isCreating }] = useAddRecordsMutation();
  const [updateRecord, { isFetching: isUpdating }] = useUpdateRecordsMutation();
  const [deleteRecord, { isFetching: isDeleting }] = useDeleteRecordsMutation();
  const isSomeQueryPending = useSelector((state) =>
    Object.values(state.recordsQuery.queries).some(
      (query) => query.status === "pending"
    )
  );
  const { isDateModalOpen, closeDateModal } = useUiStore();
  const { activeRecord } = useCalendarStore();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formValues, setFormValues] = useState(initialState);
  const titleClass = useMemo(() => {
    if (!isSubmitted) return "";
    return formValues.title.length > 0 ? "" : "is-invalid";
  }, [formValues.title, isSubmitted]);

  const categoryClass = useMemo(() => {
    if (!isSubmitted) return "";
    return formValues.category.length > 0 ? "" : "is-invalid";
  }, [formValues.category, isSubmitted]);

  useEffect(() => {
    if (activeRecord) {
      setFormValues({
        ...activeRecord,
      });
    } else setFormValues(initialState);
  }, [activeRecord]);

  const onInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onDateChange = (date, changing) => {
    setFormValues({
      ...formValues,
      [changing]: date,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (formValues.title.length <= 0 || formValues.category.length <= 0) return;
    formValues.end = formValues.start;

    formValues.id ? updateRecord(formValues) : createRecord(formValues);
    closeDateModal();
    setIsSubmitted(false);
    setFormValues(initialState);
  };

  const onDeleteClick = () => {
    Swal.fire({
      title: "¿Estás seguro de eliminar este registro?",
      text: "El registro no podrá ser recuperado.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "No, cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          deleteRecord(activeRecord);
          closeDateModal();
        } catch (err) {}
      }
    });
  };

  if (isSomeQueryPending) return <Spinner />;

  return (
    <Modal
      isOpen={isDateModalOpen}
      onRequestClose={closeDateModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
      ariaHideApp={false}
    >
      <h1> Nuevo Registro </h1>
      <hr />
      <form className="container" onSubmit={onSubmit}>
        <div className="form-group mb-2">
          <label>Fecha y hora</label>
          <DatePicker
            selected={formValues.start}
            className="form-control"
            onChange={(e) => onDateChange(e, "start")}
            dateFormat="Pp"
            showTimeSelect
            locale={"es"}
            timeCaption="Hora"
          />
        </div>

        <div className="form-group mb-2">
          <label>Valor</label>
          <input
            type="text"
            className={`form-control ${titleClass}`}
            placeholder="Valor del registro"
            name="title"
            autoComplete="off"
            value={formValues.title}
            onChange={onInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una valor numérico
          </small>
        </div>

        <hr />

        <div className="form-group mb-2">
          <select
            className={`form-control ${categoryClass}`}
            aria-label="Default select example"
            onChange={onInputChange}
            name="category"
            value={formValues.category}
          >
            <option value="" disabled defaultValue={""}>
              Seleccionar una opción
            </option>
            <option value="En Ayuno">En Ayuno</option>
            <option value="Después de Desayunar">Después de Desayunar</option>
            <option value="Antes de Almorzar">Antes de Almorzar</option>
            <option value="Después de Almorzar">Después de Almorzar</option>
            <option value="Antes de Merendar">Antes de Merendar</option>
            <option value="Después de Merendar">Después de Merendar</option>
            <option value="Antes de Cenar">Antes de Cenar</option>
            <option value="Después de Cenar">Después de Cenar</option>
            <option value="Otro">Otro (Agregar nota)</option>
          </select>
        </div>

        <div className="form-group mb-2">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={formValues.notes}
            onChange={onInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
        {activeRecord && (
          <button
            type="button"
            className="btn btn-outline-danger btn-block"
            onClick={onDeleteClick}
          >
            <i className="fas fa-remove"></i>
            <span> Eliminar</span>
          </button>
        )}
      </form>
    </Modal>
  );
};
