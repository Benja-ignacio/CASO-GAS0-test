import ProductCard from "./ProductCard";
import { useCart } from "./CartContext";
import { PRODUCTS } from "../data/productos";

export default function FeaturedProducts() {
  const { addToCart } = useCart();
  const featured = PRODUCTS.filter((p) => p.featured);

  return (
    <section id="productos" className="max-w-7xl mx-auto px-8 py-16">
      <h2 className="text-3xl font-bold mb-8">Productos destacados</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}
