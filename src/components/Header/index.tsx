import { SearchContext } from '@/context';
import { useContext } from 'react';

const Header = (): JSX.Element => {
  const { updateQuery } = useContext(SearchContext);

  function IconSearch(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg fill="currentColor" width="1em" height="1em" viewBox="0 0 20 20" {...props}>
        <path d="m17.545 15.467-3.779-3.779a6.15 6.15 0 0 0 .898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 0 0 2.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 0 0 3.115-.844l3.799 3.801a.953.953 0 0 0 1.346 0l.943-.943c.371-.371.236-.84-.135-1.211M4.004 8.287a4.28 4.28 0 0 1 4.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 0 1-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474" />
      </svg>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateQuery(e.target.value);
  };

  return (
    <header className="w-full md:px-10 md:py-10 px-5 py-5 flex md:justify-between justify-around items-center">
      <div>
        <img src="./samy-ecommerce.png" alt="Company logo" className="w-20 h-auto md:w-40 lg:w-52" />
      </div>
      <label className="w-2/3 md:w-2/4 relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <IconSearch className="md:h-7 md:w-7 h-5 w-5 text-black" />
        </span>
        <input
          className="placeholder:text-gray-400 placeholder:font-semibold block text-black bg-gray-200 w-full border-0 rounded-3xl py-2 pl-8 md:pl-12 pr-3 shadow-sm focus:outline-none focus:border-gray-300 focus:ring-gray-300 focus:ring-1 text-sm md:text-base"
          placeholder="Are you looking for something?"
          type="text"
          name="search"
          onChange={handleChange}
        />
      </label>
    </header>
  );
};

export default Header;
