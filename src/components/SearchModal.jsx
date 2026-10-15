import { useEffect, useMemo, useRef, useState } from "react";
import { PRODUCTS } from "../data/productos"; // ajusta al nombre real de tu archivo

const money = (n) => "$" + n.toLocaleString("es-CL");

const SECTIONS = [
  { anchor: "servicios", name: "Servicios" },
  { anchor: "nosotros", name: "Nosotros" },
  { anchor: "faq", name: "Preguntas frecuentes" },
  { anchor: "contacto", name: "Contacto" },
];

const FILTERS = [
  { id: "all", label: "Todos" },
  { id: "products", label: "Productos" },
  { id: "sections", label: "Secciones" },
];

const normalize = (s) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const resultClass =
  "group w-full flex items-center gap-3 sm:gap-4 p-3 rounded-xl border border-slate-200 hover:border-fg-brand hover:bg-slate-50 text-left transition-colors cursor-pointer";

export default function SearchModal({
  open,
  onClose,
  imageBase = "/assets/images/",
  productsPageHref = "/legacy/pages/productos.html",
}) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const inputRef = useRef(null);

  // Al abrir: foco, bloquear scroll y Escape. Al cerrar: reiniciar.
  useEffect(() => {
    if (!open) {
      setQuery("");
      setFilter("all");
      return;
    }
    inputRef.current?.focus();
    document.body.classList.add("overflow-hidden");
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const q = normalize(query.trim());

  const { products, sections } = useMemo(
    () => ({
      products: PRODUCTS.filter((p) => !q || normalize(p.name).includes(q)),
      sections: SECTIONS.filter((s) => !q || normalize(s.name).includes(q)),
    }),
    [q],
  );

  if (!open) return null;

  const showLabel = filter === "all";
  const visibleProducts = filter === "sections" ? [] : products;
  const visibleSections = filter === "products" ? [] : sections;
  const total = visibleProducts.length + visibleSections.length;

  let status = "Escribe para buscar productos o secciones de la página.";
  if (q) {
    status =
      total > 0
        ? `${total} resultado${total === 1 ? "" : "s"} encontrado${total === 1 ? "" : "s"}.`
        : "No encontramos resultados con ese término.";
  }

  const goToProduct = (product) => {
    onClose();
    const el = document.getElementById(`product-${product.id}`);
    if (el) {
      // Espera a que el modal se desmonte y se libere el scroll
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("ring-2", "ring-fg-brand");
        setTimeout(() => el.classList.remove("ring-2", "ring-fg-brand"), 1500);
      }, 50);
      return;
    }
    // Si la tarjeta no está en esta página, ir al catálogo completo
    window.location.href = `${productsPageHref}#${product.categoryAnchor}`;
  };

  const goToSection = (anchor) => {
    onClose();
    setTimeout(() => {
      document
        .getElementById(anchor)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 z-[60] overflow-y-auto p-4 sm:p-6"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Buscador"
        className="w-full max-w-2xl mx-auto my-6 sm:my-16 bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 shrink-0">
          <h2 className="text-lg font-bold text-slate-900">Buscar</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar buscador"
            className="text-slate-500 hover:text-slate-900 text-xl cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="p-5 flex flex-col min-h-0 flex-1">
          <div className="flex items-center gap-2 border border-slate-300 rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-slate-300 shrink-0">
            <span className="text-lg" aria-hidden="true">
              🔍
            </span>
            <input
              ref={inputRef}
              type="search"
              autoComplete="off"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ej: cilindro, contacto, servicios..."
              className="w-full outline-none text-slate-900"
            />
          </div>

          <div className="flex gap-2 mt-3 shrink-0" role="tablist">
            {FILTERS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={filter === id}
                onClick={() => setFilter(id)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  filter === id
                    ? "bg-fg-brand text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <p
            className="text-sm text-slate-500 mt-3 shrink-0"
            aria-live="polite"
          >
            {status}
          </p>

          <div className="mt-4 space-y-2 overflow-y-auto flex-1 min-h-0">
            {q && total === 0 && (
              <div className="py-8 text-center text-slate-500 text-sm">
                Prueba con otro término o cambia de filtro.
              </div>
            )}

            {visibleProducts.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => goToProduct(p)}
                className={resultClass}
              >
                <div className="w-14 h-14 shrink-0 rounded-lg bg-slate-50 flex items-center justify-center p-2">
                  <img
                    src={`${imageBase}${p.image}`}
                    alt=""
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-slate-900 group-hover:text-fg-brand truncate transition-colors">
                    {p.name}
                  </p>
                  <p className="text-sm text-slate-500">{money(p.price)}</p>
                </div>
                {showLabel && (
                  <span className="hidden sm:inline-block text-xs font-medium text-slate-400 bg-slate-100 rounded-full px-2 py-1 shrink-0">
                    Producto
                  </span>
                )}
                <span
                  className="hidden sm:inline text-fg-brand shrink-0"
                  aria-hidden="true"
                >
                  →
                </span>
              </button>
            ))}

            {visibleSections.map((s) => (
              <button
                key={s.anchor}
                type="button"
                onClick={() => goToSection(s.anchor)}
                className={resultClass}
              >
                <div
                  aria-hidden="true"
                  className="w-14 h-14 shrink-0 rounded-lg bg-slate-50 flex items-center justify-center text-2xl"
                >
                  📄
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-slate-900 group-hover:text-fg-brand truncate transition-colors">
                    {s.name}
                  </p>
                  <p className="text-sm text-slate-500 truncate">
                    Ir a esta sección de la página
                  </p>
                </div>
                {showLabel && (
                  <span className="hidden sm:inline-block text-xs font-medium text-slate-400 bg-slate-100 rounded-full px-2 py-1 shrink-0">
                    Página
                  </span>
                )}
                <span
                  className="hidden sm:inline text-fg-brand shrink-0"
                  aria-hidden="true"
                >
                  →
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
