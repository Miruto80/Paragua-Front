import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faUserGroup,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/ReservationModal.css";

function toDateInputValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getDefaultDates() {
  const checkIn = new Date();
  checkIn.setDate(checkIn.getDate() + 1);

  const checkOut = new Date(checkIn);
  checkOut.setDate(checkOut.getDate() + 1);

  return {
    checkIn: toDateInputValue(checkIn),
    checkOut: toDateInputValue(checkOut),
  };
}

export default function ReservationModal({ open, capacity, onClose }) {
  const dialogRef = useRef(null);
  const defaults = getDefaultDates();
  const [checkIn, setCheckIn] = useState(defaults.checkIn);
  const [checkOut, setCheckOut] = useState(defaults.checkOut);
  const [guests, setGuests] = useState(String(capacity));
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const minimumCheckOut = (() => {
    const date = new Date(`${checkIn}T12:00:00`);
    date.setDate(date.getDate() + 1);
    return toDateInputValue(date);
  })();

  const handleCheckInChange = (event) => {
    const nextCheckIn = event.target.value;
    setCheckIn(nextCheckIn);
    setSubmitted(false);

    if (!nextCheckIn || nextCheckIn >= checkOut) {
      const date = new Date(`${nextCheckIn || defaults.checkIn}T12:00:00`);
      date.setDate(date.getDate() + 1);
      setCheckOut(toDateInputValue(date));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <dialog
      className="reservation-modal"
      ref={dialogRef}
      aria-labelledby="reservation-modal-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="reservation-modal-header">
        <div>
          <span className="reservation-modal-eyebrow">Hotel La Paragua</span>
          <h2 id="reservation-modal-title">Reserva tu habitación</h2>
          <p>Indica tus fechas y el número de huéspedes.</p>
        </div>
        <button
          className="reservation-modal-close"
          type="button"
          aria-label="Cerrar reserva"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faXmark} aria-hidden="true" />
        </button>
      </div>

      <form className="reservation-modal-form" onSubmit={handleSubmit}>
        <div className="room-reservation-fields">
          <label>
            <span>
              <FontAwesomeIcon icon={faCalendarDays} aria-hidden="true" />
              Entrada
            </span>
            <input
              type="date"
              value={checkIn}
              min={defaults.checkIn}
              onChange={handleCheckInChange}
              required
            />
          </label>

          <label>
            <span>
              <FontAwesomeIcon icon={faCalendarDays} aria-hidden="true" />
              Salida
            </span>
            <input
              type="date"
              value={checkOut}
              min={minimumCheckOut}
              onChange={(event) => {
                setCheckOut(event.target.value);
                setSubmitted(false);
              }}
              required
            />
          </label>

          <label>
            <span>
              <FontAwesomeIcon icon={faUserGroup} aria-hidden="true" />
              Huéspedes
            </span>
            <select
              value={guests}
              onChange={(event) => {
                setGuests(event.target.value);
                setSubmitted(false);
              }}
            >
              {Array.from({ length: capacity }, (_, index) => index + 1).map(
                (guestCount) => (
                  <option key={guestCount} value={guestCount}>
                    {guestCount} {guestCount === 1 ? "persona" : "personas"}
                  </option>
                ),
              )}
            </select>
          </label>
        </div>

        <p className="reservation-modal-price">Tarifa: Por definir</p>
        <button className="reservation-modal-submit" type="submit">
          Solicitar reserva
        </button>
        {submitted && (
          <p className="room-reservation-confirmation" role="status">
            Fechas seleccionadas. Te contactaremos para confirmar disponibilidad.
          </p>
        )}
      </form>
    </dialog>
  );
}
