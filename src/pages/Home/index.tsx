import { fetchProductsData } from '@/api';
import { ProductCard } from '@/components/ProductCard';
import { SearchContext } from '@/context';
import { Product } from '@/index.types';
import { useContext, useEffect, useState } from 'react';

const Home = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([]);
  const { query } = useContext(SearchContext);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts = await fetchProductsData();
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  return (
    <section className="w-full h-auto bg-gray-200/50">
      <div className="w-full p-10 md:p-20 flex md:grid flex-col grid-cols-2 md:gap-7 justify-center items-center gap-14">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Home;
