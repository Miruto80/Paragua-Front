import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="container py-5">
      <h1>Iniciar sesión</h1>
      <p>Accede para continuar en el panel administrativo.</p>

      <Link to="/admin" className="btn btn-primary">
        Ir al dashboard
      </Link>
    </main>
  );
}
