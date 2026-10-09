import { useState } from "react";

const NAV_LINKS = [
  { href: "#productos", label: "Productos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#faq", label: "Preguntas frecuentes" },
  { href: "#contacto", label: "Contacto" },
];

const linkClass = "text-heading hover:text-fg-brand";

function CartBadge({ count, className }) {
  if (count <= 0) return null;
  return (
    <span
      className={`absolute bg-fg-brand text-white text-xs font-bold rounded-full flex items-center justify-center ${className}`}
    >
      {count}
    </span>
  );
}

export default function Navbar({
  cartCount = 0,
  onOpenSearch = () => {},
  onToggleCart = () => {},
  homeHref = "/",
  loginHref = "/pages/login.html",
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="w-full px-4 md:px-8 h-16 flex items-center justify-between gap-4">
        {/* 1. Logo */}
        <div className="flex-shrink-0">
          <a href={homeHref} className="flex items-center space-x-3">
            <img
              src="/assets/images/logo.png"
              className="h-10"
              alt="El Volcan Logo"
            />
            <span className="text-xl text-heading font-semibold whitespace-nowrap">
              El Volcan
            </span>
          </a>
        </div>

        {/* 2. Navegación (solo XL en adelante) */}
        <div className="hidden xl:flex justify-center flex-1 mx-4">
          <ul className="font-medium flex items-center space-x-6 whitespace-nowrap">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className={linkClass}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Buscador + Cuenta + Carrito (desktop) */}
        <div className="hidden md:flex items-center justify-end gap-4 xl:gap-6 flex-shrink-0">
          {/* Buscador */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center bg-white border border-gray-200 rounded-full shadow-md overflow-hidden"
          >
            <input
              type="text"
              name="q"
              placeholder="Buscar..."
              readOnly
              onFocus={onOpenSearch}
              onClick={onOpenSearch}
              className="px-4 py-1.5 text-gray-700 text-sm outline-none bg-transparent w-36 focus:w-48 xl:w-44 xl:focus:w-56 transition-all duration-300 cursor-pointer"
            />
            <button
              type="submit"
              aria-label="Buscar productos"
              onClick={onOpenSearch}
              className="bg-[#46cad6] hover:bg-[#34b4c0] px-3.5 py-2 flex items-center justify-center transition-colors"
            >
              <img
                src="/assets/images/search.png"
                alt="Buscar"
                className="w-6 h-6 object-contain"
              />
            </button>
          </form>

          {/* Cuenta */}
          <a
            href={loginHref}
            className="flex items-center gap-2 text-heading hover:text-fg-brand font-medium whitespace-nowrap"
          >
            <img
              src="/assets/images/accountv3.png"
              alt=""
              className="w-7 h-7"
            />
            <span className="hidden sm:inline">Cuenta</span>
          </a>

          {/* Carrito */}
          <button
            type="button"
            onClick={onToggleCart}
            className="flex items-center gap-2 text-heading hover:text-fg-brand font-medium cursor-pointer whitespace-nowrap"
          >
            <span className="relative inline-block">
              <img
                src="/assets/images/carrito.png"
                alt=""
                className="w-6 h-6"
              />
              <CartBadge
                count={cartCount}
                className="-top-2 -right-3 w-5 h-5"
              />
            </span>
            <span className="hidden sm:inline">Carrito</span>
          </button>
        </div>

        {/* 4. Acciones móvil / tablet */}
        <div className="flex xl:hidden items-center gap-1">
          {/* Buscar (mobile) */}
          <button
            type="button"
            onClick={onOpenSearch}
            aria-label="Buscar productos"
            className="md:hidden text-heading hover:text-fg-brand p-2"
          >
            <img
              src="/assets/images/search-phone.png"
              alt=""
              className="w-6 h-6"
            />
          </button>

          {/* Carrito (mobile) */}
          <button
            type="button"
            onClick={onToggleCart}
            aria-label="Carrito"
            className="relative md:hidden text-xl text-heading hover:text-fg-brand p-2"
          >
            <img src="/assets/images/carrito.png" alt="" className="w-6 h-6" />
            <CartBadge count={cartCount} className="top-0 right-0 w-4 h-4" />
          </button>

          {/* Hamburguesa */}
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Abrir menú"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="text-heading p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable (mobile / tablet hasta xl) */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="flex xl:hidden flex-col gap-1 px-4 pb-4 pt-2 border-t border-slate-200 bg-white"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 ${linkClass}`}
            >
              {label}
            </a>
          ))}

          {/* Cuenta dentro del menú en móvil pequeño */}
          <a
            href={loginHref}
            className="flex md:hidden items-center gap-2 py-2 text-heading hover:text-fg-brand font-medium border-t border-slate-100 mt-2 pt-2"
          >
            <img
              src="/assets/images/accountv3.png"
              alt=""
              className="w-6 h-6"
            />
            Cuenta
          </a>
        </div>
      )}
    </nav>
  );
}
