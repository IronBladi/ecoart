import { FiHome, FiCheckCircle, FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

/**
 * LoginPage – Pantalla de autenticación.
 *
 * Mantiene la lógica del `LoginForm` intacta y actualiza únicamente la capa visual
 * para que coincida con la identidad de EcoArt (paleta verde, tipografía Plus Jakarta Sans,
 * bordes redondeados, sombras suaves y espaciado generoso). El diseño está compuesto por
 * dos paneles responsivos:
 *   • **Panel izquierdo** – visible sólo en pantallas `lg` y superiores, fondo primario
 *     `#0F382C` con decoraciones sutiles en los colores de acento.
 *   • **Panel derecho** – fondo claro `#F8F9FA`, contiene el formulario y un botón
 *     "Volver al inicio" que usa `navigate('/')`.
 *
 * El componente es totalmente responsive y accesible (focus-visible, aria‑labels).
 */
const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center px-4 py-12 lg:px-6">
      {/* Contenedor principal */}
      <div className="grid w-full max-w-7xl overflow-hidden rounded-2xl bg-white shadow-2xl lg:grid-cols-2">

        {/* ── Panel izquierdo (solo en desktop) ────────────────────── */}
        <section className="relative hidden lg:flex flex-col justify-center bg-[#0F382C] p-12 text-white">
          {/* Decoraciones circulares */}
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#10B981]/20" aria-hidden="true" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#A7C957]/25" aria-hidden="true" />
          <div className="relative z-10 space-y-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#A7C957] text-[#0F382C] shadow-md">
                <FiHome size={28} />
              </div>
              <h1 className="text-5xl font-extrabold tracking-tight">EcoArt</h1>
            </div>
            {/* Descripción */}
            <p className="max-w-md text-lg leading-8 text-[#F2E8CF]">
              Sistema web para la gestión inmobiliaria, propietarios y publicaciones.
            </p>
            {/* Lista de beneficios */}
            <div className="space-y-4">
              {["Gestión centralizada de inmuebles", "Administración de propietarios", "Plataforma moderna y segura"].map((txt, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FiCheckCircle className="text-[#A7C957]" size={22} />
                  <span>{txt}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Panel derecho – formulario ───────────────────────── */}
        <section className="flex flex-col items-center justify-center bg-[#F8F9FA] p-8 lg:p-12">
          <div className="w-full max-w-md space-y-6">
            {/* Botón Volver al inicio */}
            <button
              type="button"
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 rounded-lg bg-[#10B981]/10 px-4 py-2 text-sm font-medium text-[#10B981] transition-colors duration-200 hover:bg-[#10B981]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10B981]"
              aria-label="Volver al inicio"
            >
              <FiArrowLeft size={16} />
              Volver al inicio
            </button>
            {/* Encabezado del formulario */}
            <p className="text-sm uppercase tracking-[0.35em] text-[#0F382C]">Bienvenido</p>
            <h2 className="text-4xl font-extrabold text-[#0F382C]">Iniciar sesión</h2>
            <p className="text-sm text-gray-600">
              Ingrese sus credenciales para acceder al sistema EcoArt.
            </p>
            {/* Formulario */}
            <LoginForm />
          </div>
        </section>

      </div>
    </div>
  );
};

export default LoginPage;