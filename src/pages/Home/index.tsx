import { fetchProductsData } from '@/api';
import { ProductCard } from '@/components/ProductCard';
import { SearchContext } from '@/context';
import { Product } from '@/index.types';
import { useContext, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = (): JSX.Element => {
  const itemsPerPage = 5;
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [productsToShow, setProductsToShow] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const { query } = useContext(SearchContext);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts = await fetchProductsData();
      setProducts(fetchedProducts);
      if (currentPage === 1) {
        setProductsToShow(fetchedProducts.slice(0, itemsPerPage));
      }
    }
    if (products.length === 0) {
      fetchProducts();
    }
    if (query.length > 0) {
      const filtered = productsToShow.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()));
      setFilteredProducts(filtered);
    }
  }, [query]);

  const getNextPage = () => {
    if (currentPage * itemsPerPage >= products.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setProductsToShow((prev) => [...prev, ...products.slice(prev.length, prev.length + itemsPerPage)]);
      setCurrentPage((prev) => prev + 1);
    }, 3000);
  };

  return (
    <section className="w-full h-auto bg-gray-200/50">
      {query.length > 0 ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 p-10 gap-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => <ProductCard key={product.id} {...product} />)
          ) : (
            <h4 className="w-full md:col-span-2 xl:col-span-4 text-3xl text-center">No products found</h4>
          )}
        </div>
      ) : (
        <InfiniteScroll
          className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 p-10 gap-10"
          dataLength={productsToShow.length}
          next={getNextPage}
          hasMore={hasMore}
          loader={<h4 className="w-full md:col-span-2 xl:col-span-4 text-3xl text-center">Loading...</h4>}
          endMessage={<h4 className="w-full md:col-span-2 xl:col-span-4 text-3xl text-center">No more products to show</h4>}
        >
          {productsToShow.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </InfiniteScroll>
      )}
    </section>
  );
};

export default Home;
