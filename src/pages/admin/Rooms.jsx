import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import ReusableDataTable from "../../components/common/ReusableDataTable.jsx";
import RoomModal from "../../components/admin/RoomModal.jsx";
import { useGetFetch } from "../../hooks/useGetFetch.jsx";
import { useDeleteFetch } from "../../hooks/useDeleteFetch.jsx";
import { SERVER_URL } from "../../services/api.js";

const floorLabels = {
  0: "PB",
  1: "Piso 1",
};

const statusLabels = {
  activa: "Activa",
  inactiva: "Inactiva",
  limpieza: "En limpieza",
  ocupada: "Ocupada",
};

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

export default function Rooms() {
  const { data: habitaciones, loading, error, refetch } = useGetFetch("/habitaciones");
  const { remove, DeleteModal } = useDeleteFetch("/habitaciones");
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);

  const handleCreate = () => {
    setEditing(null);
    setShowModal(true);
  };

  const handleEdit = (id) => {
    const habitacion = habitaciones?.find(
      (item) => String(item.id) === String(id),
    );
    if (!habitacion) {
      window.alert("No se encontró la habitación.");
      return;
    }

    setEditing(habitacion);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await remove(id);
      refetch();
    } catch (deleteError) {
      if (deleteError.message !== "Eliminación cancelada") {
        console.error("No se pudo eliminar la habitación:", deleteError);
      }
    }
  };

  const columns = [
    { title: "ID", data: "id" },
    {
      title: "Foto",
      data: null,
      orderable: false,
      searchable: false,
      render: (_value, type, room) => {
        if (type !== "display") return "";
        const firstImage = room.imagenes?.[0];
        if (!firstImage) return '<span class="text-muted small">Sin foto</span>';

        return `
          <img
            src="${escapeHtml(`${SERVER_URL}${firstImage.imagen}`)}"
            alt="Habitación ${escapeHtml(room.numero)}"
            width="64"
            height="48"
            style="object-fit: cover; border-radius: 6px;"
          />
        `;
      },
    },
    {
      title: "Número",
      data: "numero",
      render: (value, type) =>
        type === "display" ? escapeHtml(value) : value,
    },
    {
      title: "Piso",
      data: "piso",
      render: (floor) => floorLabels[Number(floor)] || "Sin definir",
    },
    {
      title: "Capacidad",
      data: "capacidad",
      render: (capacity) => `${capacity} personas`,
    },
    {
      title: "Precio por persona",
      data: "precio_por_persona",
      render: (price) => `$${Number(price).toFixed(2)}`,
    },
    {
      title: "Estatus",
      data: "estatus",
      render: (status) =>
        `<span class="badge ${status === "activa" ? "bg-success" : "bg-secondary"}">${escapeHtml(statusLabels[status] || status)}</span>`,
    },
    {
      title: "Acciones",
      data: "id",
      orderable: false,
      render: (id) => `
        <button class="btn btn-sm btn-outline-primary btn-editar" data-id="${id}">Editar</button>
        <button class="btn btn-sm btn-outline-danger btn-eliminar" data-id="${id}">Eliminar</button>
      `,
    },
  ];

  return (
    <div className="container-fluid px-2 px-md-4 px-lg-4 py-2">
      <div className="card shadow-sm border-0">
        <div className="card-body p-4">
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-5">
            <h3 className="card-title m-0 fw-bold text-dark">
              <FontAwesomeIcon icon={faBed} className="text-primary me-2" />
              Habitaciones
            </h3>

            <button className="btn btn-dark" onClick={handleCreate}>
              + Registrar habitación
            </button>
          </div>

          <ReusableDataTable
            data={habitaciones}
            columns={columns}
            loading={loading}
            error={error}
            options={{
              columnDefs: [
                { targets: 0, className: "text-center" },
                { targets: 1, className: "text-center" },
                { targets: [2, 3, 4, 5, 6, 7], className: "text-start" },
              ],
              language: {
                search: "Buscar:",
                lengthMenu: "Mostrar _MENU_ registros",
                info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
                zeroRecords: "No se encontraron habitaciones",
                emptyTable: "No hay habitaciones registradas",
                paginate: {
                  previous: "Anterior",
                  next: "Siguiente",
                },
              },
            }}
            className="table table-striped table-hover mb-0 custom-table"
            onEdit={handleEdit}
            onDelete={handleDelete}
          />

          {showModal && (
            <RoomModal
              show={showModal}
              onClose={() => setShowModal(false)}
              onSaved={refetch}
              room={editing}
            />
          )}

          <DeleteModal
            title="Eliminar habitación"
            message="¿Estás seguro de que deseas eliminar esta habitación?"
          />
        </div>
      </div>
    </div>
  );
}
