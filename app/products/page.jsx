import axios from "axios";
import ProductCard from "@components/ProductCard";

const fetchProducts = async () => {
  const response = await axios.get(`${process.env.DOMAIN_URL}/api/products`);
  return response.data.products;
};

const ProductsPage = async () => {
  const response = await fetchProducts();

  return (
    <section className="px-[48px] my-[60px]">
      <div className="grid grid-cols-4 gap-[16px]">
        {response.map((product) => (
          <ProductCard key={product.slug} data={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
