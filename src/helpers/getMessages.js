export const getMessagesES = () => {
  return {
    allDay: "Todo el día",
    previous: "<",
    next: ">",
    today: "Hoy",
    month: "Mes",
    week: "Semana",
    day: "Día",
    agenda: "Agenda",
    date: "Fecha",
    time: "Hora",
    event: "Registro",
    noEventsInRange: "No hay registros en este rango",
    showMore: (total) => `+ Ver más (${total})`,
  };
};
