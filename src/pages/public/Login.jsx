import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUserPlus, 
  faRightToBracket, 
  faArrowLeft, 
  faEnvelope, 
  faLock, 
  faIdCard, 
  faUser, 
  faUserTag, 
  faPhone, 
  faEye, 
  faEyeSlash 
} from "@fortawesome/free-solid-svg-icons";

import "../../assets/css/Login.css"; 

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegPassword, setShowRegPassword] = useState(false);

  const [loginData, setLoginData] = useState({
    correo: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    cedula: "",
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      console.log("Datos de registro:", registerData);
    } else {
      console.log("Datos de inicio de sesión:", loginData);
    }
  };

  return (
    <main className="auth-wrapper">
      <div className="auth-card">

        <div className="auth-badge">
          <FontAwesomeIcon icon={isRegister ? faUserPlus : faRightToBracket} />
        </div>

        {isRegister && (
          <div className="mb-3">
            <button
              type="button"
              className="btn-back-login"
              onClick={() => setIsRegister(false)}
            >
              <FontAwesomeIcon icon={faArrowLeft} /> Volver al login
            </button>
          </div>
        )}

        <h1 className="auth-title">
          {isRegister ? "Crear cuenta" : "Bienvenido"}
        </h1>

        <form onSubmit={handleSubmit}>
          {!isRegister ? (
            /*  FORMULARIO DE LOGIN  */
            <>
              <div className="mb-3">
                <label htmlFor="loginCorreo" className="form-label auth-label">
                  <FontAwesomeIcon icon={faEnvelope} /> Correo electrónico
                </label>
                <input
                  type="email"
                  id="loginCorreo"
                  name="correo"
                  className="form-control auth-input"
                  placeholder="usuario@correo.com"
                  value={loginData.correo}
                  onChange={handleLoginChange}
                  required
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="loginPassword"
                  className="form-label auth-label"
                >
                  <FontAwesomeIcon icon={faLock} /> Contraseña
                </label>
                <div className="password-wrapper">
                  <input
                    type={showLoginPassword ? "text" : "password"}
                    id="loginPassword"
                    name="password"
                    className="form-control auth-input"
                    placeholder="••••••••"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    required
                  />
                  <button
                    type="button"
                    className="btn-toggle-password"
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                    aria-label="Mostrar u ocultar contraseña"
                  >
                    <FontAwesomeIcon icon={showLoginPassword ? faEyeSlash : faEye} />
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <a
                  href="#recuperar"
                  onClick={(e) => e.preventDefault()}
                  className="auth-link-muted"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-auth-pill">
                  Iniciar sesión
                </button>
              </div>

              <div className="text-center mt-3">
                <button
                  type="button"
                  className="auth-link-muted"
                  onClick={() => setIsRegister(true)}
                >
                  ¿Aún no tienes cuenta? <strong>Regístrate</strong>
                </button>
              </div>
            </>
          ) : (
            /* FORMULARIO DE REGISTRO  */
            <>
              <div className="mb-3">
                <label htmlFor="cedula" className="form-label auth-label">
                  <FontAwesomeIcon icon={faIdCard} /> Cédula
                </label>
                <input
                  type="text"
                  id="cedula"
                  name="cedula"
                  className="form-control auth-input"
                  placeholder="Ej: V-12345678"
                  value={registerData.cedula}
                  onChange={handleRegisterChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="nombre" className="form-label auth-label">
                  <FontAwesomeIcon icon={faUser} /> Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="form-control auth-input"
                  placeholder="Ingresa tu nombre"
                  value={registerData.nombre}
                  onChange={handleRegisterChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="apellido" className="form-label auth-label">
                  <FontAwesomeIcon icon={faUserTag} /> Apellido
                </label>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  className="form-control auth-input"
                  placeholder="Ingresa tu apellido"
                  value={registerData.apellido}
                  onChange={handleRegisterChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="regCorreo" className="form-label auth-label">
                  <FontAwesomeIcon icon={faEnvelope} /> Correo
                </label>
                <input
                  type="email"
                  id="regCorreo"
                  name="correo"
                  className="form-control auth-input"
                  placeholder="usuario@correo.com"
                  value={registerData.correo}
                  onChange={handleRegisterChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="telefono" className="form-label auth-label">
                  <FontAwesomeIcon icon={faPhone} /> Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  className="form-control auth-input"
                  placeholder="Ej: 0412-1234567"
                  value={registerData.telefono}
                  onChange={handleRegisterChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="regPassword" className="form-label auth-label">
                  <FontAwesomeIcon icon={faLock} /> Contraseña
                </label>
                <div className="password-wrapper">
                  <input
                    type={showRegPassword ? "text" : "password"}
                    id="regPassword"
                    name="password"
                    className="form-control auth-input"
                    placeholder="••••••••"
                    value={registerData.password}
                    onChange={handleRegisterChange}
                    required
                  />
                  <button
                    type="button"
                    className="btn-toggle-password"
                    onClick={() => setShowRegPassword(!showRegPassword)}
                    aria-label="Mostrar u ocultar contraseña"
                  >
                    <FontAwesomeIcon icon={showRegPassword ? faEyeSlash : faEye} />
                  </button>
                </div>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-auth-pill">
                  Registrarme
                </button>
              </div>
            </>
          )}
        </form>

        {/* Acceso provisional al dashboard */}
        <div className="text-center mt-4 pt-3 border-top">
          <Link to="/admin" className="btn btn-outline-secondary btn-sm">
            Ir al dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}