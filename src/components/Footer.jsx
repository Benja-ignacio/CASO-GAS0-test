const LINKS = [
  { href: "/public/pages/productos.html", label: "Productos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#faq", label: "Preguntas frecuentes" },
  { href: "#contacto", label: "Contacto" },
];

const iconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  strokeWidth: 1.5,
  stroke: "currentColor",
  className: "w-4 h-4 block",
  "aria-hidden": "true",
};

const CONTACTS = [
  {
    text: "+56 9 XXXX XXXX",
    icon: (
      <svg {...iconProps}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.826-1.47-5.112-3.756-6.58-6.58l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
        />
      </svg>
    ),
  },
  {
    text: "contacto@elvolcan.cl",
    icon: (
      <svg {...iconProps}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    text: "Chillán, Región de Ñuble",
    icon: (
      <svg {...iconProps}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        />
      </svg>
    ),
  },
];

const headingClass =
  "mb-4 text-xs font-bold uppercase tracking-wider text-slate-900";

export default function Footer({ homeHref = "/" }) {
  return (
    <footer
      id="contacto"
      className="bg-white border-t border-slate-200 scroll-mt-20"
    >
      <div className="w-full max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Información */}
        <div>
          <a href={homeHref} className="inline-flex items-center gap-3 mb-4">
            <img
              src="/assets/images/logo.png"
              className="h-10"
              alt="El Volcan Logo"
            />
            <span className="text-xl font-semibold text-slate-900">
              El Volcan
            </span>
          </a>
          <p className="text-sm text-slate-500 leading-relaxed">
            Distribuidora de gas y productos para instalaciones domésticas e
            industriales.
          </p>
        </div>

        {/* Enlaces */}
        <nav aria-label="Enlaces del pie de página">
          <h2 className={headingClass}>Enlaces</h2>
          <ul className="space-y-2.5 text-sm font-medium">
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-slate-600 hover:text-fg-brand transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contacto */}
        <div>
          <h2 className={headingClass}>Contacto</h2>
          <ul className="grid grid-cols-[1.25rem_1fr] gap-x-2 gap-y-2.5 text-sm text-slate-500">
            {CONTACTS.map(({ text, icon }) => (
              <li key={text} className="contents">
                <span className="flex items-center justify-center text-fg-brand">
                  {icon}
                </span>
                <span className="self-center">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-8 py-5 text-center text-sm font-medium text-slate-500">
          © {new Date().getFullYear()} El Volcan. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
