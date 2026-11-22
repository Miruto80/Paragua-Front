import { useState } from "react";
import { usePostFetch } from "../../hooks/usePostFetch.jsx";
import { usePutFetch } from "../../hooks/usePutFetch.jsx";

const emptyForm = {
  numero: "",
  piso: "1",
  capacidad: "2",
  precio_por_persona: "",
  descripcion: "",
  estatus: "activa",
};

function getErrorMessage(error) {
  const response = error?.response?.data;
  const validationErrors = response?.errors
    ?.map(({ msg }) => msg)
    .filter(Boolean);

  if (validationErrors?.length) return validationErrors.join(". ");
  return response?.message || "Error en la operación.";
}

export default function RoomModal({ show, onClose, onSaved, room = null }) {
  const {
    post,
    loading: creating,
    error: createError,
  } = usePostFetch("/habitaciones");
  const {
    put,
    loading: updating,
    error: updateError,
  } = usePutFetch("/habitaciones");
  const [form, setForm] = useState(() => {
    if (!room) return emptyForm;
    return {
      numero: room.numero ?? "",
      piso: String(room.piso),
      capacidad: String(room.capacidad),
      precio_por_persona: String(room.precio_por_persona),
      descripcion: room.descripcion ?? "",
      estatus: room.estatus ?? "activa",
    };
  });

  if (!show) return null;

  const submitting = creating || updating;
  const error = createError || updateError;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      ...form,
      piso: Number(form.piso),
      capacidad: Number(form.capacidad),
      precio_por_persona: Number(form.precio_por_persona),
    };

    try {
      if (room?.id) {
        await put(room.id, payload);
      } else {
        await post(payload);
      }
      onSaved?.();
      onClose();
    } catch {
      // The request hooks retain the error for display in the form.
    }
  };

  return (
    <div
      className="modal fade show d-block"
      style={{ background: "rgba(0, 0, 0, 0.5)" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="room-modal-title"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h2 className="modal-title fs-5" id="room-modal-title">
                {room ? "Editar habitación" : "Registrar habitación"}
              </h2>
              <button
                type="button"
                className="btn-close"
                aria-label="Cerrar"
                onClick={onClose}
              />
            </div>

            <div className="modal-body">
              {error && (
                <div className="alert alert-danger" role="alert">
                  {getErrorMessage(error)}
                </div>
              )}

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label" htmlFor="room-number">
                    Número
                  </label>
                  <input
                    id="room-number"
                    name="numero"
                    className="form-control"
                    value={form.numero}
                    onChange={handleChange}
                    maxLength={20}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label" htmlFor="room-floor">
                    Piso
                  </label>
                  <select
                    id="room-floor"
                    name="piso"
                    className="form-select"
                    value={form.piso}
                    onChange={handleChange}
                    required
                  >
                    <option value="0">PB</option>
                    <option value="1">Piso 1</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label" htmlFor="room-capacity">
                    Capacidad
                  </label>
                  <select
                    id="room-capacity"
                    name="capacidad"
                    className="form-select"
                    value={form.capacidad}
                    onChange={handleChange}
                    required
                  >
                    {[2, 3, 4, 5, 6, 7].map((capacity) => (
                      <option key={capacity} value={capacity}>
                        {capacity} personas
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label" htmlFor="room-price">
                    Precio por persona
                  </label>
                  <input
                    id="room-price"
                    name="precio_por_persona"
                    className="form-control"
                    type="number"
                    min="0"
                    step="0.01"
                    value={form.precio_por_persona}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label" htmlFor="room-status">
                    Estatus
                  </label>
                  <select
                    id="room-status"
                    name="estatus"
                    className="form-select"
                    value={form.estatus}
                    onChange={handleChange}
                  >
                    <option value="activa">Activa</option>
                    <option value="inactiva">Inactiva</option>
                    <option value="limpieza">En limpieza</option>
                    <option value="ocupada">Ocupada</option>
                  </select>
                </div>

                <div className="col-12">
                  <label className="form-label" htmlFor="room-description">
                    Descripción
                  </label>
                  <textarea
                    id="room-description"
                    name="descripcion"
                    className="form-control"
                    rows="3"
                    value={form.descripcion}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="btn btn-dark"
                disabled={submitting}
              >
                {submitting ? "Guardando..." : "Guardar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
